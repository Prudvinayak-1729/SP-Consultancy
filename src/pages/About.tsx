import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Shield, Globe } from 'lucide-react'
import ownerImage from '/assets/Rajendra.png'
import ceoImage from '/assets/CEO.png'

const values = [
  { icon: <Award size={20} style={{ color: '#0057FF' }} />, title: 'Engineering Excellence', desc: 'Rigorous technical standards in every deliverable, every time.' },
  { icon: <Shield size={20} style={{ color: '#00A878' }} />, title: 'Regulatory Integrity', desc: 'Compliance is not an afterthought — it is the foundation of every design decision.' },
  { icon: <Users size={20} style={{ color: '#0057FF' }} />, title: 'Client Partnership', desc: 'Long-term relationships built on transparency, responsiveness, and shared success.' },
  { icon: <Globe size={20} style={{ color: '#00A878' }} />, title: 'Global Mindset', desc: 'World-class engineering practices applied to local market realities.' },
]

const milestones = [
  { year: '2022', events: ['Company incorporated in Hyderabad, Telangana', 'First project: Oral Solid Dosage facility, Medak', 'Team of 8 core engineers at founding'] },
  { year: '2023', events: ['Expansion into biotech & vaccine sector', 'Completed 30+ projects; team grew to 22 engineers'] },
  { year: '2024', events: ['Achieved quality certification', 'Delivered 45+ projects including sterile injectables', 'Launched digital documentation system'] },
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
  'Quality management system certified',
]

export default function About() {
  return (
    <div>
    {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-4 sm:mb-5">About Us</div>
          <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
            Built by Engineers,<br />
            <span className="gradient-text">For the Industry.</span>
          </h1>
          <p
            className="body-text"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              maxWidth: '100%',                 // allows full width
              whiteSpace: 'nowrap',             // forces single line
              overflow: 'hidden',               // hides overflow
              textOverflow: 'ellipsis',         // adds … if too long
            }}
          >
            Founded in 2022 by a team of passionate pharmaceutical engineers, Sneha and Prahar Consultancy Services exists to raise the bar for engineering quality in India&apos;s pharmaceutical sector.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div style={{ position: 'relative' }}>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20250323/pngtree-a-modern-pharmacy-interior-with-pharmacists-assisting-customers-amidst-shelves-of-image_17131846.jpg"
              alt="Workers in protective suits inside a cleanroom"
              className="image-hover-effect"
              style={{ width: '100%', height: 'clamp(300px, 40vw, 500px)', objectFit: 'cover', borderRadius: '20px', display: 'block' }}
            />
            <div
              className="glass-card animate-pulse-glow"
              style={{ position: 'absolute', bottom: 'clamp(12px, 2vw, 16px)', right: 'clamp(-4px, -1vw, -8px)', padding: 'clamp(12px, 2vw, 16px) clamp(16px, 2vw, 20px)' }}
            >
              <div className="stat-number gradient-text" style={{ fontSize: 'clamp(24px, 4vw, 32px)' }}>100+</div>
              <div style={{ fontFamily: 'Inter', fontSize: 'clamp(10px, 2vw, 11px)', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Projects Delivered</div>
            </div>
          </div>
          <div>
            <div className="section-label mb-4 sm:mb-5">About Us</div>
            <h2 className="section-heading mb-4 sm:mb-6" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
              Sneha and Prahar
              <span className="gradient-text"> Consultancy Services</span>
            </h2>
            <p className="body-text mb-4" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
              Established in 2022, Sneha and Prahar Consultancy Services is a specialized Facilities, Pharma and Biotech service provider company focused on delivering the best customer satisfaction without compromising on quality and services.
            </p>
            <p className="body-text mb-4" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', hyphens: 'none', wordBreak: 'break-word', textAlign: 'left' }}>
              <strong style={{ color: '#0057FF' }}>Mr. Rajendra Prasad</strong>, Founder & Managing Director, is a self-esteemed professional from Facilities, Pharma and Biotech service background with vast experience in handling these critical services. With extensive expertise in pharmaceutical engineering, facility management, and computer system validation, he leads the company with a vision to deliver innovative and value-driven products and services to the life sciences industry.
            </p>
            <p className="body-text mb-4" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
              We specialize in Greenfield projects, Process support projects, Automation, Computer System Validations, IT infrastructure evaluation, IT Lab Support, LIMS, SAP, Microbiology, MES tools, and spreadsheet development/validation especially in Life Sciences service verticals.
            </p>
            
            <div className="glass-card" style={{ padding: 'clamp(14px, 2vw, 16px) clamp(16px, 2vw, 20px)', marginBottom: 'clamp(16px, 2vw, 20px)' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#00A878', marginBottom: '8px', textAlign: 'center' }}>
                "A Hygiene Workplace will Increase Productivity"
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <Link to="/projects" className="btn-primary">View Projects <ArrowRight size={15} /></Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Leadership</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Experienced Engineers at
              <span className="gradient-text"> Every Level</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Managing Director */}
            <div className="glass-card" style={{ padding: 'clamp(20px, 3vw, 28px)', textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '780px' }}>
              <div style={{ background: 'rgba(0,87,255,0.1)', borderRadius: '12px', padding: 'clamp(16px, 3vw, 24px)', marginBottom: 'clamp(16px, 2vw, 20px)' }}>
                <img
                  src={ownerImage}
                  alt="Mr. Rajendra Prasad - Managing Director"
                  style={{ width: '220px', height: '220px', objectFit: 'contain', borderRadius: '12px', display: 'block', margin: '0 auto' }}
                />
              </div>
              <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: '8px' }}>Mr. Rajendra Prasad</h3>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#0057FF', marginBottom: 'clamp(12px, 2vw, 16px)', fontWeight: 600 }}>Founder & Managing Director</p>
              <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.7, textAlign: 'justify' }}>
                Self-esteemed professional from Facilities, Pharma and Biotech service background with vast experience in handling critical services. Held Senior Lead and Project Leadership roles in Singapore supporting world-class pharmaceutical manufacturing, delivering excellence in engineering consultancy and validation services across global markets.
              </p>
              <a href="https://www.linkedin.com/in/rajendra-prasad-gugulothu-b36499b7/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '24px', color: '#0057FF', fontWeight: 600, fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
                View LinkedIn Profile →
              </a>
            </div>
            {/* CEO */}
            <div className="glass-card" style={{ padding: 'clamp(20px, 3vw, 28px)', textAlign: 'center', display: 'flex', flexDirection: 'column', minHeight: '780px' }}>
              <div style={{ background: 'rgba(0,168,120,0.1)', borderRadius: '12px', padding: 'clamp(16px, 3vw, 24px)', marginBottom: 'clamp(16px, 2vw, 20px)' }}>
                <img
                  src={ceoImage}
                  alt="Mr. Prudvi Nayak - Chief Executive Officer"
                  style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '12px', display: 'block', margin: '0 auto' }}
                />
              </div>
              <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: '8px' }}>Mr. Prudvi Nayak</h3>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#00A878', marginBottom: 'clamp(12px, 2vw, 16px)', fontWeight: 600 }}>Chief Executive Officer</p>
              <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: 1.7, textAlign: 'justify' }}>
                Provides strategic leadership, driving engineering excellence, business growth, and operational performance across Engineering, Pharmaceutical, Biotechnology, and Life Sciences projects while ensuring innovation, quality, and client satisfaction through comprehensive project management and technical expertise in facility design and validation.
              </p>
              <a href="https://www.linkedin.com/in/prudvi-nayak-gugulothu-77496513a/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '24px', color: '#00A878', fontWeight: 600, fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
                View LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(50px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="gradient-border-card" style={{ padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px)' }}>
            <div
              style={{
                width: 'clamp(40px, 5vw, 48px)',
                height: 'clamp(40px, 5vw, 48px)',
                borderRadius: '12px',
                background: 'rgba(0,87,255,0.15)',
                border: '1px solid rgba(0,87,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'clamp(16px, 2vw, 20px)',
              }}
            >
              <Award size={22} style={{ color: '#0057FF' }} />
            </div>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: '14px' }}>
              Our Mission
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              To provide consistently high quality services in an efficient and professional manner to ensure building/business safety, comfort and enhance productivity.
            </p>
          </div>
          <div className="gradient-border-card" style={{ padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px)' }}>
            <div
              style={{
                width: 'clamp(40px, 5vw, 48px)',
                height: 'clamp(40px, 5vw, 48px)',
                borderRadius: '12px',
                background: 'rgba(0,168,120,0.15)',
                border: '1px solid rgba(0,168,120,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'clamp(16px, 2vw, 20px)',
              }}
            >
              <Globe size={22} style={{ color: '#00A878' }} />
            </div>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: '14px' }}>
              Our Vision
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              To be the preferred facility management service provider, delivering effective, reliable and excellent services as a collaborative and valued partner.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card" style={{ padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px)', marginBottom: 'clamp(24px, 4vw, 32px)' }}>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Our Specializations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                'Computer System Validations (CSV) & CQV',
                'Cost & Energy Saving Projects',
                'Utility and Facility Projects',
                'Green Field & Brown Field Projects',
                'Lab Support',
                'Qualification & Validation Process',
                'Automation, PLC & Upgradation Projects',
                'Outsourcing / Manpower Support Services'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00A878', flexShrink: 0, marginTop: '9px' }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginTop: '0px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Focus */}
          <div className="glass-card" style={{ padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px)' }}>
            <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: 'white', marginBottom: 'clamp(12px, 2vw, 16px)' }}>Industry Focus</h3>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2vw, 24px)', textAlign: 'center' }}>
                <div className="icon-box" style={{ margin: '0 auto clamp(12px, 2vw, 18px)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: 'white', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="section-label mb-4 sm:mb-5">Our Track Record</div>
            <h2 className="section-heading mb-6 sm:mb-8" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
              Achievements That
              <span className="gradient-text"> Speak for Themselves</span>
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4">
              {achievements.map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={16} style={{ color: '#00A878', marginTop: '9px', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginTop: '0px' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { val: '100+', label: 'Projects Delivered', sub: 'Since 2022' },
              { val: '35+', label: 'Engineers', sub: 'Specialists' },
              { val: '99%', label: 'Satisfaction', sub: 'Client rated' },
              { val: '18', label: 'GMP Audits', sub: 'Successfully supported' },
              { val: '250K+', label: 'Eng. Hours', sub: 'Delivered' },
            ].map(s => (
              <div key={s.label} className="gradient-border-card" style={{ padding: 'clamp(16px, 2vw, 20px) clamp(12px, 2vw, 16px)', textAlign: 'center' }}>
                <div className="stat-number gradient-text" style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '6px' }}>{s.val}</div>
                <div style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'white', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Profile Highlights */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 80px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Corporate Profile</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Sneha & Prahar Consultancy
              <span className="gradient-text"> Services Highlights</span>
            </h2>
          </div>
          <div className="glass-card" style={{ padding: 'clamp(24px, 4vw, 32px) clamp(16px, 3vw, 24px)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                'Life Science & Pharmaceutical Engineering Solutions',
                'Qualification & Validation Support',
                'Facility and Utility Projects',
                'Automation & Improvement Projects',
                'Trusted Support Partner for Leading Pharma Organizations',
                'Cost & Energy Saving Expertise'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    style={{
                      width: 'clamp(32px, 4vw, 40px)',
                      height: 'clamp(32px, 4vw, 40px)',
                      borderRadius: '10px',
                      background: i % 2 === 0 ? 'rgba(0,87,255,0.15)' : 'rgba(0,168,120,0.15)',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.3)' : 'rgba(0,168,120,0.3)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle size={16} style={{ color: i % 2 === 0 ? '#0057FF' : '#00A878' }} />
                  </div>
                  <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.8)', fontWeight: 500, lineHeight: 1.6, marginTop: '0px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 80px) 0 clamp(80px, 10vw, 120px) 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Our History</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Four Years of
              <span className="gradient-text"> Rapid Growth</span>
            </h2>
          </div>
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
              <div style={{ minWidth: 'clamp(40px, 5vw, 50px)', textAlign: 'right', paddingTop: '4px' }}>
                <span className="number-text gradient-text" style={{ fontSize: 'clamp(16px, 3vw, 18px)' }}>{m.year}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '8px' }}>
                <div style={{ width: 'clamp(8px, 1.5vw, 10px)', height: 'clamp(8px, 1.5vw, 10px)', borderRadius: '50%', background: i % 2 === 0 ? '#0057FF' : '#00A878', flexShrink: 0 }} />
                {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, background: 'rgba(255,255,255,0.08)', minHeight: 'clamp(20px, 3vw, 24px)', marginTop: '6px' }} />}
              </div>
              <div className="glass-card" style={{ padding: 'clamp(14px, 2vw, 16px) clamp(16px, 2vw, 20px)', flex: 1 }}>
                {m.events.map((e, j) => (
                  <div key={j} className="flex gap-2 items-start mb-2">
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: i % 2 === 0 ? '#0057FF' : '#00A878', marginTop: '9px', flexShrink: 0 }} />
                    <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginTop: '0px' }}>{e}</p>
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
