import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'CSV & Validation', 'Cleanroom Engineering', 'Engineering Consultancy', 'HVAC Systems Design', 'Utility Engineering', 'Equipment Qualification', 'Water Systems (WFI/PW)', 'Automation & BMS', 'Shutdown Services']

const projects = [
  {
    title: 'Computer System Validation for Manufacturing Facility',
    client: 'Leading Generics Manufacturer',
    location: 'Hyderabad, Telangana',
    duration: '18 months',
    category: 'CSV & Validation',
    year: '2024',
    desc: 'Executed end-to-end CSV, IQ, OQ, PQ, and 21 CFR Part 11 compliance for manufacturing, laboratory, and utility systems in accordance with GAMP 5 guidelines.',
    tech: ['GAMP 5', '21 CFR Part 11', 'IQ/OQ/PQ', 'CSV Documentation', 'Risk Assessment'],
    img: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=700&h=420&fit=crop&auto=format',
    highlight: true,
  },
  {
    title: 'GMP Cleanroom Design & Qualification',
    client: 'Biopharmaceutical Company',
    location: 'Hyderabad Telangana',
    duration: '24 months',
    category: 'Cleanroom Engineering',
    year: '2024',
    desc: 'Designed, executed, and qualified ISO-classified cleanrooms including HVAC, pressure cascade, airflow visualization, recovery testing, and environmental monitoring.',
    tech: ['ISO Classification', 'HVAC Design', 'Pressure Cascade', 'Airflow Visualization', 'EMS Integration'],
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Greenfield Pharmaceutical Manufacturing Facility',
    client: 'Specialty Chemicals Group',
    location: 'Visakhapatnam, AP',
    duration: '20 months',
    category: 'Engineering Consultancy',
    year: '2023',
    desc: 'Delivered engineering consultancy covering facility planning, equipment layout, utility design, GMP compliance, BOQ preparation, and project execution support.',
    tech: ['Facility Planning', 'Equipment Layout', 'Utility Design', 'GMP Compliance', 'BOQ Preparation'],
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Pharmaceutical HVAC System Design & Validation',
    client: 'Pan-India Pharma Company',
    location: 'Hyderabad, Telangana',
    duration: '12 months',
    category: 'HVAC Systems Design',
    year: '2024',
    desc: 'Engineered GMP-compliant HVAC systems with pressure differentials, temperature & humidity control, HEPA filtration, cleanroom balancing, and qualification.',
    tech: ['Pressure Differentials', 'HEPA Filtration', 'Cleanroom Balancing', 'HVAC Qualification', 'Temperature Control'],
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Utility Monitoring & Process Optimization',
    client: 'National Vaccine Manufacturer',
    location: 'Hyderabad, Telangana',
    duration: '15 months',
    category: 'Utility Engineering',
    year: '2023',
    desc: 'Designed and upgraded pharmaceutical utilities including Chillers, Boilers, Air Compressors, Nitrogen, Clean Steam, EMS, and utility monitoring systems.',
    tech: ['Chillers', 'Boilers', 'Air Compressors', 'Nitrogen Systems', 'EMS Integration'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Manufacturing Equipment Qualification',
    client: 'Multinational Pharma',
    location: 'Visakhapatnam, AP',
    duration: '6 months',
    category: 'Equipment Qualification',
    year: '2024',
    desc: 'Performed DQ, IQ, OQ, PQ, SAT, FAT, commissioning, and validation of manufacturing, packaging, and laboratory equipment.',
    tech: ['DQ/IQ/OQ/PQ', 'SAT/FAT', 'Commissioning', 'Equipment Validation', 'Documentation'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Purified Water & WFI System Qualification',
    client: 'Research Hospital Complex',
    location: 'Visakhapatnam, AP',
    duration: '9 months',
    category: 'Water Systems (WFI/PW)',
    year: '2023',
    desc: 'Completed design review, commissioning, validation, and performance qualification of Purified Water, Water for Injection (WFI), Clean Steam, and distribution loops.',
    tech: ['Purified Water', 'WFI Systems', 'Clean Steam', 'Distribution Loops', 'Performance Qualification'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Building Management System & Utility Automation',
    client: 'Formulation Plant',
    location: 'Hyderabad Telangana',
    duration: '3 weeks',
    category: 'Automation & BMS',
    year: '2024',
    desc: 'Implemented PLC, SCADA, BMS, EMS, real-time monitoring, alarm management, historian integration, and automated reporting for pharmaceutical facilities.',
    tech: ['PLC/SCADA', 'BMS/EMS', 'Real-time Monitoring', 'Alarm Management', 'Historian Integration'],
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Annual Plant Shutdown & Maintenance Support',
    client: 'Orthopedic Device Manufacturer',
    location: 'Visakhapatnam, AP',
    duration: '14 months',
    category: 'Shutdown Services',
    year: '2023',
    desc: 'Successfully executed planned shutdown activities including equipment maintenance, utility modifications, validation support, recommissioning, and startup assistance.',
    tech: ['Equipment Maintenance', 'Utility Modifications', 'Validation Support', 'Recommissioning', 'Startup Assistance'],
    img: 'https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=700&h=420&fit=crop&auto=format',
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
          <div className="section-label mb-4 sm:mb-5">Project Portfolio</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            100+ Projects.
            <br />
            <span className="gradient-text">100% Delivered.</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            A curated selection from our portfolio of pharmaceutical, biotech, and industrial
            engineering projects delivered since 2022 — across India and beyond.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mesh-bg" style={{ padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
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
                  border: `1px solid ${active === c ? '#0057FF' : 'rgba(255,255,255,0.12)'}`,
                  background: active === c ? 'rgba(0,87,255,0.15)' : 'rgba(255,255,255,0.03)',
                  fontFamily: 'Space Grotesk',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: 600,
                  color: active === c ? 'white' : 'rgba(255,255,255,0.5)',
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
                  border: `1px solid ${p.highlight ? 'rgba(0,87,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  background: p.highlight ? 'rgba(0,87,255,0.05)' : 'rgba(255,255,255,0.03)',
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
                  ;(e.currentTarget as HTMLElement).style.borderColor = p.highlight ? 'rgba(0,87,255,0.3)' : 'rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} className="image-hover-effect" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(7,27,59,0.85)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Space Grotesk', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '22px' }}>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white', marginBottom: '8px', lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '14px' }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-14px">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(0,87,255,0.1)', border: '1px solid rgba(0,87,255,0.2)', fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', color: 'rgba(255,255,255,0.4)' }}>
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

      {/* CTA */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
            Ready to add your project to this portfolio?
          </h2>
          <p className="body-text mb-8" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '480px', margin: '0 auto 32px', textAlign: 'justify' }}>
            Let&apos;s discuss your engineering requirements and how we can deliver results that
            exceed your regulatory and operational expectations.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 40px)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
