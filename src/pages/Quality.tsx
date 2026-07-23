import { Shield, CheckCircle, Award, FileText } from 'lucide-react'

const standards = [
  {
    name: 'WHO GMP',
    fullName: 'World Health Organization Good Manufacturing Practice',
    desc: 'Our engineering designs and validation protocols comply fully with WHO Technical Report Series guidelines for pharmaceutical manufacturing facility design, utilities, and environmental control.',
    scope: ['Facility layout and flow design', 'HVAC classification requirements', 'Water system specifications', 'Documentation requirements', 'Qualification and validation approach'],
    color: '#0057FF',
  },
  {
    name: 'US FDA 21 CFR',
    fullName: 'Parts 210, 211, 211.68, and 820',
    desc: 'Deep expertise in USFDA current Good Manufacturing Practice regulations, including 21 CFR Part 11 electronic records, equipment qualification, and process validation requirements.',
    scope: ['21 CFR Part 211 facility design', '21 CFR Part 11 compliance for BMS/SCADA', 'Equipment qualification per FDA guidance', 'Process validation (PV) per FDA 2011 guidance', 'Data integrity ALCOA+ principles'],
    color: '#00A878',
  },
  {
    name: 'EU GMP Annex 1',
    fullName: 'Manufacture of Sterile Medicinal Products (2023 Revision)',
    desc: 'Comprehensive capability in designing, qualifying, and maintaining sterile manufacturing facilities to the 2023 revised EU GMP Annex 1, including contamination control strategy (CCS) documentation.',
    scope: ['Contamination Control Strategy (CCS)', 'Grade A/B/C/D HVAC design', 'RABS and isolator integration', 'Viable and non-viable monitoring', 'Annex 1 qualification protocols'],
    color: '#0057FF',
  },
  {
    name: 'ISO 14644',
    fullName: 'Cleanrooms and Associated Controlled Environments',
    desc: 'Certified expertise in ISO 14644 Parts 1-4 covering cleanroom classification, design, construction, test methods, and operations for pharmaceutical and biotech applications.',
    scope: ['ISO Classes 1-9 design', 'Air cleanliness measurement methods', 'Cleanroom design considerations', 'Operations and maintenance standards', 'Energy efficiency ISO 14644-16'],
    color: '#00A878',
  },
  {
    name: 'Schedule M (India)',
    fullName: 'Good Manufacturing Practices for Pharmaceutical Products',
    desc: 'Comprehensive knowledge of India&apos;s revised Schedule M (2023) requirements for pharmaceutical manufacturing facilities, covering factory premises, equipment, and environmental conditions.',
    scope: ['Factory layout per Schedule M', 'Clean area classification', 'Water system requirements', 'Air handling specifications', 'Documentation and records'],
    color: '#0057FF',
  },
  {
    name: 'ISPE Guidelines',
    fullName: 'International Society for Pharmaceutical Engineering',
    desc: 'Active application of ISPE Baseline Guides, Good Practice Guides, and Technical Guides across facility design, water systems, automation, commissioning, and qualification.',
    scope: ['ISPE Baseline Guide Vol. 1-7', 'ISPE GAMP 5 for CSV', 'ISPE Water & Steam Guide', 'ISPE Risk-Based Commissioning & Qualification', 'ISPE Good Practice Guides'],
    color: '#00A878',
  },
]

const qmsElements = [
  { title: 'Document Control', desc: 'Rigorous version control and approval workflows for all engineering drawings, specifications, and validation protocols.', icon: <FileText size={18} style={{ color: '#0057FF' }} /> },
  { title: 'Design Reviews', desc: 'Formal stage-gate design reviews at concept, basic, and detailed engineering phases with client and regulatory perspective.', icon: <CheckCircle size={18} style={{ color: '#00A878' }} /> },
  { title: 'Risk Management', desc: 'Structured risk assessment using ICH Q9 methodology, FMEA, and HAZOP throughout the project lifecycle.', icon: <Shield size={18} style={{ color: '#0057FF' }} /> },
  { title: 'Change Control', desc: 'Formal change management process for all modifications post-baseline with impact assessment on validation status.', icon: <Award size={18} style={{ color: '#00A878' }} /> },
  { title: 'Audit Readiness', desc: 'All deliverables formatted and organized for immediate regulatory inspection availability.', icon: <FileText size={18} style={{ color: '#0057FF' }} /> },
  { title: 'Lessons Learned', desc: 'Structured project retrospectives feeding continuous improvement across our engineering methodology.', icon: <CheckCircle size={18} style={{ color: '#00A878' }} /> },
]

export default function Quality() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5">Quality & Compliance</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Compliance is Not
            <br />
            <span className="gradient-text">an Afterthought.</span>
          </h1>
          <p className="body-text" style={{ fontSize: '18px', maxWidth: '580px' }}>
            At Sneha and Prahar, regulatory compliance is engineered into every drawing,
            specification, and protocol from the first day of a project — never retrofitted at the end.
          </p>
        </div>
      </section>

      {/* Quality promise */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { val: '0', label: 'Regulatory Non-Conformances', desc: 'Across all client facilities we have designed and qualified' },
              { val: '18', label: 'GMP Inspections Supported', desc: 'WHO, USFDA, EU, and TGA inspection readiness programs' },
              { val: '100%', label: 'Client Audit Pass Rate', desc: 'In facilities where we delivered full engineering services' },
            ].map(s => (
              <div key={s.label} className="gradient-border-card" style={{ padding: '36px', textAlign: 'center' }}>
                <div className="stat-number gradient-text" style={{ fontSize: '48px', marginBottom: '8px' }}>{s.val}</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{s.label}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory standards */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Regulatory Expertise</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Global Standards,
              <span className="gradient-text"> Local Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((s, i) => (
              <div key={i} className="glass-card-hover" style={{ padding: '32px' }}>
                <div className="flex items-start gap-4 mb-5">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '12px',
                      background: `rgba(${s.color === '#0057FF' ? '0,87,255' : '0,168,120'},0.15)`,
                      border: `1px solid rgba(${s.color === '#0057FF' ? '0,87,255' : '0,168,120'},0.3)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Shield size={22} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '3px' }}>{s.name}</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '12px', color: s.color, fontStyle: 'italic' }}>{s.fullName}</p>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '16px' }}>
                  {s.desc}
                </p>
                <div className="divider-gradient" style={{ marginBottom: '16px' }} />
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px' }}>
                  Scope of Application
                </p>
                <div className="flex flex-col gap-2">
                  {s.scope.map((sc, j) => (
                    <div key={j} className="flex gap-2 items-center">
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{sc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QMS */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Quality Management</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              ISO 9001:2015 Certified
              <span className="gradient-text"> Quality System</span>
            </h2>
            <p className="body-text mt-4" style={{ fontSize: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
              Our quality management system ensures every deliverable meets the same rigorous
              standard — whether it&apos;s a single protocol or a complete facility engineering package.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qmsElements.map((q, i) => (
              <div key={i} className="glass-card-hover" style={{ padding: '24px' }}>
                <div className="icon-box" style={{ marginBottom: '14px' }}>{q.icon}</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '10px' }}>{q.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
