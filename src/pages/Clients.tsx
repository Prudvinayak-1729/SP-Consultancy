
import { Star, Quote } from 'lucide-react'

const clients = [
  { name: 'Hetero Drugs', sector: 'Generics Manufacturing', city: 'Hyderabad' },
  { name: "Dr. Reddy's Laboratories", sector: 'API & Formulations', city: 'Hyderabad' },
  { name: 'Aurobindo Pharma', sector: 'Oral Solid Dosage', city: 'Hyderabad' },
  { name: 'Biological E', sector: 'Vaccines & Biologics', city: 'Hyderabad' },
  { name: 'Bharat Biotech', sector: 'Vaccine Manufacturing', city: 'Hyderabad' },
  { name: "Divi's Laboratories", sector: 'API & Nutraceuticals', city: 'Hyderabad' },
  { name: 'Suven Life Sciences', sector: 'CRAMS & Specialty', city: 'Hyderabad' },
  { name: 'Granules India', sector: 'OSD & API', city: 'Hyderabad' },
  { name: 'Laurus Labs', sector: 'API & FDF', city: 'Hyderabad' },
  { name: 'Natco Pharma', sector: 'Oncology Formulations', city: 'Hyderabad' },
  { name: 'Concord Biotech', sector: 'Fermentation Products', city: 'Ahmedabad' },
  { name: 'Piramal Pharma', sector: 'CDMO Services', city: 'Mumbai' },
]

const testimonials = [
  {
    quote: "The cleanroom engineering and validation documentation Sneha and Prahar delivered for our sterile injectables line was exceptional. Our WHO GMP inspection sailed through with zero observations.",
    name: 'Dr. Rajesh Venkataraman',
    title: 'VP Engineering, Hetero Drugs',
    company: 'Hetero Drugs',
    rating: 5,
  },
  {
    quote: "Their HVAC team redesigned our OSD facility HVAC to meet USFDA standards on an extremely tight timeline. The project was executed flawlessly, and we achieved our compliance milestone three weeks ahead of schedule.",
    name: 'Suresh Krishnaswamy',
    title: 'Head of Manufacturing, Aurobindo Pharma',
    company: 'Aurobindo Pharma',
    rating: 5,
  },
  {
    quote: "We engaged Sneha and Prahar for a complex WFI loop qualification across three buildings. Their systematic, risk-based approach and the quality of their validation documentation was unlike anything we had seen from consultants before.",
    name: 'Priya Chandrasekhar',
    title: 'Director of Facilities, Biological E',
    company: 'Biological E',
    rating: 5,
  },
  {
    quote: "For our API plant expansion, their team delivered a comprehensive engineering package including HAZOP, explosion-proof HVAC, and ETP design that fully satisfied Schedule M requirements. Highly professional.",
    name: 'Vikram Rao',
    title: 'Chief Technology Officer',
    company: 'Specialty Chemicals Group',
    rating: 5,
  },
]

const caseStudies = [
  {
    client: 'National Vaccine Manufacturer',
    challenge: 'Expanding fill-finish capacity by 60% while maintaining ongoing production and achieving WHO prequalification within 14 months.',
    solution: 'Phased construction management approach with validated cleanroom panels, parallel HVAC commissioning, and concurrent WHO PQ documentation preparation.',
    result: 'Facility expansion completed in 13 months. WHO prequalification inspection passed with zero critical observations. Production capacity increased by 65%.',
    img: 'https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=700&h=360&fit=crop&auto=format',
  },
  {
    client: 'Pan-India Generics Leader',
    challenge: 'Legacy oral solid dosage plant failing USFDA compliance expectations with 28 observations from a pre-inspection audit.',
    solution: 'Comprehensive facility gap assessment, HVAC pressure cascade redesign, EMS upgrade, gowning room reconfiguration, and complete validation documentation remediation.',
    result: 'All 28 pre-audit observations addressed within 8 months. Subsequent USFDA inspection resulted in zero Form 483 observations for the first time in facility history.',
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=700&h=360&fit=crop&auto=format',
  },
]

export default function Clients() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5">Our Clients</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Trusted by India&apos;s
            <br />
            <span className="gradient-text">Pharmaceutical Elite.</span>
          </h1>
          <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'justify' }}>
            From India&apos;s largest generic manufacturers to innovative biotech startups —
            our clients trust us to deliver engineering excellence that protects their
            regulatory standing and competitive advantage.
          </p>
        </div>
      </section>

      {/* Client logo grid */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Client Portfolio</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
              Companies That Rely on
              <span className="gradient-text"> Our Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '24px 20px', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    background: i % 2 === 0 ? 'rgba(0,87,255,0.15)' : 'rgba(0,168,120,0.15)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.25)' : 'rgba(0,168,120,0.25)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: i % 2 === 0 ? '#0057FF' : '#00A878',
                  }}
                >
                  {c.name.charAt(0)}
                </div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(12px, 2vw, 14px)', color: 'white', marginBottom: '5px', lineHeight: 1.3 }}>
                  {c.name}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.45)', marginBottom: '3px' }}>{c.sector}</p>
                <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', color: 'rgba(0,168,120,0.7)', fontWeight: 600, letterSpacing: '0.08em' }}>{c.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Client Testimonials</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              What Industry Leaders
              <span className="gradient-text"> Say About Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} style={{ fill: '#00A878', color: '#00A878' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 600, color: 'rgba(0,87,255,0.7)', letterSpacing: '0.08em' }}>
                    {t.company}
                  </span>
                </div>
                <Quote size={24} style={{ color: 'rgba(0,87,255,0.35)', marginBottom: '14px' }} />
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '22px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="divider-gradient" style={{ marginBottom: '18px' }} />
                <div>
                  <p style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white' }}>{t.name}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Case Studies</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Challenges Solved.
              <span className="gradient-text"> Results Delivered.</span>
            </h2>
          </div>
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="gradient-border-card"
              style={{ marginBottom: '32px', overflow: 'hidden' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <img src={cs.img} alt={cs.client} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '40px', order: i % 2 === 0 ? 2 : 1 }}>
                  <div className="section-label mb-4">{cs.client}</div>
                  <div className="mb-5">
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,87,87,0.7)', marginBottom: '8px' }}>
                      Challenge
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{cs.challenge}</p>
                  </div>
                  <div className="mb-5">
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,87,255,0.8)', marginBottom: '8px' }}>
                      Our Approach
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{cs.solution}</p>
                  </div>
                  <div className="glass-card" style={{ padding: '16px 20px' }}>
                    <p style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00A878', marginBottom: '8px' }}>
                      Results
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontWeight: 500 }}>{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
