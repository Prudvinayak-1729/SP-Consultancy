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
    icon: <Zap size={22} style={{ color: '#00A878' }} />,
    title: 'MES Solutions',
    desc: 'Manufacturing Execution Systems for production monitoring, quality control, and regulatory compliance.',
  },
  {
    icon: <Shield size={22} style={{ color: '#0057FF' }} />,
    title: 'Facility Audit Readiness',
    desc: 'Comprehensive audit preparation support ensuring facilities are ready for WHO GMP, US FDA, EU GMP, and regulatory inspections.',
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
  { title: 'Cleanroom Engineering', desc: 'Cleanroom design and qualification', color: '#0057FF' },
  { title: 'Utility Engineering', desc: 'Pharmaceutical-grade utility systems design', color: '#00A878' },
  { title: 'CSV & Validation', desc: 'Computer system validation per GAMP 5 guidelines', color: '#0057FF' },
  { title: 'MES Solutions', desc: 'Manufacturing Execution Systems for production monitoring and compliance', color: '#00A878' },
  { title: 'Facility Audit Readiness', desc: 'Audit preparation support for WHO GMP, US FDA, EU GMP inspections', color: '#0057FF' },
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
    <div>
            {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          { top: '22%', left: '18%', size: 6, delay: 0, color: '#0057FF' },
          { top: '65%', left: '75%', size: 4, delay: 1.5, color: '#00A878' },
          { top: '40%', right: '20%', size: 8, delay: 3, color: '#0057FF' },
          { top: '78%', left: '35%', size: 5, delay: 0.8, color: '#00A878' },
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
            position: 'relative',
            zIndex: 10,
            paddingTop: 'clamp(120px, 20vw, 140px)',
            paddingBottom: 'clamp(160px, 25vw, 220px)', // ✅ increased bottom padding
          }}
        >
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
                color: 'white',
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
            <div style={{ textAlign: 'justify' }}>
                <p className="body-text mb-4 sm:mb-5" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
              Sneha And Prahar Consultancy Services Delivers World-Class Engineering, Commissioning Qualification And Validation (CQV), 
              Computer System Validation (CSV), MES, Facility Audit Readiness, Cleanroom, Utility, Compliance, And Project Execution Solutions, Enabling Pharmaceutical 
              And Bio-Technology Companies To Design, Build, Qualify, And Operate Facilities That Meet The Highest International Quality, 
              Regulatory, And GMP Standards.
            </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeUp w-full"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <Link to="/services" className="btn-primary w-full sm:w-auto" style={{ fontSize: 'clamp(13px, 2vw, 15px)', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 36px)', maxWidth: '340px', margin: '0 auto sm:0' }}>
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-secondary w-full sm:w-auto" style={{ fontSize: 'clamp(13px, 2vw, 15px)', padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 36px)', maxWidth: '340px', margin: '0 auto sm:0' }}>
                View Projects <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust indicators – REMOVED the three badges as requested */}
          </div>
        </div>

        {/* Stats bar at bottom – unchanged, remains absolute */}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="stat-number"
                    style={{ fontSize: 'clamp(18px, 3vw, 28px)', marginBottom: '8px', lineHeight: 1 }}
                  >
                    <span className="gradient-text">{s.number}{s.suffix}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: 'clamp(8px, 1.5vw, 11px)', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.3 }}>
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
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
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
                Computer System Validation (CSV), MES, Facility Audit Readiness, Cleanroom Engineering, Utility
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
                    <div style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.55)' }}>{m.label}</div>
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
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-label mb-4 sm:mb-5" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            {/* ─── SPLIT INTO 3 LINES WITH UPDATED TEXT ─── */}
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Eleven pillars of excellence engineering<br />
              that make us the preferred consultancy<br />
              for India's top pharmaceutical companies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="glass-card flex flex-col h-full" style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
                <div className="icon-box" style={{ marginBottom: 'clamp(14px, 2vw, 18px)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 2vw, 18px)', color: 'white', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <div className="section-label mb-4 sm:mb-5">Our Services</div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>
                End-to-End Engineering
                <br />
                <span className="gradient-text">Capabilities</span>
              </h2>
            </div>
            <Link to="/services" className="btn-secondary flex-shrink-0">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-card flex flex-col h-full"
                style={{ padding: 'clamp(18px, 2vw, 22px) clamp(16px, 2vw, 20px)' }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: s.color,
                    marginBottom: 'clamp(10px, 2vw, 14px)',
                    boxShadow: `0 0 12px ${s.color}`,
                  }}
                />
                <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(13px, 2vw, 15px)', color: 'white', marginBottom: '8px', lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, flex: 1 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: 'clamp(50px, 6vw, 80px) 0' }}>
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
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
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
                  <Shield size={18} style={{ color: i % 2 === 0 ? '#0057FF' : '#00A878' }} />
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(11px, 2vw, 13px)', color: 'white' }}>
                  {s.name}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
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
                      <CheckCircle size={14} style={{ color: i % 2 === 0 ? '#0057FF' : '#00A878' }} />
                    </div>
                    <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: 'white' }}>
                      {p.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── FEATURED TESTIMONIAL ─────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
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
                  <Star key={j} size={20} style={{ fill: '#00A878', color: '#00A878' }} />
                ))}
              </div>
              <p style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0057FF',
                marginBottom: '8px',
              }}>
                Project
              </p>
              <p style={{
                fontFamily: 'Satoshi',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '24px',
                lineHeight: 1.4,
              }}>
                Liquid Nitrogen Level Monitoring & Intelligent Alert System (13 KL Tank)
              </p>
              <p style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.8,
                marginBottom: '24px',
                textAlign: 'justify',
              }}>
                "Thank you, Rajendra. The project has come out exceptionally well. Thank you for the excellent idea and for sharing it with us. This is one of our dream projects. We are now able to clearly monitor the Liquid Nitrogen tank levels through the digital monitoring display.

                In addition to real-time level monitoring and alarm notifications, we have successfully implemented an automated email alert system with the support of the Honeywell team. We now receive instant email notifications whenever the nitrogen level reaches a low-level condition, enabling timely action.

                We look forward to driving more innovations in our Utility systems. Please continue sharing such ideas and opportunities—we're always eager to explore and implement innovative solutions."
              </p>
              <div className="divider-gradient" style={{ marginBottom: '20px', maxWidth: '200px', margin: '0 auto 20px' }} />
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 22px)', color: 'white', marginBottom: '4px' }}>R. Dinagaran</p>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.6)' }}>Engineering Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ────────────────────────────────────────────────── */}
      <section className="mesh-bg" style={{ padding: 'clamp(50px, 6vw, 70px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(10px, 2vw, 11px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              textAlign: 'center',
              marginBottom: '24px sm:mb-32',
            }}
          >
            Trusted by India&apos;s Leading Pharmaceutical Companies
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {clients.map(c => (
              <div
                key={c}
                style={{
                  padding: 'clamp(10px, 2vw, 12px) clamp(18px, 3vw, 22px)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  fontFamily: 'Space Grotesk',
                  fontSize: 'clamp(11px, 2vw, 13px)',
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
      <section className="mesh-bg-alt" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
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
                <div className="glass-card" style={{ padding: 'clamp(16px, 2vw, 18px) clamp(18px, 2vw, 22px)', flex: 1, marginTop: '-2px' }}>
                  <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 17px)', color: 'white', marginBottom: '6px', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}