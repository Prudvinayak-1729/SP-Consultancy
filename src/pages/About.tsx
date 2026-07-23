import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Shield, Globe, Link as LinkIcon } from 'lucide-react'

const values = [
  { icon: <Award size={20} style={{ color: '#0057FF' }} />, title: 'Engineering Excellence', desc: 'Rigorous technical standards in every deliverable, every time.' },
  { icon: <Shield size={20} style={{ color: '#00A878' }} />, title: 'Regulatory Integrity', desc: 'Compliance is not an afterthought — it is the foundation of every design decision.' },
  { icon: <Users size={20} style={{ color: '#0057FF' }} />, title: 'Client Partnership', desc: 'Long-term relationships built on transparency, responsiveness, and shared success.' },
  { icon: <Globe size={20} style={{ color: '#00A878' }} />, title: 'Global Mindset', desc: 'World-class engineering practices applied to local market realities.' },
]

const team = [
  { name: 'Mr. Rajendra Prasad', title: 'Founder & Managing Director', expertise: 'Pharmaceutical Engineering, Facility Management', img: '/assets/img/owoner.jpeg', linkedin: 'https://www.linkedin.com/in/rajendra-prasad-gugulothu-b36499b7/' },
]

const milestones = [
  { year: '2022', events: ['Company incorporated in Hyderabad, Telangana', 'First project: Oral Solid Dosage facility, Medak', 'Team of 8 core engineers at founding'] },
  { year: '2023', events: ['Expansion into biotech & vaccine sector', 'Opened second office in Pune, Maharashtra', 'Completed 30+ projects; team grew to 22 engineers'] },
  { year: '2024', events: ['Achieved ISO 9001:2015 quality certification', 'Delivered 45+ projects including sterile injectables', 'Launched digital documentation system'] },
  { year: '2025', events: ['Recognized as preferred consultant by 3 top-10 pharma companies', '35+ engineers; 100+ projects lifetime', 'International project pipeline opened'] },
]

const achievements = [
  '100+ projects delivered since inception',
  '35+ specialized pharmaceutical engineers',
  'Zero regulatory non-conformances in client facilities',
  'Average project delivery 12% ahead of schedule',
  '99% client satisfaction across all engagements',
  'Successfully supported 18 WHO GMP inspections',
  'USFDA, EU GMP, and TGA inspection readiness support',
  'ISO 9001:2015 certified quality management system',
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5">About Us</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Built by Engineers,
            <br />
            <span className="gradient-text">For the Industry.</span>
          </h1>
          <p className="body-text" style={{ fontSize: '18px', maxWidth: '580px' }}>
            Founded in 2022 by a team of passionate pharmaceutical engineers, Sneha and Prahar
            Consultancy Services exists to raise the bar for engineering quality in India&apos;s
            pharmaceutical sector.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=800&h=600&fit=crop&auto=format"
              alt="Engineering team in cleanroom"
              style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block' }}
            />
            <div
              className="glass-card animate-pulse-glow"
              style={{ position: 'absolute', bottom: 24, right: -16, padding: '20px 24px' }}
            >
              <div className="stat-number gradient-text" style={{ fontSize: '40px' }}>100+</div>
              <div style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Projects Delivered</div>
            </div>
          </div>
          <div>
            <div className="section-label mb-5">Our Story</div>
            <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
              Born from a passion for
              <span className="gradient-text"> engineering precision.</span>
            </h2>
            <p className="body-text mb-5" style={{ fontSize: '16px' }}>
              Sneha and Prahar Consultancy Services is a Facilities, Pharma and Biotech service provider company established with a focus to deliver the best customer satisfaction and never compromise with the quality and services provided to esteemed customers.
            </p>
            <p className="body-text mb-5" style={{ fontSize: '16px' }}>
              The company was started by Mr. Rajendra Prasad, who is a self-esteemed person from Facilities, Pharma and Biotech service background with vast experience in handling Facilities, Pharma and Biotech services.
            </p>
            <p className="body-text mb-8" style={{ fontSize: '16px' }}>
              We work interdependently and collaboratively contributing to each other's success in creating optimal results across all aspects of our work. We believe in keeping customers happy and providing them with our services at a very competent price with an excellent team of professionals.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/services" className="btn-primary">Explore Services <ArrowRight size={15} /></Link>
              <Link to="/projects" className="btn-secondary">View Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mesh-bg-alt" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gradient-border-card" style={{ padding: '40px' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'rgba(0,87,255,0.15)',
                border: '1px solid rgba(0,87,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Award size={22} style={{ color: '#0057FF' }} />
            </div>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '14px' }}>
              Our Mission
            </h3>
            <p className="body-text" style={{ fontSize: '16px', lineHeight: 1.8 }}>
              To provide consistently high quality services in an efficient and professional manner to ensure building/business safety, comfort and enhance productivity.
            </p>
          </div>
          <div className="gradient-border-card" style={{ padding: '40px' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'rgba(0,168,120,0.15)',
                border: '1px solid rgba(0,168,120,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Globe size={22} style={{ color: '#00A878' }} />
            </div>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '14px' }}>
              Our Vision
            </h3>
            <p className="body-text" style={{ fontSize: '16px', lineHeight: 1.8 }}>
              To be the preferred facility management service provider, delivering effective, reliable and excellent services as a collaborative and valued partner.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Core Values</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              The Principles That
              <span className="gradient-text"> Guide Every Decision</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card-hover" style={{ padding: '32px 24px', textAlign: 'center' }}>
                <div className="icon-box" style={{ margin: '0 auto 18px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px' }}>{v.title}</h3>
                <p className="body-text" style={{ fontSize: '13px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-5">Our Track Record</div>
            <h2 className="section-heading mb-8" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
              Achievements That
              <span className="gradient-text"> Speak for Themselves</span>
            </h2>
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={16} style={{ color: '#00A878', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { val: '100+', label: 'Projects Delivered', sub: 'Since 2022' },
              { val: '35+', label: 'Engineers', sub: 'Specialists' },
              { val: '99%', label: 'Satisfaction', sub: 'Client rated' },
              { val: '12', label: 'Indian States', sub: 'Active presence' },
              { val: '18', label: 'GMP Audits', sub: 'Successfully supported' },
              { val: '250K+', label: 'Eng. Hours', sub: 'Delivered' },
            ].map(s => (
              <div key={s.label} className="gradient-border-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
                <div className="stat-number gradient-text" style={{ fontSize: '28px', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '12px', color: 'white', marginBottom: '2px' }}>{s.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Leadership</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Experienced Engineers at
              <span className="gradient-text"> Every Level</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={i} className="glass-card-hover" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{ width: '100%', height: '280px', objectFit: 'contain', display: 'block', transition: 'transform 0.4s ease', background: '#0a1f3d' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '5px' }}>{t.name}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '12px', color: '#0057FF', marginBottom: '8px', fontWeight: 500 }}>{t.title}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '12px' }}>{t.expertise}</p>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        background: 'rgba(0,87,255,0.15)',
                        border: '1px solid rgba(0,87,255,0.3)',
                        color: '#0057FF',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,87,255,0.25)'
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.5)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,87,255,0.15)'
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.3)'
                      }}
                    >
                      <LinkIcon size={14} /> LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0 150px 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Our History</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}>
              Four Years of
              <span className="gradient-text"> Rapid Growth</span>
            </h2>
          </div>
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-8 mb-10">
              <div style={{ minWidth: '64px', textAlign: 'right', paddingTop: '4px' }}>
                <span className="number-text gradient-text" style={{ fontSize: '22px' }}>{m.year}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '8px' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: i % 2 === 0 ? '#0057FF' : '#00A878', flexShrink: 0 }} />
                {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, background: 'rgba(255,255,255,0.08)', minHeight: '30px', marginTop: '6px' }} />}
              </div>
              <div className="glass-card" style={{ padding: '20px 24px', flex: 1 }}>
                {m.events.map((e, j) => (
                  <div key={j} className="flex gap-2 items-start mb-2">
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: i % 2 === 0 ? '#0057FF' : '#00A878', marginTop: '7px', flexShrink: 0 }} />
                    <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>{e}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
