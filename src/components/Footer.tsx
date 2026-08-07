import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import logo from '/assets/img/SPC Logo.png'

const projectCategories = [
  'CSV & Validation', 'Facility Audit Readiness', 'Cleanroom Engineering', 'Engineering Consultancy',
  'HVAC Systems Design', 'Utility Engineering', 'Equipment Qualification',
  'Water Systems (WFI/PW)', 'Automation & BMS', 'Shutdown Services',
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'Quality & Compliance', path: '/quality' },
  { label: 'Technology', path: '/technology' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      {/* Top CTA band */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(0,87,255,0.05) 0%, rgba(0,168,120,0.03) 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          padding: '48px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="section-label mb-3"
              style={{ color: '#008C86', justifyContent: 'flex-start' }}
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
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8" style={{ width: '100%' }}>
        {/* Brand column */}
        <div className="lg:col-span-3" style={{ minWidth: 0 }}>
          <div className="flex items-center gap-3 mb-5">
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
            <div>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(14px, 2.02vw, 16px)', color: '#008B8B', textTransform: 'uppercase' }}>
                Sneha &amp; Prahar
              </p>
              <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 1.21vw, 11px)', letterSpacing: '0.12em', color: '#008B8B', textTransform: 'uppercase' }}>
                Consultancy Services
              </p>
            </div>
          </div>
          <p className="body-text text-sm leading-relaxed mb-6">
            World-class Pharmaceutical Engineering Consultancy delivering regulatory-compliant,
            technically advanced solutions since 2022.
          </p>
          {/* Compliance Standards section removed */}
        </div>

        {/* Projects */}
        <div className="lg:col-span-3" style={{ minWidth: 0 }}>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#475569',
              marginBottom: '20px',
            }}
          >
            Our Projects
          </h4>
          <ul className="flex flex-col gap-3">
            {projectCategories.map(s => (
              <li key={s}>
                <Link
                  to="/projects"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  <span style={{ color: 'rgba(0,87,255,0.5)', fontSize: 'clamp(9px, 2vw, 10px)' }}>▸</span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2" style={{ minWidth: 0 }}>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#475569',
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
                    color: '#475569',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  <span style={{ color: 'rgba(0,168,120,0.5)', fontSize: 'clamp(9px, 2vw, 10px)' }}>▸</span>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4" style={{ minWidth: 0 }}>
          <h4
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 12px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#475569',
              marginBottom: '20px',
            }}
          >
            Get In Touch
          </h4>
          <div className="flex flex-col gap-5">
            {/* Address – now exactly 3 lines for better readability */}
            <div className="flex gap-3 items-start">
              <div
                className="icon-box"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <MapPin size={15} style={{ color: '#008C86' }} />
              </div>

              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  color: '#111827',
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                #8-80/80NP, Ramidi Malla Reddy Nagar,<br />
                Almasguda, Badangpet, Hyderabad,<br />
                Telangana 500081, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center">
              <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0 }}>
                <Phone size={15} style={{ color: '#0969E8' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>+91 90008 77499</p>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>+91 88014 11271</p>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>+91 82962 76148</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center">
              <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0 }}>
                <Mail size={15} style={{ color: '#008C86' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>spconsultanancies@gmail.com</p>
              </div>
            </div>

            {/* Working Hours – exactly two lines, each with nowrap */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(0,168,120,0.08)',
                border: '1px solid rgba(0,168,120,0.2)',
                marginTop: '4px',
              }}
            >
              <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 600, color: '#008C86', letterSpacing: '0.06em', marginBottom: '4px' }}>
                WORKING HOURS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#475569', whiteSpace: 'nowrap' }}>
                  Monday – Saturday: 9:00 AM – 7:00 PM
                </span>
                <span style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#475569', whiteSpace: 'nowrap' }}>
                  Sunday: Emergency Support Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '20px 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#6B7280' }}>
            © 2026 Sneha and Prahar Consultancy Services. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(11px, 2vw, 13px)', color: '#6B7280' }}>
            Founded 2022 · Hyderabad, India · Pharmaceutical Engineering Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}


