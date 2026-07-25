import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'engineering',
    category: 'Core Engineering',
    title: 'Engineering Consultancy',
    tagline: 'Concept to Commissioning, Delivered with Precision',
    desc: 'Comprehensive pharmaceutical facility engineering from initial concept through to commissioning and handover. We manage all engineering disciplines in a single integrated team.',
    benefits: [
      'Single point of responsibility for all engineering disciplines',
      '3D integrated design with clash detection',
      'Cost engineering and value analysis throughout design',
      'Regulatory strategy embedded from day one',
      'Experienced team with 15+ years average project tenure',
    ],
    scope: ['Feasibility studies', 'Basic & Detailed Engineering', 'P&ID development', 'Equipment selection', 'Vendor management', 'Construction supervision'],
    color: '#0057FF',
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'hvac',
    category: 'HVAC Systems',
    title: 'HVAC & Cleanroom HVAC',
    tagline: 'Precision Air Management for GMP Environments',
    desc: 'Design, engineering, and qualification of HVAC systems for pharmaceutical manufacturing, cleanroom, and laboratory environments to the most stringent international standards.',
    benefits: [
      'Cleanroom classification compliance',
      'ASHRAE 170 healthcare facility ventilation standards',
      'Energy-optimized designs reducing operational costs by 20-30%',
      'Full airflow validation and smoke studies',
      'HEPA filter integrity testing protocols included',
    ],
    scope: ['Cleanroom HVAC design', 'AHU specifications', 'Ductwork layout', 'Airflow analysis', 'Pressure cascade design', 'HVAC qualification'],
    color: '#00A878',
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'cleanroom',
    category: 'Cleanroom Engineering',
    title: 'Cleanroom Design & Build',
    tagline: 'Cleanroom Environments Built to Last',
    desc: 'End-to-end cleanroom design and construction management for pharmaceutical sterile manufacturing, OSD, and biotech applications, certified to EU GMP and USFDA standards.',
    benefits: [
      'EU GMP Grade A-D classification',
      'Modular and traditional construction approaches',
      'Integrated monitoring systems (EMS/BMS)',
      'Decontamination and VHP compatibility',
      'Full lifecycle support from concept to requalification',
    ],
    scope: ['Cleanroom layout design', 'Wall/ceiling/floor systems', 'Pass-through hatches', 'Gowning room design', 'Monitoring system integration', 'Classification & qualification'],
    color: '#0057FF',
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'utilities',
    category: 'Utility Engineering',
    title: 'Pharmaceutical Utility Systems',
    tagline: 'Critical Infrastructure for Manufacturing Excellence',
    desc: 'Design and engineering of pharmaceutical-grade utility systems including purified water, water for injection, compressed air, nitrogen, and clean steam systems.',
    benefits: [
      'USP/EP/JP pharmacopeial compliance for water systems',
      'Passivation and sanitization protocol development',
      '3D loop design with minimized dead legs',
      'TOC and conductivity monitoring integration',
      'Routine requalification programs included',
    ],
    scope: ['WFI & Purified Water loops', 'Clean steam generation', 'Compressed air systems', 'Nitrogen distribution', 'Vacuum systems', 'Utility qualification'],
    color: '#00A878',
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'validation',
    category: 'Validation Services',
    title: 'Validation & Qualification',
    tagline: 'Systematic, Risk-Based, Audit-Ready',
    desc: 'Comprehensive validation services across all GMP systems, equipment, processes, and facilities. From DQ through PQ with complete documentation packages that pass global regulatory inspection.',
    benefits: [
      'Risk-based validation approach per ICH Q9',
      'Complete documentation ready for USFDA, EU GMP, WHO inspection',
      'Protocol review, execution, and summary report generation',
      'Change control integration with validation lifecycle',
      'Retrospective validation gap assessments available',
    ],
    scope: ['DQ/IQ/OQ/PQ protocols', 'Process validation', 'Cleaning validation', 'Computer system validation (CSV)', 'HVAC validation', 'Water system validation'],
    color: '#0057FF',
    img: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'automation',
    category: 'Automation & BMS',
    title: 'Automation & Building Management',
    tagline: 'Intelligent Systems for Smarter Manufacturing',
    desc: 'Design and implementation of pharmaceutical automation systems, building management systems, and environmental monitoring to deliver operational efficiency and continuous compliance.',
    benefits: [
      'SCADA/PLC system design per GAMP 5 guidelines',
      '21 CFR Part 11 compliant data management',
      'BMS integration with EMS for environmental monitoring',
      'Alarm rationalization and management',
      'Cybersecurity assessment for OT systems',
    ],
    scope: ['BMS/BAS design', 'PLC/SCADA programming', 'EMS sensor layout', 'Alarm rationalization', 'Data integrity compliance', 'CSV execution'],
    color: '#00A878',
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'shutdown',
    category: 'Maintenance Services',
    title: 'Shutdown & Turnaround',
    tagline: 'Planned Downtime, Maximum Productivity',
    desc: 'Expert management of planned plant shutdowns, maintenance turnarounds, and facility upgrades with minimal production impact and full regulatory compliance maintained throughout.',
    benefits: [
      'Zero-defect shutdown execution with pre-planning workshops',
      'Equipment overhaul and recommissioning protocols',
      'Maintenance revalidation upon restart',
      'Critical path schedule management',
      'Post-shutdown qualification documentation',
    ],
    scope: ['Shutdown planning & scheduling', 'Vendor coordination', 'Equipment overhaul', 'Critical inspection management', 'Recommissioning', 'IQ/OQ post-maintenance'],
    color: '#0057FF',
    img: 'https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'energy',
    category: 'Energy & Sustainability',
    title: 'Energy Audits & Optimization',
    tagline: 'Sustainable Pharmaceutical Manufacturing',
    desc: 'Comprehensive energy auditing, decarbonization planning, and sustainable engineering solutions tailored to the unique energy profile of pharmaceutical and biotech manufacturing.',
    benefits: [
      'Energy management system guidance',
      'Utility consumption benchmarking vs. ISPE targets',
      'Heat recovery and waste reduction roadmaps',
      'Solar and renewable integration feasibility',
      'ROI analysis with payback period calculations',
    ],
    scope: ['Energy consumption audits', 'HVAC optimization', 'Chilled water system efficiency', 'Compressed air leakage studies', 'Solar feasibility', 'Carbon reporting'],
    color: '#00A878',
    img: 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?w=700&h=420&fit=crop&auto=format',
  },
]

export default function Services() {
  return (
    <div>
     {/* Hero */}
<section className="page-hero">
  <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
  <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
    <div className="section-label mb-4 sm:mb-5">Our Services</div>
    <h1
      className="section-heading mb-6"
      style={{
        fontSize: 'clamp(32px, 4vw, 60px)',    // ← reduced size to fit on mobile
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        lineHeight: 1.2,
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }}>Complete Engineering</span>
      <span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>from Concept to Compliance.</span>
    </h1>
    <p
      className="body-text"
      style={{
        fontSize: 'clamp(14px, 2.5vw, 18px)',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',   // keeps it on one line with … if needed
      }}
    >
      specialized service lines covering every engineering, validation, and compliance need for pharmaceutical and biotechnology facility lifecycle management.
    </p>
  </div>
</section>
      {/* Service list */}
      {services.map((s, i) => (
        <section
          key={s.id}
          className={i % 2 === 0 ? 'mesh-bg' : 'mesh-bg-alt'}
          style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
              <div style={{ direction: 'ltr' }}>
                <div
                  className="section-label mb-3"
                  style={{ color: s.color === '#0057FF' ? '#3378FF' : '#00A878' }}
                >
                  {s.category}
                </div>
                <h2 className="section-heading mb-3" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', fontStyle: 'italic', color: s.color, marginBottom: '16px', fontWeight: 500 }}>
                  {s.tagline}
                </p>
                <p className="body-text mb-6" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', textAlign: 'justify' }}>{s.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px' }}>
                      Key Benefits
                    </p>
                    {s.benefits.map((b, j) => (
                      <div key={j} className="flex gap-2 items-start mb-3">
                        <CheckCircle size={13} style={{ color: s.color, marginTop: '3px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.65)' }}>{b}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px' }}>
                      Scope Includes
                    </p>
                    {s.scope.map((sc, j) => (
                      <div key={j} className="flex gap-2 items-center mb-2">
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.65)' }}>{sc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="btn-primary" style={{ background: `linear-gradient(135deg, ${s.color} 0%, ${s.color}cc 100%)` }}>
                  Request This Service <ArrowRight size={15} />
                </Link>
              </div>
              <div style={{ direction: 'ltr', position: 'relative' }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
                />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: `linear-gradient(to top, ${s.color}22 0%, transparent 60%)` }} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
