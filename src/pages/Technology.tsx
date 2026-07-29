import { Cpu, Globe, Shield, Zap } from 'lucide-react'
import techImage from '/assets/img/Technology.png'
import SEO from '../components/SEO'

const capabilities = [
  { icon: <Globe size={24} style={{ color: '#0969E8' }} />, title: 'Digital Twin Development', desc: 'Creating virtual replicas of pharmaceutical facilities for predictive maintenance, operational optimization, and regulatory change assessment without production disruption.' },
  { icon: <Cpu size={24} style={{ color: '#008C86' }} />, title: 'IoT & Industry 4.0 Integration', desc: 'Connecting facility systems — HVAC, utilities, equipment — into a unified digital intelligence layer for real-time visibility and predictive analytics.' },
  { icon: <Shield size={24} style={{ color: '#0969E8' }} />, title: 'Cybersecurity for OT Systems', desc: 'Pharmaceutical-specific OT/ICS cybersecurity assessment and hardening to protect critical manufacturing infrastructure from digital threats.' },
  { icon: <Zap size={24} style={{ color: '#008C86' }} />, title: 'AI-Assisted Engineering', desc: 'Leveraging artificial intelligence tools to accelerate drawing review, document QC, and design optimization — reducing engineering cycles by up to 25%.' },
]

export default function Technology() {
  return (
    <>
      <SEO
        title="Technology - Digital Twin & Industry 4.0 Solutions"
        description="Cutting-edge pharmaceutical engineering technology including digital twin development, IoT integration, cybersecurity for OT systems, and AI-assisted engineering for faster, more accurate facility projects."
        canonical="/technology"
        keywords="digital twin pharmaceutical, Industry 4.0 pharma, IoT pharmaceutical engineering, OT cybersecurity, AI pharmaceutical engineering, digital engineering tools, smart manufacturing"
      />
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-4 sm:mb-5">Technology</div>
          <h1
            className="section-heading mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 60px)',
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              lineHeight: 1.2,
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Engineering Software</span>
            <span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>at the Cutting Edge.</span>
          </h1>
          <p
            className="body-text"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            We invest in the most advanced engineering and digital tools available to deliver faster, more accurate, and better-documented pharmaceutical facility projects.
          </p>
        </div>
      </section>

      {/* Future capabilities */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* ─── HEADER WITH IMAGE ─────────────────────────────────────── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 5vw, 80px)',
              alignItems: 'center',
              marginBottom: 'clamp(50px, 6vw, 80px)',
            }}
          >
            {/* Left: Heading */}
            <div>
              <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'flex-start' }}>
                Future Capabilities
              </div>
              <h2
                className="section-heading"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 52px)',
                  lineHeight: 1.15,
                }}
              >
                Tomorrow&apos;s Pharma
                <br />
                <span className="gradient-text">Engineering,</span>
                <br />
                <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #008C86, #0969E8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Available Today
                </span>
              </h2>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  color: '#475569',
                  marginTop: '16px',
                  maxWidth: '500px',
                  lineHeight: 1.7,
                }}
              >
                Leveraging next-generation digital tools to design, simulate, and validate
                pharmaceutical facilities with unprecedented speed and precision.
              </p>
            </div>

            {/* Right: Image */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 40px rgba(0,87,255,0.1)',
                position: 'relative',
              }}
            >
              <img
                src={techImage}
                alt="Technology capabilities"
                className="image-hover-effect"
                style={{
                  width: '100%',
                  height: 'clamp(220px, 25vw, 320px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Subtle overlay glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0,87,255,0.08) 0%, rgba(0,168,120,0.05) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* ─── CAPABILITIES CARDS ────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <div key={i} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#111827', marginBottom: '10px' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Corporate Profile</div>
            <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Sneha &amp; Prahar Consultancy
              <br />
              <span className="gradient-text">Services Highlights</span>
            </h2>
          </div>
          <div className="glass-card" style={{ padding: 'clamp(24px, 3vw, 36px) clamp(20px, 3vw, 32px)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                'Life Science & Pharmaceutical Engineering Solutions',
                'Qualification & Validation Support',
                'Facility and Utility Projects',
                'Automation & Improvement Projects',
                'Trusted Support Partner for Leading Pharma Organizations',
                'Cost & Energy Saving Expertise'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0969E8', flexShrink: 0, marginTop: '10px' }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.7, marginTop: '0px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}


