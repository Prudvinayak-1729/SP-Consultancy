import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import logo from '/assets/img/SPC Logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'IT Services', path: '/it-services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects Delivered', path: '/projects' },
  { label: 'Quality', path: '/quality' },
  { label: 'Technology', path: '/technology' },
  { label: 'Insights', path: '/insights' },
]

const itServicesLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'How we build', href: '#principles' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'Terms', href: '#terms' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isITServices = pathname === '/it-services'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleSearchClick = () => {
    navigate('/search')
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={logo}
              alt="Sneha and Prahar Consultancy Services Logo"
              style={{
                width: 'clamp(32px, 4vw, 48px)',
                height: 'auto',
                display: 'block',
              }}
            />
            <div className="flex flex-col" style={{ whiteSpace: 'nowrap' }}>
              <span
                className="font-bold leading-none"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: 'clamp(12px, 1.6vw, 17px)',
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                  color: '#008B8B',
                }}
              >
                Sneha &amp; Prahar
              </span>
              <span
                className="leading-none mt-0.5 text-[9px] sm:text-[11px]"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.12em',
                  color: '#008B8B',
                  textTransform: 'uppercase',
                }}
              >
                Consultancy Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Switches on IT Services */}
          {isITServices ? (
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-6">
              {itServicesLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/"
                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                ← Main Site
              </Link>
            </nav>
          ) : (
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-5 ml-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-xs xl:text-sm ${pathname === link.path ? 'active font-semibold text-blue-600' : 'text-gray-700'}`}
                  style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {isITServices ? (
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center font-semibold text-xs sm:text-sm text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-90 shadow-sm"
                style={{ background: '#111827' }}
              >
                Book a call
              </a>
            ) : (
              <>
                <button
                  onClick={handleSearchClick}
                  className="flex p-2 rounded-lg transition-colors hover:bg-gray-100 text-gray-700"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex btn-primary"
                  style={{
                    padding: '8px 18px',
                    fontSize: '13px',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Contact Us
                </Link>
              </>
            )}

            {/* Mobile menu trigger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 text-gray-800"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div className="flex flex-col pt-24 px-6 gap-1 overflow-y-auto max-h-screen pb-12">
          {isITServices ? (
            <>
              {itServicesLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 border-b border-gray-100 text-lg font-bold text-gray-800"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-3.5 border-b border-gray-100 text-sm font-semibold text-blue-600"
              >
                ← Return to SPC Main Site
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 justify-center py-3 text-sm rounded-full"
                style={{ background: '#111827' }}
              >
                Book a call
              </a>
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-3 border-b border-gray-100 flex items-center justify-between text-base sm:text-lg font-bold"
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    color: pathname === link.path ? '#0969E8' : '#0B2545',
                  }}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
              <button
                onClick={handleSearchClick}
                className="py-3 border-b border-gray-100 flex items-center gap-3 text-base font-bold text-gray-800"
              >
                <Search size={18} /> Search
              </button>
              <Link
                to="/contact"
                className="btn-primary mt-4 justify-center py-3 text-sm"
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}


