import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '/assets/img/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'Quality', path: '/quality' },
  { label: 'Technology', path: '/technology' },
  { label: 'Insights', path: '/insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(7,27,59,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-4 group" style={{ textDecoration: 'none' }}>
            <img
              src={logo}
              alt="Sneha and Prahar Consultancy Services Logo"
              style={{
                width: 'clamp(33px, 5.05vw, 91px)',
                height: 'auto',
                display: 'block',
                maxWidth: '91px',
              }}
            />
            <div className="hidden sm:flex flex-col">
              <span
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: 'clamp(12px, 2.2vw, 19px)',
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                }}
              >
                Sneha &amp; Prahar
              </span>
              <span
                className="leading-none mt-0.5"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(8px, 1.4vw, 13px)',
                  letterSpacing: '0.14em',
                  color: 'white',
                  textTransform: 'uppercase',
                }}
              >
                Consultancy Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary"
              style={{
                padding: 'clamp(8px, 1.5vw, 10px) clamp(16px, 2vw, 22px)',
                fontSize: 'clamp(11px, 2vw, 13px)',
              }}
            >
              Contact Us
            </Link>
            <button
              className="lg:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          background: 'rgba(7,27,59,0.97)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div className="flex flex-col pt-28 px-8 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-4 border-b"
              style={{
                borderColor: 'rgba(255,255,255,0.07)',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'clamp(18px, 3vw, 22px)',
                fontWeight: '700',
                color: pathname === link.path ? '#0057FF' : 'white',
                textDecoration: 'none',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.35s cubic-bezier(0.22,1,0.36,1) ${i * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-6 justify-center"
            style={{ fontSize: 'clamp(13px, 2vw, 15px)', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}