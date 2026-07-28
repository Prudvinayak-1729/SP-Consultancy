import { Cpu, Globe, Shield, Zap } from 'lucide-react'
import techImage from '/assets/img/Technology.png'

const capabilities = [
  { icon: <Globe size={24} style={{ color: '#0057FF' }} />, title: 'Digital Twin Development', desc: 'Creating virtual replicas of pharmaceutical facilities for predictive maintenance, operational optimization, and regulatory change assessment without production disruption.' },
  { icon: <Cpu size={24} style={{ color: '#00A878' }} />, title: 'IoT & Industry 4.0 Integration', desc: 'Connecting facility systems — HVAC, utilities, equipment — into a unified digital intelligence layer for real-time visibility and predictive analytics.' },
  { icon: <Shield size={24} style={{ color: '#0057FF' }} />, title: 'Cybersecurity for OT Systems', desc: 'Pharmaceutical-specific OT/ICS cybersecurity assessment and hardening to protect critical manufacturing infrastructure from digital threats.' },
  { icon: <Zap size={24} style={{ color: '#00A878' }} />, title: 'AI-Assisted Engineering', desc: 'Leveraging artificial intelligence tools to accelerate drawing review, document QC, and design optimization — reducing engineering cycles by up to 25%.' },
]

export default function Technology() {
  return (
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
                <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #00A878, #0057FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Available Today
                </span>
              </h2>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  color: '#4B5563',
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
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#4B5563', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}