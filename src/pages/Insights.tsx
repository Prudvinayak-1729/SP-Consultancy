import { Clock, ArrowRight, BookOpen } from 'lucide-react'

const articles = [
  {
    title: 'Designing GMP-Compliant Sterile Manufacturing Facilities',
    category: 'Facility Design',
    readTime: '12 min read',
    date: 'March 2024',
    excerpt: 'A comprehensive guide to designing sterile pharmaceutical manufacturing facilities that meet the 2023 revised EU GMP Annex 1 requirements, from contamination control strategy to HVAC zoning.',
    intro: 'The 2023 revision of EU GMP Annex 1 represents the most significant update to sterile manufacturing requirements in a generation. The introduction of the mandatory Contamination Control Strategy (CCS) document changes how engineering teams must approach facility design from the earliest concept stages.',
    keyTakeaways: [
      'CCS must be a living document linking all contamination control measures across design, process, and operations',
      'Grade A zones should be designed with unidirectional airflow at 0.36-0.54 m/s with validated smoke studies',
      'Pressure differentials of ≥10 Pa between adjacent areas must be maintained and continuously monitored',
      'Personnel qualification and gowning procedures are integral to the engineering design process',
      'RABS and isolator technology is increasingly mandated for aseptic filling operations',
    ],
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=800&h=440&fit=crop&auto=format',
    highlight: true,
  },
  {
    title: 'Cleanroom Classification: ISO 14644 vs EU GMP — What You Need to Know',
    category: 'Cleanroom Engineering',
    readTime: '8 min read',
    date: 'February 2024',
    excerpt: 'Pharmaceutical engineers frequently confuse ISO 14644 cleanroom classifications with EU GMP grade designations. This article explains the relationship, differences, and practical implications.',
    intro: 'ISO 14644-1 and EU GMP Annex 1 classify cleanrooms by particle count, but they use different parameters, test conditions, and occupancy states. Understanding the relationship is critical for designing facilities that meet both regulatory frameworks simultaneously.',
    keyTakeaways: [
      'ISO classification uses three occupancy states: as-built, at-rest, and in-operation',
      'EU GMP Grade A = ISO 5 at-rest and in-operation; Grade B = ISO 5 at-rest, ISO 7 in-operation',
      'EU GMP adds viable particle (microbiological) limits that ISO 14644 does not address',
      'Classification tests must be repeated periodically — typically annually or after changes',
      'Annex 1 now requires risk-based determination of monitoring locations',
    ],
    img: 'https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=800&h=440&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Pharmaceutical HVAC Design: Best Practices for Temperature, RH, and Pressure Control',
    category: 'HVAC Engineering',
    readTime: '10 min read',
    date: 'January 2024',
    excerpt: 'Effective pharmaceutical HVAC design goes beyond meeting cleanroom classification. This guide covers pressure cascades, temperature zoning, energy efficiency, and seasonal performance management.',
    intro: 'HVAC is the single largest capital cost and energy consumer in a pharmaceutical facility. Getting the design right from the start requires a systems-thinking approach that balances contamination control, patient safety, energy efficiency, and operational flexibility.',
    keyTakeaways: [
      'Pressure cascades must be designed from the most critical zone outward, not from corridor inward',
      'Return air vs. 100% fresh air decisions significantly impact both energy cost and contamination risk',
      'HVAC validation must include smoke studies, pressure differential mapping, and particle count surveys',
      'Demand-controlled ventilation (DCV) can reduce HVAC energy consumption by 30-40% in low-occupancy zones',
      'Seasonal swing in outdoor temperature and humidity requires robust control loop commissioning',
    ],
    img: 'https://images.unsplash.com/photo-1622534376374-fe4480328daa?w=800&h=440&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Water for Injection: Design Principles for WFI Loop Engineering',
    category: 'Utility Engineering',
    readTime: '9 min read',
    date: 'December 2023',
    excerpt: 'WFI systems are the backbone of sterile manufacturing. This article covers generation technology selection, loop design principles, passivation, and qualification requirements.',
    intro: 'Water for Injection is one of the most critical utilities in any sterile pharmaceutical facility. WFI system failures account for a disproportionate share of regulatory citations globally — making rigorous engineering and ongoing qualification essential.',
    keyTakeaways: [
      'EU GMP now permits membrane-based WFI generation in addition to distillation',
      'Dead legs in WFI distribution loops must be minimized (L/D ratio < 6 recommended)',
      'Continuous hot recirculation at ≥80°C remains the preferred biocontamination control method',
      'WFI systems require three-phase qualification and ongoing trend monitoring',
      'Passivation protocols for stainless steel surfaces must be documented and validated',
    ],
    img: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?w=800&h=440&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Computer System Validation (CSV) in the Age of Cloud and SaaS',
    category: 'Validation & Compliance',
    readTime: '11 min read',
    date: 'November 2023',
    excerpt: 'As pharmaceutical companies adopt cloud-based MES, LIMS, and EMS systems, traditional GAMP 5 CSV approaches are being challenged. This article explores updated validation strategies.',
    intro: 'The migration from on-premises to cloud-based computer systems has created significant uncertainty in pharmaceutical CSV programs. FDA\'s 2021 draft guidance on Computer Software Assurance and ISPE GAMP 5 Second Edition (2022) provide new frameworks that emphasize risk-based thinking over prescriptive testing.',
    keyTakeaways: [
      'GAMP 5 Second Edition introduces a Product Lifecycle approach to software categories',
      'FDA CSA guidance emphasizes critical thinking and fit-for-purpose testing over exhaustive scripts',
      'SaaS validation requires supplier qualification with shared responsibility matrices',
      'Data integrity (ALCOA+) requirements apply equally to cloud-hosted systems',
      'Periodic review of validated computer systems is increasingly required by regulators',
    ],
    img: 'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?w=800&h=440&fit=crop&auto=format',
    highlight: false,
  },
  {
    title: 'Energy Efficiency in Pharmaceutical HVAC: Achieving 30% Reduction Without Compromising GMP',
    category: 'Energy & Sustainability',
    readTime: '7 min read',
    date: 'October 2023',
    excerpt: 'Pharmaceutical facilities are among the most energy-intensive in industry. This article presents proven strategies for achieving significant energy reduction while maintaining full GMP compliance.',
    intro: 'A typical pharmaceutical manufacturing facility consumes 3-5 times more energy per square foot than an office building — primarily driven by HVAC and cleanroom systems. With energy costs rising and sustainability mandates tightening, the industry can no longer treat GMP compliance as an excuse for energy waste.',
    keyTakeaways: [
      'Air change rate (ACR) rationalization can reduce HVAC energy by 20-35% with no compliance impact',
      'Variable air volume (VAV) systems with validated setback modes enable dynamic energy management',
      'Heat recovery from exhaust air streams can recover 60-70% of energy otherwise wasted',
      'LED lighting upgrades in cleanrooms reduce heat gain and cooling loads simultaneously',
      'Energy monitoring and targeting (M&T) programs quickly identify efficiency opportunities',
    ],
    img: 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?w=800&h=440&fit=crop&auto=format',
    highlight: false,
  },
]

export default function Insights() {
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5">Engineering Insights</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Knowledge From the
            <br />
            <span className="gradient-text">Engineering Front Line.</span>
          </h1>
          <p className="body-text" style={{ fontSize: '18px', maxWidth: '560px' }}>
            Technical articles, regulatory guidance summaries, and engineering best practices
            written by our specialist team for pharmaceutical industry professionals.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-8" style={{ justifyContent: 'flex-start' }}>Featured Article</div>
          <div
            className="gradient-border-card"
            style={{ overflow: 'hidden' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={featured.img}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', minHeight: '360px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                  <span style={{ padding: '6px 14px', borderRadius: '999px', background: 'rgba(0,87,255,0.85)', fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.08em' }}>
                    Featured
                  </span>
                </div>
              </div>
              <div style={{ padding: '44px' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,87,255,0.12)', border: '1px solid rgba(0,87,255,0.25)', fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, color: '#3378FF' }}>
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                    <Clock size={12} />
                    <span style={{ fontFamily: 'Inter', fontSize: '12px' }}>{featured.readTime}</span>
                  </div>
                  <span style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{featured.date}</span>
                </div>
                <h2 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '26px', color: 'white', lineHeight: 1.25, marginBottom: '14px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '20px' }}>
                  {featured.intro}
                </p>
                <div className="divider-gradient" style={{ marginBottom: '20px' }} />
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                  Key Takeaways
                </p>
                {featured.keyTakeaways.slice(0, 3).map((kp, i) => (
                  <div key={i} className="flex gap-2 items-start mb-2">
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00A878', marginTop: '7px', flexShrink: 0 }} />
                    <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{kp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="mesh-bg-alt" style={{ padding: '60px 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-10">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <div key={i} className="insight-card">
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={a.img}
                    alt={a.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ padding: '3px 10px', borderRadius: '999px', background: 'rgba(0,87,255,0.1)', border: '1px solid rgba(0,87,255,0.2)', fontFamily: 'Space Grotesk', fontSize: '10px', fontWeight: 600, color: '#3378FF' }}>
                      {a.category}
                    </span>
                    <div className="flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px' }}>
                      <Clock size={11} />
                      <span style={{ fontFamily: 'Inter', fontSize: '11px' }}>{a.readTime}</span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '17px', color: 'white', lineHeight: 1.3, marginBottom: '10px' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {a.excerpt}
                  </p>
                  <div className="divider-gradient" style={{ marginBottom: '14px' }} />
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
                      Key Takeaways
                    </p>
                    {a.keyTakeaways.slice(0, 2).map((kp, j) => (
                      <div key={j} className="flex gap-2 items-start mb-2">
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#00A878', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{kp}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
                    <BookOpen size={12} />
                    <span style={{ fontFamily: 'Inter', fontSize: '12px' }}>{a.date}</span>
                    <div style={{ flex: 1 }} />
                    <div className="flex items-center gap-1" style={{ color: '#0057FF', cursor: 'pointer' }}>
                      <span style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600 }}>Read more</span>
                      <ArrowRight size={12} />
                    </div>
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
