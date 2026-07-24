import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Shield, Zap, Users, Building2,
  FlaskConical, Award, Clock, ChevronRight, Star, Quote
} from 'lucide-react'

const stats = [
  { number: '2022', label: 'Founded', suffix: '' },
  { number: '100', label: 'Projects Delivered', suffix: '+' },
  { number: '250K', label: 'Engineering Hours', suffix: '+' },
  { number: '25', label: 'Industries Served', suffix: '+' },
  { number: '99', label: 'Client Satisfaction', suffix: '%' },
]

const whyChooseUs = [
  {
    icon: <Award size={22} style={{ color: '#0057FF' }} />,
    title: 'Engineering Excellence',
    desc: 'Comprehensive engineering solutions for pharmaceutical, biotechnology, and life science facilities with a strong focus on quality, safety, and operational excellence.',
  },
  {
    icon: <Shield size={22} style={{ color: '#00A878' }} />,
    title: 'CQV Specialists',
    desc: 'Expert Commissioning, Qualification & Validation (CQV) services ensuring facilities, equipment, and utilities meet global GMP standards.',
  },
  {
    icon: <FlaskConical size={22} style={{ color: '#0057FF' }} />,
    title: 'Computer System Validation',
    desc: 'Comprehensive CSV services aligned with GAMP 5, FDA 21 CFR Part 11, and international regulatory requirements.',
  },
  {
    icon: <Building2 size={22} style={{ color: '#00A878' }} />,
    title: 'Facility & Utility Engineering',
    desc: 'Design, installation, qualification, and modernization of HVAC, cleanrooms, water systems, boilers, chillers, AHUs, and critical utilities.',
  },
  {
    icon: <CheckCircle size={22} style={{ color: '#0057FF' }} />,
    title: 'Regulatory Compliance',
    desc: 'Strong expertise in WHO GMP, US FDA, EU GMP, Schedule M, and other global pharmaceutical compliance standards.',
  },
  {
    icon: <Zap size={22} style={{ color: '#00A878' }} />,
    title: 'Automation & PLC Solutions',
    desc: 'PLC, SCADA, VFD, IoT integration, automation upgrades, and energy-efficient engineering solutions.',
  },
  {
    icon: <Users size={22} style={{ color: '#0057FF' }} />,
    title: 'Greenfield & Brownfield Projects',
    desc: 'Complete project execution from concept and design to commissioning, qualification, validation, and handover.',
  },
  {
    icon: <Clock size={22} style={{ color: '#00A878' }} />,
    title: 'Fast Project Execution',
    desc: 'Efficient planning and multidisciplinary teams delivering projects on time without compromising quality or safety.',
  },
  {
    icon: <Award size={22} style={{ color: '#0057FF' }} />,
    title: 'Dedicated Engineering Support',
    desc: 'Continuous technical support, maintenance services, shutdown assistance, manpower deployment, and lifecycle engineering solutions.',
  },
];

const services = [
  { title: 'Engineering Consultancy', desc: 'Concept to commissioning engineering for GMP facilities', color: '#0057FF' },
  { title: 'HVAC Systems', desc: 'Precision HVAC design for cleanroom environments', color: '#00A878' },
  { title: 'Cleanroom Engineering', desc: 'ISO 14644 classified cleanroom design and qualification', color: '#0057FF' },
  { title: 'Utility Engineering', desc: 'Pharmaceutical-grade utility systems design', color: '#00A878' },
  { title: 'CSV & Validation', desc: 'Computer system validation per GAMP 5 guidelines', color: '#0057FF' },
  { title: 'IQ / OQ / PQ', desc: 'Installation, operational, and performance qualification', color: '#00A878' },
  { title: 'Water Systems', desc: 'WFI, PW, and water for injection loop design', color: '#0057FF' },
  { title: 'Automation & BMS', desc: 'Integrated building management and process automation', color: '#00A878' },
  { title: 'Shutdown Services', desc: 'Planned maintenance shutdown and turnaround management', color: '#0057FF' },
  { title: 'Energy Audits', desc: 'Energy efficiency assessment and decarbonization planning', color: '#00A878' },
  { title: 'Documentation', desc: 'GMP documentation, SOPs, and validation protocols', color: '#0057FF' },
  { title: 'Equipment Qualification', desc: 'Risk-based equipment qualification and requalification', color: '#00A878' },
  { title: 'Process Engineering', desc: 'Process flow development, PFDs, P&IDs, equipment sizing, utility calculations, and process optimization.', color: '#0057FF' },
  {
  title: 'CQV Services',
  desc: 'Commissioning, Qualification & Validation (CQV) for facilities, utilities, equipment, and manufacturing systems.',
  color: '#00A878',
},
{
  title: 'Project Management Consultancy',
  desc: 'End-to-end project planning, coordination, execution, monitoring, and successful delivery of pharmaceutical engineering projects.',
  color: '#0057FF',
},
{
  title: 'Greenfield & Brownfield Projects',
  desc: 'Complete engineering, expansion, modernization, commissioning, and validation of pharmaceutical manufacturing facilities.',
  color: '#00A878',
},
]

const industries = [
  'Pharmaceutical Manufacturing', 'Biotechnology', 'Vaccine Production',
  'Active Pharmaceutical Ingredients', 'Research Laboratories', 'Healthcare Facilities',
  'Medical Devices', 'Food & Beverage Processing', 'Life Sciences',
]

const standards = [
  { name: 'WHO GMP', desc: 'World Health Organization Good Manufacturing Practice' },
  { name: 'US FDA', desc: '21 CFR Parts 210, 211 & 820 Compliance' },
  { name: 'EU GMP', desc: 'European Union GMP Annex 1 & EMA Guidelines' },
  { name: 'ISO 14644', desc: 'Cleanroom Classification & Air Cleanliness Standards' },
  { name: 'Schedule M', desc: 'Indian GMP Requirements for Pharmaceutical Plants' },
  { name: 'ASHRAE 170', desc: 'Ventilation of Health Care Facilities Standard' },
  { name: 'ISPE GAMP 5', desc: 'Good Automated Manufacturing Practice Guidelines' },
]

const projects = [
  {
    title: 'Sterile Injectable Facility',
    location: 'Hyderabad, Telangana',
    scope: 'Cleanroom design, HVAC, utilities, IQ/OQ/PQ validation for Class B & C manufacturing suites',
    duration: '18 months',
    category: 'Cleanroom Engineering',
    img: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=800&h=480&fit=crop&auto=format',
  },
  {
    title: 'Biotech R&D Campus',
    location: 'Pune, Maharashtra',
    scope: 'Multi-product cell culture facility with cGMP utilities, BMS integration, and equipment qualification',
    duration: '24 months',
    category: 'Utility Engineering',
    img: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&h=480&fit=crop&auto=format',
  },
  {
    title: 'API Manufacturing Expansion',
    location: 'Visakhapatnam, AP',
    scope: 'Greenfield API plant with solvent recovery, effluent treatment, and Schedule M compliance documentation',
    duration: '20 months',
    category: 'Industrial Projects',
    img: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=800&h=480&fit=crop&auto=format',
  },
]

const process = [
  { step: '01', title: 'Discovery & Assessment', desc: 'Site survey, regulatory gap analysis, and project scope definition with stakeholder alignment.' },
  { step: '02', title: 'Conceptual Engineering', desc: 'Process flow, equipment selection, and layout design with 3D BIM modeling.' },
  { step: '03', title: 'Detailed Engineering', desc: 'Complete engineering packages including P&IDs, specifications, and procurement support.' },
  { step: '04', title: 'Execution & Installation', desc: 'Construction management, vendor supervision, and quality control during build phase.' },
  { step: '05', title: 'Validation & Commissioning', desc: 'Systematic IQ/OQ/PQ execution, documentation, and regulatory readiness review.' },
  { step: '06', title: 'Handover & Support', desc: 'Documentation handover, training, and ongoing technical support services.' },
]

const milestones = [
  { year: '2022', title: 'Company Founded', desc: 'Established in Hyderabad with a founding team of seasoned pharmaceutical engineers.' },
  { year: '2023', title: 'Industry Expansion', desc: 'Extended services into biotechnology, vaccine manufacturing, and medical device sectors.' },
  { year: '2024', title: 'Major Project Deliveries', desc: 'Completed 40+ projects including sterile injectables, API plants, and R&D facilities.' },
  { year: '2025', title: 'Engineering Excellence', desc: 'Recognized for outstanding validation services across 6 major pharmaceutical companies.' },
  { year: '2026', title: 'International Growth', desc: 'Expanding engineering footprint with projects in SE Asia and Middle Eastern markets.' },
]

const testimonials = [
  {
    quote: "Sneha and Prahar delivered our sterile injectable cleanroom on time and ahead of WHO GMP inspection. Their validation documentation was exemplary and made our regulator audit completely seamless.",
    name: "Dr. Rajesh Venkataraman",
    title: "VP Engineering, Hetero Drugs",
    rating: 5,
  },
  {
    quote: "The HVAC and utilities team engineered a precision solution for our biotech campus that we couldn't find from larger consultancies. Their understanding of ISPE guidelines is unmatched in the region.",
    name: "Priya Chandrasekhar",
    title: "Director of Facilities, Biological E",
    rating: 5,
  },
]

const clients = [
  'Hetero Drugs', "Dr. Reddy's", 'Aurobindo Pharma', 'Biological E', 'Bharat Biotech',
  'Divi\'s Laboratories', 'Suven Life Sciences', 'Granules India', 'Laurus Labs',
]

export default function Home() {
  return (
    <div>
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?w=1920&h=1080&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(7,27,59,0.96) 0%, rgba(7,27,59,0.85) 50%, rgba(0,87,255,0.12) 100%)',
          }}
        />
        {/* Grid overlay */}
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
        {/* Gradient orbs */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            top: '15%',
            right: '12%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,87,255,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="animate-float-delayed"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '8%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,168,120,0.14) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Floating particles */}
        {[
          { top: '22%', left: '18%', size: 6, delay: 0, color: '#0057FF' },
          { top: '65%', left: '75%', size: 4, delay: 1.5, color: '#00A878' },
          { top: '40%', right: '20%', size: 8, delay: 3, color: '#0057FF' },
          { top: '78%', left: '35%', size: 5, delay: 0.8, color: '#00A878' },
          { top: '12%', left: '58%', size: 3, delay: 2.2, color: '#3378FF' },
        ].map((p, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}
            style={{
              position: 'absolute',
              top: p.top,
              left: 'left' in p ? (p as any).left : undefined,
              right: 'right' in p ? (p as any).right : undefined,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Hero content */}
        <div
          className="max-w-7xl mx-auto px-6 w-full"
          style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '140px' }}
        >
          <div className="max-w-4xl">
            <div className="section-label animate-fadeUp mb-6" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Pharmaceutical Engineering Consultancy
            </div>
            <h1
              className="animate-fadeUp"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(48px, 6.5vw, 88px)',
                lineHeight: 1.04,
                color: 'white',
                marginBottom: '28px',
                animationDelay: '0.2s',
                opacity: 0,
              }}
            >
              Engineering Tomorrow&apos;s
              <br />
              <span className="gradient-text-animated">Pharmaceutical</span>
              <br />
              Facilities.
            </h1>
            <p
              className="body-text animate-fadeUp"
              style={{
                fontSize: '18px',
                maxWidth: '580px',
                marginBottom: '44px',
                animationDelay: '0.35s',
                opacity: 0,
              }}
            >
              Sneha and Prahar Consultancy Services delivers world-class engineering, Commissioning, Qualification & Validation (CQV), 
              Computer System Validation (CSV), cleanroom, utility, compliance, and project execution solutions, enabling pharmaceutical 
              and biotechnology companies to design, build, qualify, and operate facilities that meet the highest international quality, 
              regulatory, and GMP standards.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fadeUp"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <Link to="/services" className="btn-primary" style={{ fontSize: '15px', padding: '16px 36px' }}>
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-secondary" style={{ fontSize: '15px', padding: '16px 36px' }}>
                View Projects <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap gap-6 mt-12 animate-fadeUp"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              {['WHO GMP Certified', 'US FDA Compliance', 'ISO 14644 Expertise', 'ISPE Member'].map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00A878' }} />
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(7,27,59,0.8)',
            backdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="stat-number"
                    style={{ fontSize: '28px', marginBottom: '4px' }}
                  >
                    <span className="gradient-text">{s.number}{s.suffix}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.5,
          }}
        >
          <div
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'white',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, white, transparent)',
            }}
          />
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-5">Who We Are</div>
              <h2 className="section-heading mb-6"
                  style={{
                    fontSize: 'clamp(30px, 3vw, 46px)',
                    lineHeight: 1.15,
                  }}
                >
                  Engineering, CQV & CSV
                  <br />
                  <span className="gradient-text">
                    Excellence for Global Life Sciences
                  </span>
                </h2>
              <p className="body-text mb-5" style={{ fontSize: '17px' }}>
                Sneha and Prahar Consultancy Services is a trusted engineering and
                validation partner specializing in pharmaceutical, biotechnology,
                healthcare, and other highly regulated industries. We provide
                integrated Engineering, Commissioning, Qualification & Validation (CQV),
                Computer System Validation (CSV), cleanroom engineering, utility
                systems, GMP compliance, and turnkey project execution solutions.
              </p>
              <p className="body-text mb-8" style={{ fontSize: '17px' }}>
                Our multidisciplinary team combines technical expertise with
                international regulatory standards to deliver reliable, compliant,
                and future-ready manufacturing facilities. From concept and design
                to commissioning, qualification, validation, and operational support,
                we help organizations achieve quality, regulatory compliance,
                operational excellence, and sustainable business growth.
              </p>
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { label: 'Senior Engineers', value: '35+' },
                  { label: 'Active Projects', value: '18' },
                  { label: 'States Served', value: '12' },
                  { label: 'GMP Audits Passed', value: '100%' },
                ].map(m => (
                  <div
                    key={m.label}
                    className="gradient-border-card"
                    style={{ padding: '20px 22px' }}
                  >
                    <div className="stat-number gradient-text" style={{ fontSize: '30px', marginBottom: '4px' }}>{m.value}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,87,255,0.15)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1669101602124-f5b78895d91c?w=800&h=560&fit=crop&auto=format"
                  alt="Pharmaceutical cleanroom facility"
                  style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7,27,59,0.6) 0%, transparent 60%)',
                    borderRadius: '20px',
                  }}
                />
              </div>
              {/* Floating stat card */}
              <div
                className="glass-card animate-pulse-glow"
                style={{
                  position: 'absolute',
                  bottom: 30,
                  left: -20,
                  padding: '18px 22px',
                  minWidth: '180px',
                }}
              >
                <div className="stat-number gradient-text" style={{ fontSize: '36px', lineHeight: 1 }}>99%</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)', maxWidth: '640px', margin: '0 auto 20px' }}>
              The Engineering Partner You Can
              <span className="gradient-text"> Trust.</span>
            </h2>
            <p className="body-text" style={{ fontSize: '17px', maxWidth: '520px', margin: '0 auto' }}>
              Nine pillars of excellence that make us the preferred engineering consultancy for
              India&apos;s top pharmaceutical companies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="glass-card-hover" style={{ padding: '28px' }}>
                <div className="icon-box" style={{ marginBottom: '18px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p className="body-text" style={{ fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-5">Our Services</div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
                End-to-End Engineering
                <br />
                <span className="gradient-text">Capabilities</span>
              </h2>
            </div>
            <Link to="/services" className="btn-secondary flex-shrink-0">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-card-hover"
                style={{ padding: '22px 20px' }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: s.color,
                    marginBottom: '14px',
                    boxShadow: `0 0 12px ${s.color}`,
                  }}
                />
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '8px', lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Industries Served</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
              Sector Expertise Across
              <span className="gradient-text"> 25+ Industries</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(ind => (
              <div key={ind} className="tag-pill">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GLOBAL STANDARDS ────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Compliance Framework</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
              Engineering to Global
              <span className="gradient-text"> Regulatory Standards</span>
            </h2>
            <p className="body-text mt-4" style={{ fontSize: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
              Every project is designed, executed, and documented to satisfy the world&apos;s
              most demanding pharmaceutical regulatory authorities.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {standards.map((s, i) => (
              <div key={i} className="certification-card">
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
                  }}
                >
                  <Shield size={18} style={{ color: i % 2 === 0 ? '#0057FF' : '#00A878' }} />
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: 'white' }}>
                  {s.name}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ───────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-5">Featured Projects</div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
                Landmark Deliveries That
                <br />
                <span className="gradient-text">Define Excellence</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-secondary flex-shrink-0">
              All Projects <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="project-card" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', transition: 'all 0.35s ease' }}>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-card-img"
                    style={{ height: '220px', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, color: '#00A878', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {p.category}
                  </div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '19px', color: 'white', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {p.scope}
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>📍 {p.location}</span>
                    <span style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: 'rgba(0,87,255,0.8)', fontWeight: 600 }}>{p.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
              A Rigorous <span className="gradient-text">Engineering Process</span>
              <br />Engineered for Results.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="process-step-number">{p.step}</div>
                <div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? 'rgba(0,87,255,0.2)' : 'rgba(0,168,120,0.2)',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.4)' : 'rgba(0,168,120,0.4)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <CheckCircle size={14} style={{ color: i % 2 === 0 ? '#0057FF' : '#00A878' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: '13px' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Client Voices</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
              Trusted by Industry
              <span className="gradient-text"> Leaders</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} style={{ fill: '#00A878', color: '#00A878' }} />
                  ))}
                </div>
                <Quote size={28} style={{ color: 'rgba(0,87,255,0.4)', marginBottom: '16px' }} />
                <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="divider-gradient" style={{ marginBottom: '20px' }} />
                <div>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '15px', color: 'white' }}>{t.name}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '3px' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Trusted by India&apos;s Leading Pharmaceutical Companies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map(c => (
              <div
                key={c}
                style={{
                  padding: '12px 22px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  fontFamily: 'Space Grotesk',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'white'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.3)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,87,255,0.06)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MILESTONES ──────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Company Timeline</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}>
              Our Journey of
              <span className="gradient-text"> Engineering Excellence</span>
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                  paddingBottom: i < milestones.length - 1 ? '40px' : '0',
                  position: 'relative',
                }}
              >
                {/* Left: year */}
                <div style={{ minWidth: '80px', textAlign: 'right', paddingTop: '4px' }}>
                  <span className="number-text gradient-text" style={{ fontSize: '20px' }}>{m.year}</span>
                </div>
                {/* Center: dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '6px', flexShrink: 0 }}>
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#0057FF' : '#00A878',
                      boxShadow: `0 0 16px ${i % 2 === 0 ? 'rgba(0,87,255,0.5)' : 'rgba(0,168,120,0.5)'}`,
                      flexShrink: 0,
                    }}
                  />
                  {i < milestones.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'rgba(255,255,255,0.08)', minHeight: '40px', marginTop: '6px' }} />
                  )}
                </div>
                {/* Right: content */}
                <div className="glass-card" style={{ padding: '18px 22px', flex: 1, marginTop: '-2px' }}>
                  <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '6px' }}>
                    {m.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: '13px' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INNOVATION SECTION ──────────────────────────────────────────── */}
      <section
        style={{
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #071B3B 0%, #0D2954 50%, #071B3B 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,87,255,0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0,168,120,0.12) 0%, transparent 50%)
            `,
          }}
        />
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label mb-5" style={{ justifyContent: 'center' }}>Innovation at Core</div>
          <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}>
            Digital Engineering.
            <br />
            <span className="gradient-text-animated">Future-Ready Facilities.</span>
          </h2>
          <p className="body-text mb-10" style={{ fontSize: '17px', maxWidth: '600px', margin: '0 auto 40px' }}>
            We leverage BIM, digital twins, and Industry 4.0 technologies to design pharmaceutical
            facilities that are not just compliant today, but adaptable for the demands of tomorrow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { label: 'BIM 3D Modeling', value: '100%', note: 'All projects' },
              { label: 'Digital Documentation', value: 'Paperless', note: 'End-to-end' },
              { label: 'Remote Monitoring', value: '24/7', note: 'IoT enabled' },
            ].map(f => (
              <div key={f.label} className="gradient-border-card" style={{ padding: '28px', textAlign: 'center' }}>
                <div className="stat-number gradient-text" style={{ fontSize: '28px', marginBottom: '4px' }}>{f.value}</div>
                <div style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: '14px', color: 'white', marginBottom: '4px' }}>{f.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{f.note}</div>
              </div>
            ))}
          </div>
          <Link to="/technology" className="btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }}>
            Explore Our Technology <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
