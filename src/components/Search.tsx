import { useState, useEffect, useRef, useCallback } from 'react'
import { Search as SearchIcon, X, Clock, ArrowRight } from 'lucide-react'
import { searchIndex, SearchResult, getAllKeywords } from '../data/searchIndex'

interface SearchProps {
  isModal?: boolean
  onClose?: () => void
  autoFocus?: boolean
}

// Fuzzy matching function using Levenshtein distance
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length
  const n = str2.length
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }
  return dp[m][n]
}

// Calculate relevance score for a search result with strict matching
function calculateRelevance(result: SearchResult, query: string): number {
  let score = 0
  const queryLower = query.toLowerCase()
  
  // Priority 1: Exact title match (highest)
  if (result.title.toLowerCase() === queryLower) {
    score += 100
  }
  // Priority 2: Title starts with query
  else if (result.title.toLowerCase().startsWith(queryLower)) {
    score += 80
  }
  // Priority 3: Title includes query
  else if (result.title.toLowerCase().includes(queryLower)) {
    score += 60
  }
  
  // Priority 4: Section name match
  if (result.section.toLowerCase() === queryLower) {
    score += 50
  } else if (result.section.toLowerCase().includes(queryLower)) {
    score += 30
  }
  
  // Priority 5: Exact keyword match (only if no title match)
  if (score === 0) {
    result.keywords.forEach(keyword => {
      if (keyword.toLowerCase() === queryLower) {
        score += 40
      } else if (keyword.toLowerCase().startsWith(queryLower)) {
        score += 25
      } else if (keyword.toLowerCase().includes(queryLower)) {
        score += 15
      }
    })
  }
  
  // Priority 6: Description match (only if no better match)
  if (score === 0 && result.description.toLowerCase().includes(queryLower)) {
    score += 10
  }
  
  // Priority boost for important pages (only if there's already a match)
  if (score > 0) {
    score += result.priority * 2
  }
  
  return score
}

// Search function with strict matching
function performSearch(query: string): SearchResult[] {
  if (!query || query.length < 2) return []
  
  const results = searchIndex
    .map(result => ({
      ...result,
      relevanceScore: calculateRelevance(result, query)
    }))
    .filter(result => result.relevanceScore > 30) // Require minimum relevance score
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10) // Limit to top 10 most relevant results
  
  return results
}

export default function Search({ isModal = false, onClose, autoFocus = true }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Save recent searches to localStorage
  const saveRecentSearch = useCallback((searchTerm: string) => {
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  }, [recentSearches])

  // Perform search with debounce
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([])
      setSuggestions([])
      setSelectedIndex(-1)
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      const searchResults = performSearch(query)
      setResults(searchResults)
      
      // Get suggestions from keywords
      const allKeywords = getAllKeywords()
      const matchingKeywords = allKeywords
        .filter(keyword => keyword.toLowerCase().includes(queryLower))
        .slice(0, 5)
      setSuggestions(matchingKeywords)
      
      setIsSearching(false)
      setSelectedIndex(-1)
    }, 200)

    const queryLower = query.toLowerCase()
    return () => clearTimeout(timer)
  }, [query])

  // Auto-focus input
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (onClose) onClose()
        setQuery('')
        setResults([])
      }
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        )
      }
      
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
      }
      
      if (e.key === 'Enter' && selectedIndex >= 0) {
        const selected = results[selectedIndex]
        if (selected) {
          saveRecentSearch(query)
          window.location.href = selected.path
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [results, selectedIndex, query, onClose, saveRecentSearch])

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm)
    saveRecentSearch(searchTerm)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setSuggestions([])
    if (inputRef.current) inputRef.current.focus()
  }

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(query)
    window.location.href = result.path
  }

  return (
    <div
      className={isModal ? 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm' : ''}
      style={isModal ? {} : { minHeight: '100vh', paddingTop: '80px' }}
      onClick={isModal ? onClose : undefined}
    >
      <div
        className="max-w 4xl mx-auto"
        style={isModal ? { marginTop: '15vh' } : {}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Container */}
        <div
          className="glass-card"
          style={{
            padding: isModal ? '24px' : '20px',
            margin: isModal ? '0 20px' : '0 auto',
            maxWidth: '800px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <SearchIcon size={20} style={{ color: '#0969E8', flexShrink: 0 }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, industries, projects, standards..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontFamily: 'Inter',
                color: '#111827',
                background: 'transparent'
              }}
              aria-label="Search"
              aria-autocomplete="list"
              aria-controls="search-results"
              role="combobox"
            />
            {query && (
              <button
                onClick={clearSearch}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px'
                }}
                aria-label="Clear search"
              >
                <X size={18} style={{ color: '#6B7280' }} />
              </button>
            )}
            {isModal && onClose && (
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px'
                }}
                aria-label="Close search"
              >
                <X size={18} style={{ color: '#6B7280' }} />
              </button>
            )}
          </div>

          {/* Search Tips */}
          {!query && (
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#6B7280', fontFamily: 'Inter' }}>
              <span style={{ fontWeight: 600 }}>Tips:</span> Use keywords like "CSV", "HVAC", "GMP", "validation", "cleanroom", or browse by section
            </div>
          )}
        </div>

        {/* Search Results */}
        <div
          ref={resultsRef}
          id="search-results"
          role="listbox"
          style={{
            marginTop: '16px',
            margin: isModal ? '16px 20px 0' : '16px auto 0',
            maxWidth: '800px'
          }}
        >
          {/* Loading State */}
          {isSearching && (
            <div
              className="glass-card"
              style={{ padding: '20px', textAlign: 'center', color: '#6B7280' }}
            >
              Searching...
            </div>
          )}

          {/* No Results */}
          {!isSearching && query && query.length >= 2 && results.length === 0 && (
            <div
              className="glass-card"
              style={{ padding: '40px 20px', textAlign: 'center' }}
            >
              <SearchIcon size={48} style={{ color: '#D1D5DB', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Satoshi', fontSize: '18px', color: '#111827', marginBottom: '8px' }}>
                No results found
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#6B7280', marginBottom: '16px' }}>
                Try different keywords or browse our sections
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {['CSV', 'HVAC', 'GMP', 'validation', 'cleanroom'].map(keyword => (
                  <button
                    key={keyword}
                    onClick={() => handleSearch(keyword)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0,87,255,0.2)',
                      background: 'rgba(0,87,255,0.05)',
                      color: '#0969E8',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: 'Inter'
                    }}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="glass-card" style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Clock size={16} style={{ color: '#6B7280' }} />
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '12px', fontWeight: 600, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Recent Searches
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {recentSearches.map(search => (
                  <button
                    key={search}
                    onClick={() => handleSearch(search)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      background: 'rgba(0,0,0,0.03)',
                      color: '#475569',
                      fontSize: '13px',
                      cursor: 'pointer',
                      fontFamily: 'Inter'
                    }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results List */}
          {!isSearching && results.length > 0 && (
            <>
              <div style={{ marginBottom: '12px', fontSize: '13px', color: '#6B7280', fontFamily: 'Inter' }}>
                {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
              </div>
              <div className="glass-card" style={{ padding: '8px' }}>
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '8px',
                      border: 'none',
                      background: selectedIndex === index ? 'rgba(0,87,255,0.1)' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    role="option"
                    aria-selected={selectedIndex === index}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              background: 'rgba(0,87,255,0.1)',
                              fontSize: '10px',
                              fontWeight: 600,
                              color: '#0969E8',
                              fontFamily: 'Space Grotesk',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {result.section}
                          </span>
                          <h3
                            style={{
                              fontFamily: 'Satoshi',
                              fontSize: '15px',
                              fontWeight: 700,
                              color: '#111827',
                              margin: 0
                            }}
                          >
                            {result.title}
                          </h3>
                        </div>
                        <p
                          style={{
                            fontFamily: 'Inter',
                            fontSize: '13px',
                            color: '#475569',
                            lineHeight: 1.5,
                            margin: 0,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {result.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
                          {result.keywords.slice(0, 3).map(keyword => (
                            <span
                              key={keyword}
                              style={{
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: 'rgba(0,0,0,0.05)',
                                fontSize: '10px',
                                color: '#6B7280',
                                fontFamily: 'Inter'
                              }}
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: '#0969E8', flexShrink: 0, marginTop: '4px' }} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Suggestions */}
          {!isSearching && query && query.length >= 2 && suggestions.length > 0 && results.length === 0 && (
            <div className="glass-card" style={{ padding: '16px', marginTop: '12px' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '12px', fontWeight: 600, color: '#6B7280', marginBottom: '8px' }}>
                Suggested keywords
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {suggestions.map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0,87,255,0.2)',
                      background: 'rgba(0,87,255,0.05)',
                      color: '#0969E8',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: 'Inter'
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
