import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

const categories = ['All', 'Cleanroom', 'HVAC', 'Utilities', 'Validation', 'Automation', 'Industrial']

const projects = [
  {
    title: 'Sterile Injectable Manufacturing Suite',
    client: 'Leading Generics Manufacturer',
    location: 'Hyderabad, Telangana',
    duration: '18 months',
    category: 'Cleanroom',
    year: '2024',
    desc: 'Grade A/B aseptic fill-finish facility with RABS, EU GMP Annex 1 compliant HVAC, isolator integration, and complete IQ/OQ/PQ documentation package.',
    tech: ['RABS', 'Grade 5 Cleanroom', 'Annex 1 HVAC', 'EMS Integration', 'VHP Decontamination'],
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=700&h=420&fit=crop&auto=format',
    highlight: true,
  },
  {
    title: 'Biotech Cell Culture Campus',
    client: 'Biopharmaceutical Company',
    location: 'Hyderabad Telangana',
    duration: '24 months',
    category: 'Utilities',
    year: '2024',
    desc: 'Multi-purpose cell culture facility with upstream/downstream processing, 500L bioreactors, WFI systems, CIP/SIP, and full GAMP 5 automation validation.',
    tech: ['WFI Generation', 'CIP/SIP Automation', 'SCADA System', 'BMS Integration', 'CSV/GAMP 5'],
    img: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'API Synthesis Plant',
    client: 'Specialty Chemicals Group',
    location: 'Visakhapatnam, AP',
    duration: '20 months',
    category: 'Industrial',
    year: '2023',
    desc: 'Greenfield API manufacturing facility with solvent recovery, effluent treatment, explosion-proof HVAC, and Schedule M compliance documentation.',
    tech: ['Solvent Recovery', 'ETP Design', 'Explosion-Proof HVAC', 'Schedule M', 'HAZOP'],
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Oral Solid Dosage Facility Upgrade',
    client: 'Pan-India Pharma Company',
    location: 'Hyderabad, Telangana',
    duration: '12 months',
    category: 'HVAC',
    year: '2024',
    desc: 'HVAC upgrade and cleanroom reclassification for OSD facility targeting USFDA compliance. Included pressure cascade redesign and EMS upgrade.',
    tech: ['HVAC Retrofit', 'Pressure Cascade', 'EMS Upgrade', 'USFDA Compliance', 'IQ/OQ'],
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Vaccine Fill-Finish Expansion',
    client: 'National Vaccine Manufacturer',
    location: 'Hyderabad, Telangana',
    duration: '15 months',
    category: 'Cleanroom',
    year: '2023',
    desc: 'Expansion of existing fill-finish capacity with two additional Grade A/B filling lines, lyophilizer integration, and WHO PQ compliance documentation.',
    tech: ['Grade A/B Lines', 'Lyophilizer Integration', 'WHO PQ Compliance', 'Aseptic Processing', 'PQ Validation'],
    img: 'https://images.unsplash.com/photo-1669101283561-642d16d924ba?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Water System Qualification',
    client: 'Multinational Pharma',
    location: 'Visakhapatnam, AP',
    duration: '6 months',
    category: 'Validation',
    year: '2024',
    desc: 'Comprehensive water system qualification for WFI, Purified Water, and Clean Steam systems across 3 manufacturing buildings. Three-phase validation protocol.',
    tech: ['WFI Qualification', 'PW Validation', 'Clean Steam', 'Three-Phase Validation', 'OQ/PQ'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Building Management System Integration',
    client: 'Research Hospital Complex',
    location: 'Visakhapatnam, AP',
    duration: '9 months',
    category: 'Automation',
    year: '2023',
    desc: 'Integrated BMS/EMS design and deployment across 12 cleanrooms and 3 production buildings with real-time monitoring, alarm management, and 21 CFR Part 11 compliance.',
    tech: ['BMS/EMS', '21 CFR Part 11', 'Alarm Rationalization', 'SCADA', 'Data Integrity'],
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Planned Shutdown Management',
    client: 'Formulation Plant',
    location: 'Hyderabad Telangana',
    duration: '3 weeks',
    category: 'Industrial',
    year: '2024',
    desc: 'Complete planned shutdown management for annual maintenance of 8 production suites, including critical equipment overhaul, requalification, and change control documentation.',
    tech: ['Shutdown Planning', 'Critical Path', 'Equipment Overhaul', 'Requalification', 'Change Control'],
    img: 'https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=700&h=420&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Medical Device Cleanroom',
    client: 'Orthopedic Device Manufacturer',
    location: 'Visakhapatnam, AP',
    duration: '14 months',
    category: 'Cleanroom',
    year: '2023',
    desc: 'Class 7 and 8 cleanroom design and construction for sterile implant manufacturing with quality system documentation integration.',
    tech: ['Class 7/8', 'Quality System', 'EtO Sterilization', 'Particle Monitoring', 'IQ/OQ/PQ'],
    img: 'https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=700&h=420&fit=crop&auto=format',
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
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = '')}
                  />
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(7,27,59,0.85)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Space Grotesk', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                      {p.category}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', top: 14, right: 14 }}>
                    <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'rgba(0,87,255,0.8)', fontFamily: 'Space Grotesk', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 700, color: 'white', letterSpacing: '0.06em' }}>
                      {p.year}
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
                  <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(10px, 2vw, 12px)' }}>
                      <MapPin size={12} />
                      <span style={{ fontFamily: 'Inter', fontSize: 'clamp(10px, 2vw, 12px)' }}>{p.location}</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: 'rgba(0,168,120,0.8)' }}>
                      <Clock size={12} />
                      <span style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 600 }}>{p.duration}</span>
                    </div>
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
