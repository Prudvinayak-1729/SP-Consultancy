import { Phone, Mail, MapPin, Clock, Link2, MessageCircle, Globe } from 'lucide-react'

const offices = [
  {
    city: 'Hyderabad',
    tag: 'Headquarters',
    address: '#8-80/80NP, Ramidi Malla Reddy Nagar, Almasguda, Badangpet, Hyderabad — 500081, Telangana, India',
    phone: ['+91 90008 77499', '+91 88014 11271', '+91 82962 76148'],
    email: ['spconsultanancies@gmail.com'],
    mapImg: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?w=700&h=380&fit=crop&auto=format',
    color: '#0057FF',
  },
]

const contactMethods = [
  {
    icon: <Phone size={22} style={{ color: '#0057FF' }} />,
    title: 'Call Us Directly',
    desc: 'Speak with a senior engineer about your project requirements.',
    value: '+91 90008 77499',
    sub: 'Monday–Saturday, 9 AM – 7 PM IST',
    action: 'Call Now',
  },
  {
    icon: <MessageCircle size={22} style={{ color: '#00A878' }} />,
    title: 'WhatsApp',
    desc: 'Quick project enquiries and instant communication.',
    value: '+65 9353 0873',
    sub: 'Typically responds within 2 hours',
    action: 'Start Chat',
  },
  {
    icon: <Mail size={22} style={{ color: '#0057FF' }} />,
    title: 'Email',
    desc: 'Send detailed project briefs and RFQ documents.',
    value: 'spconsultanancies@gmail.com',
    sub: 'Response within 24 hours',
    action: 'Send Email',
  },
  {
    icon: <Link2 size={22} style={{ color: '#00A878' }} />,
    title: 'LinkedIn',
    desc: 'Follow our latest projects, insights, and company news.',
    value: 'Sneha & Prahar Consultancy',
    sub: 'Professional network',
    action: 'Connect',
    icon2: <Link2 size={22} style={{ color: '#00A878' }} />,
  },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Emergency Support Only' },
]

const specialties = [
  'New Pharmaceutical Facility Projects',
  'Cleanroom Design & Engineering',
  'HVAC System Design & Upgrade',
  'Validation & Qualification Services',
  'Regulatory Compliance Gap Assessment',
  'Shutdown Planning & Management',
  'Energy Audits & Optimization',
  'Computer System Validation (CSV)',
]

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-4 sm:mb-5">Contact Us</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Exceptional Together.</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px' }}>
            Whether you have a fully scoped project or are exploring options for a new facility —
            our team is ready to discuss your pharmaceutical engineering requirements.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-5">Get In Touch</div>
          <h2 className="section-heading mb-12" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            Multiple Ways to
            <span className="gradient-text"> Connect with Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((c, i) => (
              <div
                key={i}
                className="glass-card-hover"
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div className="icon-box">{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 16px)', color: 'white', marginBottom: '6px' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '10px' }}>{c.desc}</p>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 13px)', color: 'white', marginBottom: '4px' }}>{c.value}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(10px, 2vw, 11px)', color: 'rgba(255,255,255,0.35)' }}>{c.sub}</p>
                </div>
                <a
                  href={
                    c.title === 'Phone' ? 'tel:+919000877499' :
                    c.title === 'WhatsApp' ? 'https://wa.me/6593530873' :
                    c.title === 'Email' ? 'mailto:spconsultanancies@gmail.com' :
                    c.title === 'LinkedIn' ? 'https://www.linkedin.com/company/sneha-and-prahar-consultancy-services' : '#'
                  }
                  target={c.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={c.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  style={{
                    marginTop: 'auto',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: i % 2 === 0 ? 'rgba(0,87,255,0.15)' : 'rgba(0,168,120,0.15)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.3)' : 'rgba(0,168,120,0.3)'}`,
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 2vw, 13px)',
                    fontWeight: 600,
                    color: i % 2 === 0 ? '#3378FF' : '#00A878',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-5">Our Offices</div>
          <h2 className="section-heading mb-12" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            Find Us Across
            <span className="gradient-text"> India</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((o, i) => (
              <div key={i} className="gradient-border-card" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={o.mapImg}
                    alt={`${o.city} Office`}
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', filter: 'brightness(0.7) saturate(0.8)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(7,27,59,0.9) 0%, transparent 60%)` }} />
                  <div style={{ position: 'absolute', top: 16, left: 16 }}>
                    <span
                      style={{
                        padding: '5px 14px',
                        borderRadius: '999px',
                        background: o.color === '#0057FF' ? 'rgba(0,87,255,0.85)' : 'rgba(0,168,120,0.85)',
                        fontFamily: 'Space Grotesk',
                        fontSize: 'clamp(9px, 2vw, 11px)',
                        fontWeight: 700,
                        color: 'white',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {o.tag}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                    <h3 style={{ fontFamily: 'Satoshi', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 28px)', color: 'white' }}>{o.city}</h3>
                  </div>
                </div>
                <div style={{ padding: '28px' }}>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 items-start">
                      <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                        <MapPin size={15} style={{ color: o.color }} />
                      </div>
                      <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                        {o.address}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                        <Phone size={15} style={{ color: o.color }} />
                      </div>
                      <div>
                        {o.phone.map(p => (
                          <p key={p} style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.8)' }}>{p}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                        <Mail size={15} style={{ color: o.color }} />
                      </div>
                      <div>
                        {o.email.map(e => (
                          <p key={e} style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)' }}>{e}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working hours + specialties */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <div className="section-label mb-5">Working Hours</div>
            <h2 className="section-heading mb-8" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
              When to
              <span className="gradient-text"> Reach Us</span>
            </h2>
            <div className="flex flex-col gap-3">
              {hours.map(h => (
                <div
                  key={h.day}
                  className="glass-card"
                  style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div className="flex items-center gap-3">
                    <Clock size={15} style={{ color: '#0057FF' }} />
                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 'clamp(12px, 2vw, 14px)', color: 'white' }}>{h.day}</span>
                  </div>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(0,168,120,0.9)' }}>{h.time}</span>
                </div>
              ))}
            </div>
            <div
              className="glass-card"
              style={{ marginTop: '24px', padding: '20px', borderColor: 'rgba(0,87,255,0.25)', borderWidth: 1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone size={15} style={{ color: '#0057FF' }} />
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(11px, 2vw, 13px)', color: '#0057FF', letterSpacing: '0.06em' }}>
                  EMERGENCY SUPPORT
                </span>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                For critical project emergencies during commissioning or validation phases, our
                24/7 emergency support line is available to active project clients.
              </p>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <div className="section-label mb-5">Enquiry Types</div>
            <h2 className="section-heading mb-8" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
              We Specialize
              <span className="gradient-text"> In</span>
            </h2>
            <div className="flex flex-col gap-3">
              {specialties.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,87,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.25)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#0057FF' : '#00A878',
                      flexShrink: 0,
                      boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(0,87,255,0.5)' : 'rgba(0,168,120,0.5)'}`,
                    }}
                  />
                  <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.72)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, rgba(0,87,255,0.12) 0%, rgba(0,168,120,0.08) 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, rgba(0,87,255,0.5), transparent)' }} />
            <Globe size={16} style={{ color: '#0057FF' }} />
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, rgba(0,87,255,0.5), transparent)' }} />
          </div>
          <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            India&apos;s Premier Pharmaceutical
            <br />
            <span className="gradient-text">Engineering Consultancy</span>
          </h2>
          <p className="body-text mb-8" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '480px', margin: '0 auto 32px' }}>
            From Hyderabad to Mumbai, from Baddi to Chennai — we bring world-class pharmaceutical
            engineering to every corner of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919966000000" className="btn-primary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              <Phone size={16} /> Call Now
            </a>
            <a href="mailto:info@snehaandprahar.com" className="btn-secondary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              <Mail size={16} /> Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
