import { Cpu, Globe, Shield, Zap } from 'lucide-react'

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
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Engineering Software
            <br />
            <span className="gradient-text">at the Cutting Edge.</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px' }}>
            We invest in the most advanced engineering and digital tools available to deliver
            faster, more accurate, and better-documented pharmaceutical facility projects.
          </p>
        </div>
      </section>

      {/* Innovation showcase */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(0,87,255,0.15) 0%, rgba(0,168,120,0.1) 100%)',
                border: '1px solid rgba(0,87,255,0.2)',
                padding: '40px',
              }}
            >
              <div className="grid-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '20px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="stat-number gradient-text" style={{ fontSize: 'clamp(48px, 6vw, 64px)', lineHeight: 1, marginBottom: '8px' }}>BIM</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 24px)', color: 'white', marginBottom: '14px' }}>3D Building Information Modelling</h3>
                <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: '20px' }}>
                  100% of our facility projects are designed in full 3D BIM, enabling clash
                  detection, spatial coordination, accurate quantity take-offs, and visual
                  communication with clients and contractors.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['Autodesk Revit', 'Navisworks', 'BIM 360'].map(t => (
                    <span key={t} className="tag-pill" style={{ fontSize: 'clamp(9px, 2vw, 11px)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(0,168,120,0.15) 0%, rgba(0,87,255,0.1) 100%)',
                border: '1px solid rgba(0,168,120,0.2)',
                padding: '40px',
              }}
            >
              <div className="grid-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '20px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="stat-number gradient-text" style={{ fontSize: 'clamp(48px, 6vw, 64px)', lineHeight: 1, marginBottom: '8px' }}>CFD</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 24px)', color: 'white', marginBottom: '14px' }}>Computational Fluid Dynamics</h3>
                <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', marginBottom: '20px' }}>
                  Advanced CFD simulation for cleanroom airflow validation before construction,
                  ensuring air change rates, velocity profiles, and contamination control meet
                  ISO 14644 and EU GMP requirements.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['ANSYS Fluent', 'Simcenter', 'CFD-ACE+'].map(t => (
                    <span key={t} className="tag-pill" style={{ fontSize: 'clamp(9px, 2vw, 11px)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future capabilities */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Future Capabilities</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Tomorrow&apos;s Pharma Engineering,
              <span className="gradient-text"> Available Today</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <div key={i} className="glass-card-hover" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white', marginBottom: '10px' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
