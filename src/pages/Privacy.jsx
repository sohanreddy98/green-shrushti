import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        path="/privacy"
        description="How Green Shrushti collects, uses, and protects the personal information you share through our website and services."
      />
      <section className="page-hero legal-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: April 2026</p>
        </div>
      </section>

      <section className="section section-white legal-body">
        <div className="legal-wrap">
          <p className="legal-lead">
            Green Shrushti Waste Management and Sustainability Pvt. Ltd. ("Green Shrushti," "we," "us," or "our") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, and what choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you voluntarily provide when you:</p>
          <ul>
            <li>Fill out contact, enquiry, or quote request forms on our website</li>
            <li>Subscribe to updates or communicate with us via email, phone, or WhatsApp</li>
            <li>Engage with us commercially as a partner, vendor, or customer</li>
          </ul>
          <p>
            This typically includes your name, company, email address, phone number, service interest, and any details you include in your message. We may also collect basic technical information such as IP address, browser type, and pages visited, through standard analytics tools.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your enquiries and provide the services you request</li>
            <li>Send operational communications (quotes, proposals, manifests, reports)</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal, regulatory, and tax obligations</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>

          <h2>3. Sharing of Information</h2>
          <p>We may share information with:</p>
          <ul>
            <li>Service providers who help operate our business (e.g. hosting, analytics, email delivery) under strict confidentiality</li>
            <li>Regulatory bodies and authorities where required by law</li>
            <li>Logistics, processing, or recycling partners where necessary to fulfil the service you have engaged us for</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Enquiries that do not result in engagement are typically retained for up to 24 months.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Raise a complaint with relevant data protection authorities</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:info@greenshrushti.com">info@greenshrushti.com</a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses minimal cookies for essential functionality and analytics. You can control cookies via your browser settings. Disabling cookies may impact certain features of the site.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page indicates when it was most recently revised. Significant changes will be communicated through the website or directly where applicable.
          </p>

          <h2>9. Contact</h2>
          <p>
            For any questions about this Privacy Policy or how we handle your data, reach out to:
          </p>
          <p className="legal-contact">
            Green Shrushti Waste Management and Sustainability Pvt. Ltd.<br />
            Mumbai, Maharashtra, India<br />
            Email: <a href="mailto:info@greenshrushti.com">info@greenshrushti.com</a>
          </p>
        </div>
      </section>
    </>
  )
}
