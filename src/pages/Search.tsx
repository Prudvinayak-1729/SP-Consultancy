import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  useEffect(() => {
    // Update page title dynamically
    if (query) {
      document.title = `Search: "${query}" | Sneha & Prahar Consultancy Services`
    } else {
      document.title = 'Search | Sneha & Prahar Consultancy Services'
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        query 
          ? `Search results for "${query}" - Find pharmaceutical engineering services, CQV, CSV, MES, facility audit readiness, temperature mapping, cleanroom engineering, and GMP compliance solutions.`
          : 'Search Sneha & Prahar Consultancy Services - Find pharmaceutical engineering services, CQV, CSV, MES, facility audit readiness, temperature mapping, cleanroom engineering, and GMP compliance solutions.'
      )
    }

    // Add noindex meta tag for search pages
    let noindexTag = document.querySelector('meta[name="robots"]')
    if (!noindexTag) {
      noindexTag = document.createElement('meta')
      noindexTag.setAttribute('name', 'robots')
      document.head.appendChild(noindexTag)
    }
    noindexTag.setAttribute('content', 'noindex, nofollow')

    // Cleanup on unmount
    return () => {
      document.title = 'Sneha & Prahar Consultancy Services | Pharmaceutical Engineering Consultancy'
      const defaultMetaDescription = document.querySelector('meta[name="description"]')
      if (defaultMetaDescription) {
        defaultMetaDescription.setAttribute(
          'content',
          'Sneha & Prahar Consultancy Services - Leading pharmaceutical engineering consultancy providing CQV, CSV, MES, facility audit readiness, temperature mapping, cleanroom engineering, and GMP compliance solutions since 2022.'
        )
      }
      if (noindexTag) {
        noindexTag.setAttribute('content', 'index, follow')
      }
    }
  }, [query])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Search isModal={false} autoFocus={true} />
      </main>
      <Footer />
    </div>
  )
}
