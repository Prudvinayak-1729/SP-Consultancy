import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const services = [
  'Engineering Consultancy', 'HVAC Systems Design', 'Cleanroom Engineering',
  'Utility Engineering', 'CSV & Validation', 'Equipment Qualification',
  'Water Systems (WFI/PW)', 'Automation & BMS', 'Shutdown Services',
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'Quality & Compliance', path: '/quality' },
  { label: 'Technology', path: '/technology' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

const standards = ['WHO GMP Certified', 'US FDA Compliance', 'ISPE Member']

export default function Footer() {
  return (
    <footer style={{ background: '#040f1f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Top CTA band */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(0,87,255,0.15) 0%, rgba(0,168,120,0.1) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="section-label mb-3"
              style={{ color: '#00A878', justifyContent: 'flex-start' }}
            >
              Ready to Build Excellence
            </p>
            <h3
              className="section-heading text-3xl md:text-4xl"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Let&apos;s engineer your next{' '}
              <span className="gradient-text">pharmaceutical facility.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="btn-primary flex-shrink-0"
            style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(13px, 2vw, 15px)' }}
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/assets/img/logo.png"
              alt="Sneha and Prahar Consultancy Services Logo"
              style={{
                width: 'clamp(32px, 4vw, 50px)',
                height: 'auto',
                display: 'block',
                maxWidth: '50px',
              }}
            />
            <div>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 2vw, 16px)', color: 'white' }}>
                Sneha &amp; Prahar
              </p>
              <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 1.2vw, 11px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                Consultancy Services
              </p>
            </div>
          </div>
          <p className="body-text text-sm leading-relaxed mb-6">
            World-class pharmaceutical engineering consultancy delivering regulatory-compliant,
            technically advanced solutions since 2022.
          </p>
          {/* Standards */}
          <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(10px, 2vw, 12px)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px', marginTop: '16px' }}>
            Compliance Standards
          </p>
          <div className="flex flex-wrap gap-2">
            {standards.map(s => (
              <span
                key={s}
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(0,168,120,0.25)',
                  background: 'rgba(0,168,120,0.07)',
                  fontFamily: 'Space Grotesk',
                  fontSize: 'clamp(9px, 2vw, 11px)',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.04em',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
            }}
          >
            Our Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map(s => (
              <li key={s}>
                <Link
                  to="/services"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{ color: 'rgba(0,87,255,0.5)', fontSize: 'clamp(9px, 2vw, 10px)' }}>▸</span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
            }}
          >
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {company.map(c => (
              <li key={c.path}>
                <Link
                  to={c.path}
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{ color: 'rgba(0,168,120,0.5)', fontSize: 'clamp(9px, 2vw, 10px)' }}>▸</span>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
            }}
          >
            Get In Touch
          </h4>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, marginTop: 2 }}>
                <MapPin size={15} style={{ color: '#00A878' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  #8-80/80NP, Ramidi Malla Reddy Nagar,<br />
                  Almasguda, Badangpet,<br />
                  Hyderabad, Telangana — 500081,<br />
                  India
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0 }}>
                <Phone size={15} style={{ color: '#0057FF' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.7)' }}>+91 90008 77499</p>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.7)' }}>+91 88014 11271</p>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.7)' }}>+91 82962 76148</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0 }}>
                <Mail size={15} style={{ color: '#00A878' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.7)' }}>spconsultanancies@gmail.com</p>
              </div>
            </div>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(0,168,120,0.08)',
                border: '1px solid rgba(0,168,120,0.2)',
                marginTop: '4px',
              }}
            >
              <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 600, color: '#00A878', letterSpacing: '0.06em', marginBottom: '4px' }}>
                WORKING HOURS
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: 'rgba(255,255,255,0.6)' }}>
                Monday – Saturday: 9:00 AM – 7:00 PM<br />
                Sunday: Emergency Support Only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: 'rgba(255,255,255,0.3)' }}>
            © 2024 Sneha and Prahar Consultancy Services. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: 'rgba(255,255,255,0.3)' }}>
            Founded 2022 · Hyderabad, India · Pharmaceutical Engineering Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}