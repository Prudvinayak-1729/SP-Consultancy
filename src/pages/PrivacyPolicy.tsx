import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - SP Consultancies"
        description="Privacy Policy for Sneha & Prahar Consultancy Services. Learn how we protect visitor privacy on our informational website."
        canonical="/privacy-policy"
        keywords="privacy policy, data protection, visitor privacy, SP Consultancies"
      />
      <div className="min-h-screen" style={{ background: '#F8FAFC', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#111827',
            marginBottom: '24px',
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#6B7280',
            marginBottom: '40px',
          }}>
            Last Updated: 29 July 2026
          </p>

          <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8, color: '#374151' }}>
              <p style={{ marginBottom: '24px' }}>
                Sneha & Prahar Consultancy Services ("we", "our", or "us") is committed to protecting the privacy of visitors to our website.
              </p>
              <p style={{ marginBottom: '24px' }}>
                This website is intended to provide information about our company and professional engineering consultancy services.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We do not collect personal information through this website.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Visitors can browse our website without creating an account or submitting personal information.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                2. Website Usage
              </h2>
              <p style={{ marginBottom: '24px' }}>
                This website is provided solely for informational purposes regarding our engineering consultancy services.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                3. Third-Party Links
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Our website may contain links to external websites. We are not responsible for the content or privacy practices of those third-party websites.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                4. Data Security
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We take reasonable measures to maintain the security of our website. However, no internet-based service can guarantee complete security.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                5. Changes to this Privacy Policy
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We may update this Privacy Policy from time to time. Any changes will be published on this page with the updated revision date.
              </p>

              <h2 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '22px', color: '#111827', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #E5E7EB' }}>
                6. Contact Us
              </h2>
              <p style={{ marginBottom: '24px' }}>
                If you have any questions regarding this Privacy Policy, please contact:
              </p>
              <p style={{ marginBottom: '16px', fontWeight: 600 }}>
                Sneha & Prahar Consultancy Services
              </p>
              <p style={{ marginBottom: '8px' }}><strong>Email:</strong> spconsultanancies@gmail.com</p>
              <p style={{ marginBottom: '8px' }}><strong>Phone:</strong> +91 90008 77499</p>
              <p style={{ marginBottom: '8px' }}><strong>Address:</strong></p>
              <p style={{ marginBottom: '24px' }}>
                #8-80/80NP, Ramidi Malla Reddy Nagar,<br />
                Almasguda, Badangpet,<br />
                Hyderabad – 500058, Telangana, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
