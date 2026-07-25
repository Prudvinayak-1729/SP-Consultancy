import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const industries = [
  {
    title: 'Pharmaceutical Manufacturing',
    shortTitle: 'Pharma',
    desc: 'Comprehensive engineering support for oral solid dosage, liquid, semi-solid, and sterile pharmaceutical manufacturing facilities.',
    challenges: ['Stringent Schedule M and USFDA compliance requirements', 'Cross-contamination prevention in multi-product facilities', 'Energy-intensive HVAC and cleanroom systems', 'Complex validation documentation requirements'],
    solutions: ['Risk-based facility design with cross-contamination barriers', 'WHO/USFDA-aligned qualification protocols', 'Energy-efficient cleanroom HVAC design', 'End-to-end documentation management'],
    img: 'https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=700&h=420&fit=crop&auto=format',
    color: '#0057FF',
  },
  {
    title: 'Biotechnology',
    shortTitle: 'Biotech',
    desc: 'Specialized engineering for cell culture, fermentation, purification, and fill-finish biotech manufacturing operations.',
    challenges: ['Containment requirements for live organisms', 'Ultra-pure water systems with stringent TOC limits', 'CIP/SIP system design for complex bioreactor trains', 'Biosafety Level 2/3 facility requirements'],
    solutions: ['Biosafety-integrated HVAC and containment design', 'WFI generation and distribution to pharmacopeial standards', 'Automated CIP/SIP validation protocols', 'BSL classification compliance engineering'],
    img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=700&h=420&fit=crop&auto=format',
    color: '#00A878',
  },
  {
    title: 'Vaccine Production',
    shortTitle: 'Vaccines',
    desc: 'Engineering excellence for bulk vaccine production, formulation, fill-finish, and cold chain storage infrastructure.',
    challenges: ['Biocontainment for live attenuated viral organisms', 'Aseptic fill-finish operations with Grade 5 requirements', 'Cold chain facility design for -20°C and -80°C storage', 'WHO prequalification compliance documentation'],
    solutions: ['Grade A/B classified aseptic processing areas', 'Biocontainment engineering per WHO/CDC guidelines', 'Cold storage facility design with redundant systems', 'WHO prequalification documentation support'],
    img: 'https://images.unsplash.com/photo-1669101283561-642d16d924ba?w=700&h=420&fit=crop&auto=format',
    color: '#0057FF',
  },
  {
    title: 'API Manufacturing',
    shortTitle: 'API',
    desc: 'Process and utility engineering for Active Pharmaceutical Ingredient synthesis, purification, and packaging facilities.',
    challenges: ['Solvent handling, storage, and recovery systems', 'Highly potent API (HPAPI) containment requirements', 'Effluent treatment for chemical waste streams', 'HAZOP and process safety management'],
    solutions: ['Solvent recovery systems and explosion-proof HVAC', 'Occupational Exposure Band containment design', 'Effluent treatment plant design and qualification', 'HAZOP facilitation and LOPA analysis'],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=700&h=420&fit=crop&auto=format',
    color: '#00A878',
  },
  {
    title: 'Research & Development',
    shortTitle: 'R&D',
    desc: 'Flexible, future-proof laboratory and pilot plant engineering for pharmaceutical and biotech R&D operations.',
    challenges: ['Flexible space design for evolving R&D workflows', 'Laboratory HVAC for fume hood exhaust management', 'Pilot scale equipment integration and qualification', 'Multi-hazard chemical and biological safety'],
    solutions: ['Modular lab design with flexible infrastructure', 'Demand-controlled laboratory ventilation (DCLV)', 'Pilot plant scale-up support and qualification', 'Integrated chemical and biosafety engineering'],
    img: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=700&h=420&fit=crop&auto=format',
    color: '#0057FF',
  },
  {
    title: 'Medical Devices',
    shortTitle: 'Medical Devices',
    desc: 'Cleanroom and facility engineering for sterile and non-sterile medical device manufacturing.',
    challenges: ['Cleanroom classification for device manufacturing', 'EtO sterilization facility design and validation', 'Particulate contamination control in assembly areas', 'Quality system integration'],
    solutions: ['Class 7/8 cleanroom design for device assembly', 'EtO sterilization chamber engineering and validation', 'HVAC with enhanced particle monitoring', 'Facility documentation support'],
    img: 'https://images.unsplash.com/photo-1605781231474-f60dea478e8a?w=700&h=420&fit=crop&auto=format',
    color: '#00A878',
  },
]

export default function Industries() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-4 sm:mb-5">Industries We Serve</div>
          <h1 className="section-heading mb-6"
              style={{
                fontSize: 'clamp(44px, 5vw, 72px)',
                maxWidth: '900px',
                lineHeight: 1.05,
              }}
            >
              Engineering Excellence
              <br />
              <span className="gradient-text">Across Life Sciences & Beyond</span>
            </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            Deep vertical expertise across pharmaceutical, biotechnology, vaccine, API,
            and medical device industries — with specialized understanding of each
            sector&apos;s unique regulatory and engineering challenges.
          </p>
        </div>
      </section>

      {/* Industry quick nav */}
      <section className="mesh-bg" style={{ padding: '40px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(ind => (
              <a
                key={ind.title}
                href={`#${ind.shortTitle.toLowerCase().replace(/\s+/g, '-')}`}
                className="tag-pill"
                style={{ textDecoration: 'none' }}
              >
                {ind.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry details */}
      {industries.map((ind, i) => (
        <section
          key={ind.title}
          id={ind.shortTitle.toLowerCase().replace(/\s+/g, '-')}
          className={i % 2 === 0 ? 'mesh-bg-alt' : 'mesh-bg'}
          style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>
              <div style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                <div className="section-label mb-3" style={{ color: ind.color === '#0057FF' ? '#3378FF' : '#00A878' }}>
                  {ind.shortTitle}
                </div>
                <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
                  {ind.title}
                </h2>
                <p className="body-text mb-6" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', textAlign: 'justify' }}>{ind.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="glass-card" style={{ padding: '20px' }}>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                      Key Challenges
                    </p>
                    {ind.challenges.map((c, j) => (
                      <div key={j} className="flex gap-2 items-start mb-3">
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,87,87,0.7)', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{c}</p>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card" style={{ padding: '20px' }}>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                      Our Solutions
                    </p>
                    {ind.solutions.map((s, j) => (
                      <div key={j} className="flex gap-2 items-start mb-3">
                        <CheckCircle size={12} style={{ color: ind.color, marginTop: '3px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="btn-primary" style={{ background: `linear-gradient(135deg, ${ind.color} 0%, ${ind.color}cc 100%)` }}>
                  Discuss Your Project <ArrowRight size={15} />
                </Link>
              </div>
              <div style={{ order: i % 2 !== 0 ? 1 : 2, position: 'relative' }}>
                <img
                  src={ind.img}
                  alt={ind.title}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
                />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: `linear-gradient(to top, ${ind.color}33 0%, transparent 60%)` }} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
