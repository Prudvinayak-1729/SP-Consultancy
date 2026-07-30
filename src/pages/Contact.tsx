import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Link2, MessageCircle, Globe, CheckCircle, Loader2, User, Building, Mail as MailIcon, Phone as PhoneIcon, Globe as GlobeIcon, Briefcase, MapPin as LocationIcon, FileText } from 'lucide-react'
import contactImage from '/assets/img/contact.png'
import SEO from '../components/SEO'

const offices = [
  {
    city: 'Hyderabad',
    tag: 'Headquarters',
    address: '#8-80/80NP, Ramidi Malla Reddy Nagar, Almasguda, Badangpet, Hyderabad — 500081, Telangana, India',
    phone: ['+91 90008 77499', '+91 88014 11271', '+91 82962 76148'],
    email: ['spconsultancies@gmail.com'],
    mapImg: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?w=700&h=380&fit=crop&auto=format',
    color: '#0969E8',
  },
]

const contactMethods = [
  {
    icon: <Phone size={22} style={{ color: '#0969E8' }} />,
    title: 'Call Us Directly',
    desc: 'Speak with a senior engineer about your project requirements.',
    value: '+91 88014 11271\n+91 90008 77499',
    sub: 'India',
    action: 'Call Now',
  },
  {
    icon: <MessageCircle size={22} style={{ color: '#008C86' }} />,
    title: 'WhatsApp',
    desc: 'Quick project enquiries and instant communication.',
    value: '+65 9353 0873',
    sub: 'Singapore',
    action: 'Start Chat',
  },
  {
    icon: <Mail size={22} style={{ color: '#0969E8' }} />,
    title: 'Email',
    desc: 'Send detailed project briefs and RFQ documents.',
    value: 'spconsultancies@gmail.com',
    sub: 'Response within 24 hours',
    action: 'Send Email',
  },
  {
    icon: <Link2 size={22} style={{ color: '#008C86' }} />,
    title: 'LinkedIn',
    desc: 'Follow our latest projects, insights, and company news.',
    value: 'Sneha & Prahar Consultancy',
    sub: 'Professional network',
    action: 'Connect',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Emergency Support Only' },
]

const specialties = [
  'Computer System Validation (CSV)',
  'Manufacturing Execution Systems (MES)',
  'Facility Audit Readiness',
  'Temperature Mapping Studies',
  'New Pharmaceutical Facility Projects',
  'Cleanroom Design & Engineering',
  'HVAC System Design & Upgrade',
  'Validation & Qualification Services',
  'Regulatory Compliance Gap Assessment',
  'Shutdown Planning & Management',
  'Energy Audits & Optimization',
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Email validation
    const email = formData.get('email') as string
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify({
          access_key: 'c8060850-061c-4fea-8250-4c27215e82d6',
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          country: formData.get('country'),
          service: formData.get('service'),
          location: formData.get('location'),
          description: formData.get('description'),
          consent: formData.get('consent'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        form.reset()
      } else {
        setErrorMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us - Pharmaceutical Engineering Consultancy"
        description="Contact Sneha and Prahar Consultancy Services for pharmaceutical engineering, CQV, CSV, MES, and GMP compliance solutions. Call +91 90008 77499 or email spconsultancies@gmail.com."
        canonical="/contact"
        keywords="contact SP Consultancies, pharmaceutical engineering contact, CQV services contact, CSV validation contact, Hyderabad pharmaceutical consultants, engineering consultancy contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Sneha & Prahar Consultancy Services",
          "description": "Contact us for pharmaceutical engineering, CQV, CSV, MES, and GMP compliance solutions.",
          "url": "https://spconsultancies.in/contact"
        }}
      />
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="section-label mb-4 sm:mb-5">Contact Us</div>
              <h1 className="section-heading mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '700px' }}>
                Let&apos;s Build Something
                <br />
                <span className="gradient-text">Exceptional Together.</span>
              </h1>
              <p className="body-text" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '560px', textAlign: 'left' }}>
                Whether you have a fully scoped project or are exploring options for a new facility —
                our team is ready to discuss your pharmaceutical engineering requirements.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={contactImage}
                alt="Contact Us"
                className="image-hover-effect"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-5">Get In Touch</div>
          <h2 className="section-heading mb-12" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            Multiple Ways to
            <span className="gradient-text"> Connect with Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((c, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div className="icon-box">{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 16px)', color: '#111827', marginBottom: '6px' }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.6, marginBottom: '10px' }}>{c.desc}</p>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 13px)', color: '#111827', marginBottom: '4px' }}>{c.value}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(10px, 2vw, 11px)', color: '#6B7280' }}>{c.sub}</p>
                </div>
                <a
                  href={
                    c.title === 'Call Us Directly' ? 'tel:+918801411271' :
                    c.title === 'WhatsApp' ? 'https://wa.me/6593530873' :
                    c.title === 'Email' ? 'mailto:spconsultancies@gmail.com' :
                    c.title === 'LinkedIn' ? 'https://www.linkedin.com/in/rajendra-prasad-gugulothu-b36499b7/' : '#'
                  }
                  target={c.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={c.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  style={{
                    marginTop: 'auto',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: i % 2 === 0 ? 'rgba(0,87,255,0.15)' : 'rgba(0,168,120,0.15)',
                    border: `1px solid ${i % 2 === 0 ? 'rgba(0,87,255,0.3)' : 'rgba(0,168,120,0.3)'}`,
                    fontFamily: 'Inter',
                    fontSize: 'clamp(12px, 2vw, 13px)',
                    fontWeight: 600,
                    color: i % 2 === 0 ? '#3378FF' : '#008C86',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENQUIRY FORM ────────────────────────────────────────────────────── */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-label mb-5">Send Enquiry</div>
          <h2 className="section-heading mb-12" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            Contact
            <span className="gradient-text"> Us</span>
          </h2>

          {isSuccess ? (
            <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <CheckCircle size={64} style={{ color: '#008C86' }} />
              </div>
              <h3 style={{ fontFamily: 'Satoshi', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#111827', marginBottom: '12px' }}>
                Thank You!
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Your enquiry has been submitted successfully.<br />
                Our engineering team will contact you shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="btn-secondary"
                style={{ padding: '12px 28px', fontSize: 'clamp(13px, 2vw, 15px)' }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Error Message */}
              {errorMessage && (
                <div style={{ padding: '14px 18px', borderRadius: '10px', background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.25)', color: '#DC2626', fontFamily: 'Inter', fontSize: 'clamp(13px, 2vw, 14px)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>⚠️</span>
                  {errorMessage}
                </div>
              )}

              {/* Two Column Grid for Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <User size={16} style={{ color: '#0969E8' }} />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Company */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building size={16} style={{ color: '#0969E8' }} />
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company name"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MailIcon size={16} style={{ color: '#0969E8' }} />
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@company.com"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PhoneIcon size={16} style={{ color: '#0969E8' }} />
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 90000 00000"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Country */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <GlobeIcon size={16} style={{ color: '#0969E8' }} />
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="India"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} style={{ color: '#0969E8' }} />
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontFamily: 'Inter',
                      fontSize: 'clamp(14px, 2.5vw, 15px)',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <option value="">Select a service</option>
                    <option value="Computer System Validation (CSV)">Computer System Validation (CSV)</option>
                    <option value="Manufacturing Execution Systems (MES)">Manufacturing Execution Systems (MES)</option>
                    <option value="Facility Audit Readiness">Facility Audit Readiness</option>
                    <option value="Temperature Mapping Studies">Temperature Mapping Studies</option>
                    <option value="New Pharmaceutical Facility Projects">New Pharmaceutical Facility Projects</option>
                    <option value="Cleanroom Design & Engineering">Cleanroom Design & Engineering</option>
                    <option value="HVAC System Design & Upgrade">HVAC System Design & Upgrade</option>
                    <option value="Validation & Qualification Services">Validation & Qualification Services</option>
                    <option value="Regulatory Compliance Gap Assessment">Regulatory Compliance Gap Assessment</option>
                    <option value="Shutdown Planning & Management">Shutdown Planning & Management</option>
                    <option value="Energy Audits & Optimization">Energy Audits & Optimization</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Project Location - Full Width */}
              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LocationIcon size={16} style={{ color: '#0969E8' }} />
                  Project Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="City, State, Country"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontFamily: 'Inter',
                    fontSize: 'clamp(14px, 2.5vw, 15px)',
                    background: '#FFFFFF',
                    transition: 'all 0.25s ease',
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>

              {/* Project Description - Full Width */}
              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} style={{ color: '#0969E8' }} />
                  Project Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={5}
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontFamily: 'Inter',
                    fontSize: 'clamp(14px, 2.5vw, 15px)',
                    background: '#FFFFFF',
                    transition: 'all 0.25s ease',
                    resize: 'vertical',
                    minHeight: '120px',
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0969E8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(9,105,232,0.1)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', borderRadius: '10px', background: 'rgba(0,87,255,0.04)', border: '1px solid rgba(0,87,255,0.12)' }}>
                <input
                  type="checkbox"
                  name="consent"
                  required
                  id="privacy-consent"
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer',
                    accentColor: '#0969E8',
                  }}
                />
                <label
                  htmlFor="privacy-consent"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#475569',
                    lineHeight: 1.6,
                    cursor: 'pointer',
                  }}
                >
                  I agree to the <span style={{ color: '#0969E8', fontWeight: 600 }}>Privacy Policy</span> and consent to the processing of my personal data for enquiry purposes. *
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  padding: '16px 40px',
                  fontSize: 'clamp(15px, 2vw, 16px)',
                  fontWeight: 600,
                  alignSelf: 'flex-start',
                  marginTop: '8px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Mail size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── OFFICES ────────────────────────────────────────────────────── */}
      {/* ✅ Fixed: full‑width card – no empty column */}
      <section className="mesh-bg-alt" style={{ padding: '100px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-5">Our Offices</div>
          <h2 className="section-heading mb-12" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
            Find Us Across
            <span className="gradient-text"> India</span>
          </h2>

          {/* Single full‑width card */}
          <div className="gradient-border-card" style={{ overflow: 'hidden' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '240px' }}>
                <img
                  src={offices[0].mapImg}
                  alt={`${offices[0].city} Office`}
                  className="image-hover-effect"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '280px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(0.7) saturate(0.8)',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)` }} />
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '999px',
                      background: 'rgba(0,87,255,0.85)',
                      fontFamily: 'Space Grotesk',
                      fontSize: 'clamp(9px, 2vw, 11px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {offices[0].tag}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                  <h3 style={{ fontFamily: 'Satoshi', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 28px)', color: '#FFFFFF' }}>
                    {offices[0].city}
                  </h3>
                </div>
              </div>

              {/* Details side */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="flex gap-3 items-start">
                  <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                    <MapPin size={15} style={{ color: offices[0].color }} />
                  </div>
                  <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#111827', lineHeight: 1.65 }}>
                    {offices[0].address}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                    <Phone size={15} style={{ color: offices[0].color }} />
                  </div>
                  <div>
                    {offices[0].phone.map(p => (
                      <p key={p} style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon-box" style={{ width: 36, height: 36, borderRadius: '8px', flexShrink: 0 }}>
                    <Mail size={15} style={{ color: offices[0].color }} />
                  </div>
                  <div>
                    {offices[0].email.map(e => (
                      <p key={e} style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#111827' }}>{e}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working hours + specialties */}
      <section className="mesh-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <div className="section-label mb-5">Working Hours</div>
            <h2 className="section-heading mb-8" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
              When to
              <span className="gradient-text"> Reach Us</span>
            </h2>
            <div className="flex flex-col gap-3">
              {hours.map(h => (
                <div
                  key={h.day}
                  className="glass-card"
                  style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div className="flex items-center gap-3">
                    <Clock size={15} style={{ color: '#0969E8' }} />
                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 'clamp(12px, 2vw, 14px)', color: '#111827' }}>{h.day}</span>
                  </div>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(0,168,120,0.9)' }}>{h.time}</span>
                </div>
              ))}
            </div>
            <div
              className="glass-card"
              style={{ marginTop: '24px', padding: '20px', borderColor: 'rgba(0,87,255,0.25)', borderWidth: 1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone size={15} style={{ color: '#0969E8' }} />
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(11px, 2vw, 13px)', color: '#0969E8', letterSpacing: '0.06em' }}>
                  EMERGENCY SUPPORT
                </span>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.6 }}>
                For critical project emergencies during commissioning or validation phases, our
                24/7 emergency support line is available to active project clients.
              </p>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <div className="section-label mb-5">Enquiry Types</div>
            <h2 className="section-heading mb-8" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}>
              We Specialize
              <span className="gradient-text"> In</span>
            </h2>
            <div className="flex flex-col gap-3">
              {specialties.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    background: 'rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,87,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,87,255,0.25)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.03)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.07)'
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#0969E8' : '#008C86',
                      flexShrink: 0,
                      marginTop: '9px',
                      boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(0,87,255,0.5)' : 'rgba(0,168,120,0.5)'}`,
                    }}
                  />
                  <span style={{ fontFamily: 'Inter', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#475569', lineHeight: 1.6, marginTop: '0px' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '80px 0',
          background: '#FFFFFF',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, rgba(0,87,255,0.5), transparent)' }} />
            <Globe size={16} style={{ color: '#0969E8' }} />
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, rgba(0,87,255,0.5), transparent)' }} />
          </div>
          <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(32px, 3vw, 48px)', color: '#111827' }}>
            India&apos;s Premier Pharmaceutical
            <br />
            <span className="gradient-text">Engineering Consultancy</span>
          </h2>
          <p className="body-text mb-8" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', maxWidth: '480px', margin: '0 auto 32px', color: '#475569' }}>
            From Hyderabad to Mumbai, from Baddi to Chennai — we bring world-class pharmaceutical
            engineering to every corner of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918801411271" className="btn-primary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              <Phone size={16} /> Call Now
            </a>
            <a href="mailto:spconsultancies@gmail.com" className="btn-secondary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              <Mail size={16} /> Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}


