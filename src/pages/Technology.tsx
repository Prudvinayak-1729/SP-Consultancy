import { Cpu, Globe, Shield, Zap } from 'lucide-react'

const techStack = [
  {
    category: 'Engineering Design',
    color: '#0057FF',
    tools: [
      { name: 'Autodesk Revit', desc: 'BIM-based 3D facility design with full MEP coordination', level: 90 },
      { name: 'AutoCAD MEP', desc: '2D detailed engineering drawings and P&ID development', level: 95 },
      { name: 'Navisworks', desc: '3D clash detection and coordination for complex multi-discipline projects', level: 85 },
      { name: 'ANSYS Fluent', desc: 'CFD simulation for cleanroom airflow modeling and validation', level: 75 },
    ],
  },
  {
    category: 'Process & Automation',
    color: '#00A878',
    tools: [
      { name: 'Siemens TIA Portal', desc: 'PLC programming for pharmaceutical process automation', level: 80 },
      { name: 'Wonderware / AVEVA', desc: 'SCADA system design and 21 CFR Part 11 compliant historian', level: 85 },
      { name: 'Honeywell Experion', desc: 'DCS configuration for utility and process systems', level: 75 },
      { name: 'Rockwell Studio 5000', desc: 'Allen-Bradley PLC programming for packaging and processing', level: 80 },
    ],
  },
  {
    category: 'Building Management',
    color: '#0057FF',
    tools: [
      { name: 'Siemens Desigo CC', desc: 'Integrated BMS platform for environmental monitoring and control', level: 85 },
      { name: 'Johnson Controls', desc: 'EMS/BMS for cleanroom temperature, RH, and pressure monitoring', level: 80 },
      { name: 'Vaisala EMS', desc: 'Environmental monitoring system integration and CSV qualification', level: 90 },
      { name: 'AMS Suite', desc: 'Predictive maintenance and asset health monitoring integration', level: 70 },
    ],
  },
  {
    category: 'Documentation & Compliance',
    color: '#00A878',
    tools: [
      { name: 'Kneat GxP', desc: 'Electronic validation management system for IQ/OQ/PQ execution', level: 85 },
      { name: 'Veeva Vault', desc: 'Quality document management and regulatory submission support', level: 75 },
      { name: 'Microsoft Azure', desc: 'Secure cloud-based project collaboration and document management', level: 80 },
      { name: 'Solumina MES', desc: 'Manufacturing execution system design and CSV validation', level: 70 },
    ],
  },
]

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

      {/* Tech stack */}
      <section className="mesh-bg-alt" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Technology Stack</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Industry-Leading Tools
              <span className="gradient-text"> in Expert Hands</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((cat, ci) => (
              <div key={ci} className="glass-card" style={{ padding: '28px' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '8px',
                      background: `rgba(${cat.color === '#0057FF' ? '0,87,255' : '0,168,120'},0.2)`,
                      border: `1px solid rgba(${cat.color === '#0057FF' ? '0,87,255' : '0,168,120'},0.3)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Cpu size={16} style={{ color: cat.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white' }}>{cat.category}</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {cat.tools.map((tool, ti) => (
                    <div key={ti}>
                      <div className="flex justify-between items-center mb-2">
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white' }}>{tool.name}</span>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: cat.color }}>{tool.level}%</span>
                      </div>
                      <div style={{ height: 4, borderRadius: '999px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${tool.level}%`,
                            borderRadius: '999px',
                            background: `linear-gradient(90deg, ${cat.color} 0%, ${cat.color}aa 100%)`,
                          }}
                        />
                      </div>
                      <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginTop: '6px' }}>{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
