import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Shield, Zap, Users, Building2,
  FlaskConical, Award, Clock, ChevronRight, Star, Quote, Thermometer
} from 'lucide-react'
import SEO from '../components/SEO'

const stats = [
  { number: '2022', label: 'Founded', suffix: '' },
  { number: '100', label: 'Projects Delivered', suffix: '+' },
  { number: '250K', label: 'Engineering Hours', suffix: '+' },
  { number: '25', label: 'Industries Served', suffix: '+' },
  { number: '99', label: 'Client Satisfaction', suffix: '%' },
]

const whyChooseUs = [
  {
    icon: <Award size={22} style={{ color: '#0969E8' }} />,
    title: 'Engineering Excellence',
    desc: 'Comprehensive engineering solutions for pharmaceutical, biotechnology, and life science facilities with a strong focus on quality, safety, and operational excellence.',
  },
  {
    icon: <Shield size={22} style={{ color: '#008C86' }} />,
    title: 'CQV Specialists',
    desc: 'Expert Commissioning, Qualification & Validation (CQV) services ensuring facilities, equipment, and utilities meet global GMP standards.',
  },
  {
    icon: <FlaskConical size={22} style={{ color: '#0969E8' }} />,
    title: 'Computer System Validation',
    desc: 'Comprehensive CSV services aligned with GAMP 5, FDA 21 CFR Part 11, and international regulatory requirements.',
  },
  {
    icon: <Zap size={22} style={{ color: '#008C86' }} />,
    title: 'MES Solutions',
    desc: 'Manufacturing Execution Systems for production monitoring, quality control, and regulatory compliance.',
  },
  {
    icon: <Shield size={22} style={{ color: '#0969E8' }} />,
    title: 'Facility Audit Readiness',
    desc: 'Comprehensive audit preparation support ensuring facilities are ready for WHO GMP, US FDA, EU GMP, and regulatory inspections.',
  },
  {
    icon: <Thermometer size={22} style={{ color: '#008C86' }} />,
    title: 'Temperature Mapping',
    desc: 'Temperature mapping studies for cold rooms, freezers, and storage areas ensuring compliance with regulatory requirements.',
  },
  {
    icon: <Building2 size={22} style={{ color: '#0969E8' }} />,
    title: 'Facility & Utility Engineering',
    desc: 'Design, installation, qualification, and modernization of HVAC, cleanrooms, water systems, boilers, chillers, AHUs, and critical utilities.',
  },
  {
    icon: <CheckCircle size={22} style={{ color: '#0969E8' }} />,
    title: 'Regulatory Compliance',
    desc: 'Strong expertise in WHO GMP, US FDA, EU GMP, Schedule M, and other global pharmaceutical compliance standards.',
  },
  {
    icon: <Zap size={22} style={{ color: '#008C86' }} />,
    title: 'Automation & PLC Solutions',
    desc: 'PLC, SCADA, VFD, IoT integration, automation upgrades, and energy-efficient engineering solutions.',
  },
  {
    icon: <Users size={22} style={{ color: '#0969E8' }} />,
    title: 'Greenfield & Brownfield Projects',
    desc: 'Complete project execution from concept and design to commissioning, qualification, validation, and handover.',
  },
  {
    icon: <Clock size={22} style={{ color: '#008C86' }} />,
    title: 'Fast Project Execution',
    desc: 'Efficient planning and multidisciplinary teams delivering projects on time without compromising quality or safety.',
  },
  {
    icon: <Award size={22} style={{ color: '#0969E8' }} />,
    title: 'Dedicated Engineering Support',
    desc: 'Continuous technical support, maintenance services, shutdown assistance, manpower deployment, and lifecycle engineering solutions.',
  },
];

const industries = [
  'Pharmaceutical Manufacturing', 'Biotechnology', 'Vaccine Production',
  'Active Pharmaceutical Ingredients', 'Research Laboratories', 'Healthcare Facilities',
  'Medical Devices', 'Food & Beverage Processing', 'Life Sciences',
]

const standards = [
  { name: 'WHO GMP', desc: 'World Health Organization Good Manufacturing Practice' },
  { name: 'US FDA', desc: '21 CFR Parts 210, 211 & 820 Compliance' },
  { name: 'EU GMP', desc: 'European Union GMP Annex 1 & EMA Guidelines' },
  { name: 'Schedule M', desc: 'Indian GMP Requirements for Pharmaceutical Plants' },
  { name: 'ASHRAE 170', desc: 'Ventilation of Health Care Facilities Standard' },
  { name: 'ISPE GAMP 5', desc: 'Good Automated Manufacturing Practice Guidelines' },
  { name: 'ICH Guidelines', desc: 'International Council for Harmonisation Technical Requirements' },
]

const process = [
  { step: '01', title: 'Discovery & Assessment', desc: 'Site survey, regulatory gap analysis, and project scope definition with stakeholder alignment.' },
  { step: '02', title: 'Conceptual Engineering', desc: 'Process flow, equipment selection, and layout design with 3D modeling.' },
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

const clients = [
  "Dr. Reddy's", 'Biological E', 'Divi\'s Laboratories', 'Ichor Biologics', 'Amneal',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Pharmaceutical Engineering & CQV Services"
        description="Sneha And Prahar Consultancy Services delivers world-class engineering, CQV, CSV, MES, facility audit readiness, temperature mapping, cleanroom, utility, compliance, and project execution solutions for pharmaceutical and biotechnology companies."
        canonical="/"
        keywords="pharmaceutical engineering, CQV services, CSV, MES, facility audit readiness, temperature mapping, cleanroom engineering, GMP compliance, WHO GMP, US FDA, EU GMP, pharmaceutical facility design"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sneha & Prahar Consultancy Services",
          "url": "https://spconsultancies.in",
          "logo": "https://spconsultancies.in/assets/img/spfavicon.png",
          "description": "Leading pharmaceutical engineering consultancy providing CQV, CSV, MES, facility audit readiness, temperature mapping, cleanroom engineering, and GMP compliance solutions since 2022.",
          "foundingDate": "2022",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9000877499",
            "contactType": "sales",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.linkedin.com/company/sneha-prahar-consultancy-services"
          ]
        }}
      />
    <div>
            {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Light background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.95) 50%, rgba(243,244,246,0.92) 100%)',
          }}
        />
        {/* Grid overlay */}
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
        {/* Gradient orbs */}
        <div
          className="animate-float hidden sm:block"
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
          className="animate-float-delayed hidden sm:block"
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
        {/* Floating particles – show only on larger screens */}
        {[
          { top: '22%', left: '18%', size: 6, delay: 0, color: '#0969E8' },
          { top: '65%', left: '75%', size: 4, delay: 1.5, color: '#008C86' },
          { top: '40%', right: '20%', size: 8, delay: 3, color: '#0969E8' },
          { top: '78%', left: '35%', size: 5, delay: 0.8, color: '#008C86' },
          { top: '12%', left: '58%', size: 3, delay: 2.2, color: '#3378FF' },
        ].map((p, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? 'animate-float hidden sm:block' : 'animate-float-delayed hidden sm:block'}
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
          className="max-w-7xl mx-auto px-4 sm:px-6 w-full"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            paddingTop: 'clamp(120px, 18vw, 150px)',
            paddingBottom: '40px',
          }}
        >
          <div>
          <div className="max-w-full">
            <div className="section-label animate-fadeUp mb-4 sm:mb-6" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Pharmaceutical Engineering Consultancy
            </div>
            <h1
              className="animate-fadeUp"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(28px, 5vw, 88px)',
                lineHeight: 1.1,
                color: '#111827',
                marginBottom: 'clamp(16px, 3vw, 28px)',
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
            <div style={{ textAlign: 'left' }}>
                <p className="body-text mb-4 sm:mb-5" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '720px', lineHeight: 1.7 }}>
              Sneha And Prahar Consultancy Services Delivers World-Class Engineering, Commissioning Qualification And Validation (CQV), 
              Computer System Validation (CSV), MES, Facility Audit Readiness, Temperature Mapping, Cleanroom, Utility, Compliance, And Project Execution Solutions, Enabling Pharmaceutical 
              And Bio-Technology Companies To Design, Build, Qualify, And Operate Facilities That Meet The Highest International Quality, 
              Regulatory, And GMP Standards.
            </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeUp w-full"
              style={{ animationDelay: '0.5s', opacity: 0, marginTop: '28px' }}
            >
              <Link to="/projects" className="btn-primary w-full sm:w-auto" style={{ fontSize: 'clamp(13px, 2vw, 15px)', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 36px)', maxWidth: '340px', margin: '0 auto sm:0' }}>
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/industries" className="btn-secondary w-full sm:w-auto" style={{ fontSize: 'clamp(13px, 2vw, 15px)', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 36px)', maxWidth: '340px', margin: '0 auto sm:0' }}>
                Explore Industries <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust indicators – REMOVED the three badges as requested */}
          </div>
          </div>
        </div>

        {/* Stats bar at bottom – using flexbox instead of absolute */}
        <div
          style={{
            marginTop: 'auto',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="stat-number"
                    style={{ fontSize: 'clamp(18px, 3vw, 28px)', marginBottom: '8px', lineHeight: 1 }}
                  >
                    <span className="gradient-text">{s.number}{s.suffix}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: 'clamp(8px, 1.5vw, 11px)', color: '#475569', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator – hidden on mobile */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '180px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.5,
          }}
        >
          <div
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(8px, 2vw, 9px)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#111827',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, #111827, transparent)',
            }}
          />
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="section-label mb-4 sm:mb-5">Who We Are</div>
              <h2 className="section-heading mb-4 sm:mb-6"
                  style={{
                    fontSize: 'clamp(24px, 4vw, 46px)',
                    lineHeight: 1.15,
                  }}
                >
                  Engineering, CQV & CSV
                  <br />
                  <span className="gradient-text">
                    Excellence for Global Life Sciences
                  </span>
                </h2>
              <div style={{ textAlign: 'justify' }}>
                <p className="body-text mb-4 sm:mb-5" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
                Sneha and Prahar Consultancy Services is a Trusted Engineering and
                Validation Partner Specializing in Pharmaceutical, Bio-Technology,
                Healthcare, and other highly regulated industries. We provide
                Integrated Engineering, Commissioning, Qualification & Validation (CQV),
                Computer System Validation (CSV), MES, Facility Audit Readiness, Temperature Mapping, Cleanroom Engineering, Utility
                Systems, GMP Compliance, and Turnkey Project Execution Solutions.
              </p>
              <p className="body-text mb-4 sm:mb-5" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
                Our Multidisciplinary Team Combines Technical Expertise with
                International Regulatory Standards to deliver reliable, Compliant,
                and Future-Ready manufacturing Facilities. From concept and design
                to Commissioning, Qualification, Validation, and Operational Support,
                we help organizations achieve quality, regulatory compliance,
                operational excellence, and sustainable business growth.
              </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-8">
                {[
                  { label: 'Senior Engineers', value: '35+' },
                  { label: 'Active Projects', value: '18' },
                  { label: 'GMP Audits Passed', value: '100%' },
                  { label: 'Client Satisfaction Rate', value: '99%' },
                ].map(m => (
                  <div
                    key={m.label}
                    className="gradient-border-card"
                    style={{ padding: 'clamp(16px, 2vw, 20px) clamp(18px, 2vw, 22px)' }}
                  >
                    <div className="stat-number gradient-text" style={{ fontSize: 'clamp(24px, 4vw, 30px)', marginBottom: '4px' }}>{m.value}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-2 lg:order-1" style={{ position: 'relative' }}>
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
                  className="image-hover-effect"
                  style={{ width: '100%', height: 'clamp(300px, 40vw, 480px)', objectFit: 'cover', display: 'block' }}
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            {/* ─── SPLIT INTO 3 LINES WITH UPDATED TEXT ─── */}
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Twelve pillars of excellence engineering<br />
              that make us the preferred consultancy<br />
              for top pharmaceutical companies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="glass-card flex flex-col h-full" style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
                <div className="icon-box" style={{ marginBottom: 'clamp(14px, 2vw, 18px)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 2vw, 18px)', color: '#111827', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>
              Industries Served
            </div>

            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
              Sector Expertise Across
              <span className="gradient-text"> 25+ Industries</span>
            </h2>

            <p
              className="section-description mx-auto mt-4"
              style={{
                maxWidth: '700px',
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: '#6b7280',
                lineHeight: '1.7',
              }}
            >
              Delivering specialized engineering, validation, and compliance solutions
              across pharmaceuticals, biotechnology, vaccines, APIs, and allied industries.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {industries.map(ind => (
              <div key={ind} className="tag-pill">{ind}</div>
            ))}
          </div>
        </div>
      </section>
     {/* ─── GLOBAL STANDARDS ────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Compliance Framework</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Engineering to Global
              <span className="gradient-text"> Regulatory Standards</span>
            </h2>
            {/* ─── SINGLE LINE TEXT ─── */}
            <p
              className="body-text mt-4"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                maxWidth: '100%',
                margin: '16px auto 0',
                whiteSpace: 'nowrap',           // ← forces single line
                overflow: 'hidden',             // ← prevents layout break
                textOverflow: 'ellipsis',       // ← adds '…' on overflow
              }}
            >
              Every project is designed, executed, and documented to satisfy the world&apos;s most demanding pharmaceutical regulatory authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
            {standards.map((s, i) => (
              <div
                key={i}
                className="certification-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '100%',
                  minHeight: 'clamp(120px, 15vw, 160px)',
                  paddingTop: 'clamp(16px, 2vw, 24px)',
                }}
              >
                <div
                  style={{
                    width: 'clamp(36px, 5vw, 44px)',
                    height: 'clamp(36px, 5vw, 44px)',
                    borderRadius: '12px',
                    background: i % 2 === 0 ? 'rgba(0,87,255,0.15)' : 'rgba(0,168,120,0.15)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.25)' : 'rgba(0,168,120,0.25)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    flexShrink: 0,
                  }}
                >
                  <Shield size={18} style={{ color: i % 2 === 0 ? '#0969E8' : '#008C86' }} />
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(11px, 2vw, 13px)', color: '#111827' }}>
                  {s.name}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.5 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              A Rigorous <span className="gradient-text">Engineering Process</span>
              <br />Engineered for Results.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {process.map((p, i) => (
              <div key={i} className="process-step flex flex-col h-full">
                <div className="process-step-number">{p.step}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      style={{
                        width: 'clamp(28px, 4vw, 32px)',
                        height: 'clamp(28px, 4vw, 32px)',
                        borderRadius: '50%',
                        background: i % 2 === 0 ? 'rgba(0,87,255,0.2)' : 'rgba(0,168,120,0.2)',
                        border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.4)' : 'rgba(0,168,120,0.4)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle size={14} style={{ color: i % 2 === 0 ? '#0969E8' : '#008C86' }} />
                    </div>
                    <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: '#111827' }}>
                      {p.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── FEATURED TESTIMONIAL ─────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            {/* Removed invalid justifyContent style – text-center already centers it */}
            <div className="section-label mb-4 sm:mb-5">Client Voices</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Trusted by Industry
              <span className="gradient-text"> Leaders</span>
            </h2>
          </div>
          <div className="glass-card" style={{ padding: 'clamp(32px, 4vw, 48px)', position: 'relative' }}>
            <Quote size={48} style={{ color: 'rgba(0,87,255,0.2)', position: 'absolute', top: '20px', left: '20px' }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div className="flex gap-1 mb-6 justify-center">
                {[1, 2, 3, 4, 5].map((_, j) => (
                  <Star key={j} size={20} style={{ fill: '#008C86', color: '#008C86' }} />
                ))}
              </div>
              <p style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0969E8',
                marginBottom: '8px',
              }}>
                Project
              </p>
              <p style={{
                fontFamily: 'Satoshi',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '24px',
                lineHeight: 1.4,
              }}>
                Liquid Nitrogen Level Monitoring & Intelligent Alert System (13 KL Tank)
              </p>
              <p style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '24px',
                textAlign: 'justify',
              }}>
                "Thank you, Rajendra. The project has come out exceptionally well. Thank you for the excellent idea and for sharing it with us. This is one of our dream projects. We are now able to clearly monitor the Liquid Nitrogen tank levels through the digital monitoring display.

                In addition to real-time level monitoring and alarm notifications, we have successfully implemented an automated email alert system with the support of the Sneha and Prahar team. We now receive instant email notifications whenever the nitrogen level reaches a low-level condition, enabling timely action.

                We look forward to driving more innovations in our Utility systems. Please continue sharing such ideas and opportunities—we're always eager to explore and implement innovative solutions."
              </p>
              <div className="divider-gradient" style={{ marginBottom: '20px', maxWidth: '200px', margin: '0 auto 20px' }} />
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#111827', marginBottom: '4px' }}>R. Dinagaran</p>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2vw, 16px)', color: '#475569' }}>Engineering Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Trusted by India&apos;s Leading
              <span className="gradient-text"> Pharmaceutical Companies</span>
            </h2>
            <div className="divider-gradient" style={{ maxWidth: '120px', margin: '16px auto 0' }} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {clients.map((c, i) => (
              <div
                key={c}
                className="glass-card"
                style={{
                  padding: 'clamp(16px, 2.5vw, 24px) clamp(24px, 4vw, 36px)',
                  borderRadius: '16px',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.2)' : 'rgba(0,168,120,0.2)'}`,
                  background: i % 2 === 0 ? 'rgba(0,87,255,0.04)' : 'rgba(0,168,120,0.04)',
                  fontFamily: 'Satoshi',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: 700,
                  color: '#111827',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  cursor: 'default',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.color = i % 2 === 0 ? '#0969E8' : '#008C86'
                  el.style.borderColor = i % 2 === 0 ? 'rgba(0,87,255,0.4)' : 'rgba(0,168,120,0.4)'
                  el.style.background = i % 2 === 0 ? 'rgba(0,87,255,0.08)' : 'rgba(0,168,120,0.08)'
                  el.style.boxShadow = i % 2 === 0 ? '0 12px 40px rgba(0,87,255,0.15)' : '0 12px 40px rgba(0,168,120,0.15)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = ''
                  el.style.color = '#111827'
                  el.style.borderColor = i % 2 === 0 ? 'rgba(0,87,255,0.2)' : 'rgba(0,168,120,0.2)'
                  el.style.background = i % 2 === 0 ? 'rgba(0,87,255,0.04)' : 'rgba(0,168,120,0.04)'
                  el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MILESTONES ──────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Company Timeline</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
              Our Journey of
              <span className="gradient-text"> Engineering Excellence</span>
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row"
                style={{
                  gap: 'clamp(16px, 3vw, 32px)',
                  alignItems: 'flex-start',
                  paddingBottom: i < milestones.length - 1 ? 'clamp(24px, 4vw, 40px)' : '0',
                  position: 'relative',
                }}
              >
                {/* Left: year - on mobile show above content */}
                <div className="sm:text-right text-left" style={{ minWidth: '80px', paddingTop: '4px' }}>
                  <span className="number-text gradient-text" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}>{m.year}</span>
                </div>
                {/* Center: dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '6px', flexShrink: 0 }}>
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#0969E8' : '#008C86',
                      boxShadow: `0 0 16px ${i % 2 === 0 ? 'rgba(0,87,255,0.5)' : 'rgba(0,168,120,0.5)'}`,
                      flexShrink: 0,
                    }}
                  />
                  {i < milestones.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'rgba(0,0,0,0.08)', minHeight: '40px', marginTop: '6px' }} />
                  )}
                </div>
                {/* Right: content */}
                <div className="glass-card" style={{ padding: 'clamp(16px, 2vw, 18px) clamp(18px, 2vw, 22px)', flex: 1, marginTop: '-2px' }}>
                  <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: '#111827', marginBottom: '6px', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}


