import { Award, Shield, Users, Globe } from 'lucide-react'

const services = [
  { title: 'Engineering Consultancy', desc: 'Concept to commissioning engineering for GMP facilities', color: '#0057FF' },
  { title: 'HVAC Systems', desc: 'Precision HVAC design for cleanroom environments', color: '#00A878' },
  { title: 'Cleanroom Engineering', desc: 'Cleanroom design and qualification', color: '#0057FF' },
  { title: 'Utility Engineering', desc: 'Pharmaceutical-grade utility systems design', color: '#00A878' },
  { title: 'CSV & Validation', desc: 'Computer system validation per GAMP 5 guidelines', color: '#0057FF' },
  { title: 'Facility Audit Readiness', desc: 'GMP gap assessment and regulatory inspection support', color: '#00A878' },
  { title: 'MES', desc: 'Manufacturing Execution System implementation and integration', color: '#0057FF' },
  { title: 'Temperature Mapping', desc: 'Thermal validation and temperature mapping studies', color: '#00A878' },
  { title: 'IQ / OQ / PQ', desc: 'Installation, operational, and performance qualification', color: '#0057FF' },
  { title: 'Water Systems', desc: 'WFI, PW, and water for injection loop design', color: '#0057FF' },
  { title: 'Automation & BMS', desc: 'Integrated building management and process automation', color: '#00A878' },
  { title: 'Shutdown Services', desc: 'Planned maintenance shutdown and turnaround management', color: '#0057FF' },
  { title: 'Energy Audits', desc: 'Energy efficiency assessment and decarbonization planning', color: '#00A878' },
  { title: 'Documentation', desc: 'GMP documentation, SOPs, and validation protocols', color: '#0057FF' },
  { title: 'Equipment Qualification', desc: 'Risk-based equipment qualification and requalification', color: '#00A878' },
  { title: 'Process Engineering', desc: 'Process flow development, PFDs, P&IDs, equipment sizing, utility calculations, and process optimization.', color: '#0057FF' },
  {
    title: 'CQV Services',
    desc: 'Commissioning, Qualification & Validation (CQV) for facilities, utilities, equipment, and manufacturing systems.',
    color: '#00A878',
  },
  {
    title: 'Project Management Consultancy',
    desc: 'End-to-end project planning, coordination, execution, monitoring, and successful delivery of pharmaceutical engineering projects.',
    color: '#0057FF',
  },
  {
    title: 'Greenfield & Brownfield Projects',
    desc: 'Complete engineering, expansion, modernization, commissioning, and validation of pharmaceutical manufacturing facilities.',
    color: '#00A878',
  },
]

const values = [
  { icon: <Award size={20} style={{ color: '#0057FF' }} />, title: 'Engineering Excellence', desc: 'Rigorous technical standards in every deliverable, every time.' },
  { icon: <Shield size={20} style={{ color: '#00A878' }} />, title: 'Regulatory Integrity', desc: 'Compliance is not an afterthought — it is the foundation of every design decision.' },
  { icon: <Users size={20} style={{ color: '#0057FF' }} />, title: 'Client Partnership', desc: 'Long-term relationships built on transparency, responsiveness, and shared success.' },
  { icon: <Globe size={20} style={{ color: '#00A878' }} />, title: 'Global Mindset', desc: 'World-class engineering practices applied to local market realities.' },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5">Our Services</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            End-to-End
            <br />
            <span className="gradient-text">Engineering Capabilities</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            Comprehensive pharmaceutical engineering services from concept to commissioning. 
            We deliver regulatory-compliant solutions for cleanrooms, utilities, automation, 
            validation, and complete facility projects across India and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-card flex flex-col h-full"
                style={{ padding: 'clamp(18px, 2vw, 22px) clamp(16px, 2vw, 20px)' }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: s.color,
                    marginBottom: 'clamp(10px, 2vw, 14px)',
                    boxShadow: `0 0 12px ${s.color}`,
                  }}
                />
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 2vw, 15px)', color: '#111827', marginBottom: '8px', lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#4B5563', lineHeight: 1.7, flex: 1 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card" style={{ padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px)' }}>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: '#111827', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Industry Focus</h3>
            <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.7, textAlign: 'justify' }}>
              We specialize in Life Sciences service verticals including pharmaceuticals, medical equipment manufacturing, genetics research, and biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Core Values</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              The Principles That
              <span className="gradient-text"> Guide Every Decision</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2vw, 24px)', textAlign: 'center' }}>
                <div className="icon-box" style={{ margin: '0 auto clamp(12px, 2vw, 18px)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: '#111827', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#4B5563', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
