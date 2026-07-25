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
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            We invest in the most advanced engineering and digital tools available to deliver
            faster, more accurate, and better-documented pharmaceutical facility projects.
          </p>
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
              <div key={i} className="glass-card" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
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
