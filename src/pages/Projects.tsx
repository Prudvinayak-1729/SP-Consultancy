import { useState } from 'react'

const categories = [
  'All',
  'Engineering Consultancy',
  'Facility Audit Readiness',
  'CSV & Validation',
  'Cleanroom Engineering',
  'HVAC Systems Design',
  'Utility Engineering',
  'Equipment Qualification',
  'Water Systems (WFI/PW)',
  'Automation & BMS',
  'Shutdown Services',
]

const projects = [
  {
    title: 'Computer System Validation (CSV) & CQV Services',
    client: 'Leading Multinational Pharmaceutical Company',
    location: 'Genome Valley (Shamirpet), Hyderabad',
    duration: '18 months',
    category: 'CSV & Validation',
    year: '2024',
    desc: 'Successfully completed CSV, CQV, IQ, OQ, and PQ activities for manufacturing, laboratory, utility, and computerized systems for a leading multinational pharmaceutical manufacturing facility.',
    tech: ['GAMP 5', '21 CFR Part 11', 'CSV', 'CQV', 'IQ/OQ/PQ'],
    img: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=700&h=420&fit=crop&auto=format',
  },
  {
    title: 'Facility Audit Readiness & GMP Compliance',
    client: 'Leading Pharmaceutical Manufacturing Company',
    location: 'Visakhapatnam & Pydibhimavaram, Andhra Pradesh',
    duration: '12 months',
    category: 'Facility Audit Readiness',
    year: '2024',
    desc: 'Successfully delivered GMP Facility Audit Readiness, engineering compliance, qualification review, documentation support, and utility verification for a leading pharmaceutical manufacturing facility.',
    tech: ['GMP Gap Assessment', 'USFDA', 'MHRA', 'WHO-GMP', 'Schedule M'],
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=700&h=420&fit=crop&auto=format',
  },
  {
    title: 'Cleanroom Engineering & Qualification',
    client: 'Leading Sterile Pharmaceutical Manufacturer',
    location: 'Genome Valley (Shamirpet), Hyderabad',
    duration: '24 months',
    category: 'Cleanroom Engineering',
    year: '2024',
    desc: 'Successfully executed cleanroom engineering, HVAC qualification, airflow visualization, environmental monitoring, and cleanroom validation for a sterile pharmaceutical manufacturing facility.',
    tech: ['ISO 14644', 'HVAC Qualification', 'Airflow Visualization', 'Environmental Monitoring', 'GMP'],
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Engineering Consultancy & Facility Development',
    client: 'Leading Pharmaceutical Company',
    location: 'Visakhapatnam, Andhra Pradesh',
    duration: '20 months',
    category: 'Engineering Consultancy',
    year: '2023',
    desc: 'Delivered engineering consultancy, Greenfield and Brownfield facility development, utility engineering, and GMP-compliant engineering solutions for a leading pharmaceutical company.',
    tech: ['Facility Planning', 'Process Layouts', 'Utility Engineering', 'BOQ Preparation', 'Regulatory Compliance'],
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Pharmaceutical HVAC Engineering',
    client: 'Leading Pharmaceutical Manufacturer',
    location: 'Hyderabad, Telangana',
    duration: '12 months',
    category: 'HVAC Systems Design',
    year: '2024',
    desc: 'Successfully designed and qualified GMP HVAC systems including HEPA filtration, pressure cascade, temperature and humidity control, and cleanroom balancing for a pharmaceutical manufacturing facility.',
    tech: ['HEPA Filtration', 'Pressure Cascade', 'Temperature Control', 'Air Balancing', 'HVAC Qualification'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Critical Utility Engineering',
    client: 'Leading Pharmaceutical Manufacturing Company',
    location: 'Bachupally, Hyderabad',
    duration: '15 months',
    category: 'Utility Engineering',
    year: '2023',
    desc: 'Successfully completed utility engineering projects involving chilled water systems, boilers, clean steam, compressed air, nitrogen systems, EMS, and utility monitoring.',
    tech: ['Chilled Water', 'Boilers', 'Clean Steam', 'Compressed Air', 'EMS/BMS'],
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Equipment Qualification & Commissioning',
    client: 'Leading Pharmaceutical Manufacturing Company',
    location: 'Visakhapatnam, Andhra Pradesh',
    duration: '6 months',
    category: 'Equipment Qualification',
    year: '2024',
    desc: 'Successfully completed FAT, SAT, commissioning, IQ, OQ, and PQ for manufacturing, laboratory, utility, and packaging equipment while ensuring GMP compliance.',
    tech: ['FAT/SAT', 'IQ/OQ/PQ', 'Commissioning', 'GMP Documentation', 'Regulatory Compliance'],
    img: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'PW, WFI & Clean Steam Systems',
    client: 'Leading Pharmaceutical Manufacturing Facility',
    location: 'Genome Valley (Shamirpet), Hyderabad',
    duration: '9 months',
    category: 'Water Systems (WFI/PW)',
    year: '2023',
    desc: 'Successfully completed commissioning, qualification, and validation of Purified Water (PW), Water for Injection (WFI), Clean Steam systems, and distribution loops.',
    tech: ['Purified Water', 'WFI', 'Clean Steam', 'Distribution Loops', 'Performance Verification'],
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Automation, PLC, SCADA, EMS & BMS',
    client: 'Leading Pharmaceutical Manufacturing Facility',
    location: 'Bachupally, Hyderabad',
    duration: '3 weeks',
    category: 'Automation & BMS',
    year: '2024',
    desc: 'Successfully implemented PLC, SCADA, BMS, EMS, alarm management, and real-time monitoring solutions for a regulated pharmaceutical manufacturing facility.',
    tech: ['PLC', 'SCADA', 'BMS', 'EMS', 'Historian Integration'],
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Plant Shutdown & Engineering Maintenance',
    client: 'Leading Pharmaceutical Manufacturing Company',
    location: 'Visakhapatnam, Andhra Pradesh',
    duration: '2 weeks',
    category: 'Shutdown Services',
    year: '2024',
    desc: 'Successfully executed annual plant shutdown activities including equipment maintenance, utility modifications, recommissioning, validation support, and startup assistance.',
    tech: ['Preventive Maintenance', 'Utility Modifications', 'Recommissioning', 'Qualification Support', 'Startup Assistance'],
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Liquid Nitrogen Monitoring System',
    client: 'Leading Pharmaceutical Manufacturing Company',
    location: 'Visakhapatnam & Hyderabad',
    duration: '6 months',
    category: 'Automation & BMS',
    year: '2024',
    desc: 'Successfully implemented automated Liquid Nitrogen tank level monitoring system with digital display, real-time alerts, and email notification system for low-level conditions.',
    tech: ['Liquid Nitrogen', 'Level Monitoring', 'Digital Display', 'Email Alerts', 'Real-time Monitoring'],
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-4 sm:mb-5">Project Delivered</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            100+ Engineering Projects
            <br />
            <span className="gradient-text">Successfully Delivered</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            Successfully delivered 100+ engineering projects including Facility Audit Readiness, Engineering Consultancy, Commissioning, Qualification & Validation (CQV), Computer System Validation (CSV), Cleanroom Engineering, Utility Engineering, HVAC, Water Systems, Automation, BMS, Equipment Qualification, and Plant Shutdown Services for leading multinational and Indian pharmaceutical, biotechnology, vaccine, and life sciences companies across Genome Valley (Shamirpet), Hyderabad, Visakhapatnam, Bengaluru, Chennai, Pune, Ahmedabad, Goa, and other major pharmaceutical manufacturing hubs in India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mesh-bg" style={{ padding: '48px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '100+', label: 'Total Projects' },
              { val: '25+', label: 'Industries Covered' },
              { val: '0', label: 'Regulatory Failures' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number gradient-text" style={{ fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: '6px' }}>{s.val}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="mesh-bg-alt" style={{ padding: '60px 0 40px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: `1px solid ${active === c ? '#0057FF' : 'rgba(0,0,0,0.12)'}`,
                  background: active === c ? 'rgba(0,87,255,0.15)' : 'rgba(0,0,0,0.03)',
                  fontFamily: 'Space Grotesk',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: 600,
                  color: active === c ? '#111827' : '#4B5563',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${p.highlight ? 'rgba(0,87,255,0.3)' : 'rgba(0,0,0,0.08)'}`,
                  background: p.highlight ? 'rgba(0,87,255,0.05)' : 'rgba(0,0,0,0.03)',
                  transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 24px 64px rgba(0,87,255,0.12), 0 8px 24px rgba(0,0,0,0.3)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.3)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = ''
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                  ;(e.currentTarget as HTMLElement).style.borderColor = p.highlight ? 'rgba(0,87,255,0.3)' : 'rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} className="image-hover-effect" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.15)', fontFamily: 'Space Grotesk', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 600, color: '#111827', letterSpacing: '0.1em' }}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '22px' }}>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#111827', marginBottom: '8px', lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: '#0057FF', fontWeight: 500, marginBottom: '10px' }}>
                    {p.location}
                  </p>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#4B5563', lineHeight: 1.65, marginBottom: '14px' }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-14px">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(0,87,255,0.1)', border: '1px solid rgba(0,87,255,0.2)', fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 500, color: '#4B5563' }}>
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(0,0,0,0.05)', fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', color: '#6B7280' }}>
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
