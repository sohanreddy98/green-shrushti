import { useState, useCallback } from 'react'
import SEO from '../components/SEO'

const channels = [
  {
    label: 'Call us',
    value: '+91 XXXXX XXXXX',
    note: 'Mon–Sat, 9:30 AM – 6:30 PM IST',
    href: 'tel:+91XXXXXXXXXX',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Chat with our team',
    note: 'Usually respond within an hour',
    href: 'https://wa.me/91XXXXXXXXXX',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@greenshrushti.com',
    note: 'For commercial & project enquiries',
    href: 'mailto:info@greenshrushti.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.7"/>
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.7" fill="none"/>
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'What minimum volumes do you work with?',
    a: 'For industrial waste and scrap, we typically engage with generators producing 5+ tonnes per month. For C&D and project-based work, we handle one-off volumes as well.',
  },
  {
    q: 'Do you operate outside Mumbai?',
    a: 'Our core operational footprint is Mumbai, Navi Mumbai, Thane, and Pune belt. We do undertake project-based engagements across Maharashtra and neighbouring states.',
  },
  {
    q: 'What compliance documentation do you provide?',
    a: 'Manifests, weighbridge receipts, disposal certificates, and state-board-aligned records. Everything your audit or RERA filing will need.',
  },
  {
    q: 'How quickly can you begin operations?',
    a: 'After an initial site assessment (usually within a week), operational cycles can typically begin within 10–14 days for industrial / MSW arrangements.',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', volume: '', message: '',
  })
  const set = useCallback(k => e => setForm(f => ({ ...f, [k]: e.target.value })), [])

  const submit = e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) return
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        path="/contact"
        description="Get in touch with Green Shrushti for waste management, recycling, carbon credit, or ESG enquiries. We respond within one working day."
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Get in Touch</span>
          <h1>Let's discuss<br />your requirement</h1>
          <p>Tell us about your waste streams, volumes, or carbon project — we'll come back to you within one working day with a concrete proposal.</p>
        </div>
      </section>

      <section className="section section-white contact-main">
        <div className="contact-grid">
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent-icon">✓</div>
                <h2>Message received</h2>
                <p>Thanks {form.name.split(' ')[0] || 'there'} — our team will reach out to you at <strong>{form.email}</strong> within one working day.</p>
                <p className="contact-sent-sub">For urgent matters, WhatsApp us at <a href="https://wa.me/91XXXXXXXXXX">+91 XXXXX XXXXX</a>.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <span className="eyebrow">Enquiry Form</span>
                <h2 className="heading" style={{ fontSize: '2rem', marginBottom: 28 }}>Send us a message</h2>

                <div className="contact-row">
                  <div className="hc-field">
                    <label>Full Name *</label>
                    <input placeholder="Rahul Sharma" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="hc-field">
                    <label>Company</label>
                    <input placeholder="Company Pvt. Ltd." value={form.company} onChange={set('company')} />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="hc-field">
                    <label>Email *</label>
                    <input type="email" placeholder="rahul@company.com" value={form.email} onChange={set('email')} required />
                  </div>
                  <div className="hc-field">
                    <label>Phone / WhatsApp *</label>
                    <input placeholder="+91 98XXX XXXXX" value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="hc-field">
                    <label>I'm interested in</label>
                    <select value={form.service} onChange={set('service')}>
                      <option value="">Select a service...</option>
                      <option>Waste Management</option>
                      <option>Sustainable Solutions</option>
                      <option>Carbon Credits</option>
                      <option>ESG Advisory</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="hc-field">
                    <label>Expected Volume</label>
                    <select value={form.volume} onChange={set('volume')}>
                      <option value="">Select volume...</option>
                      <option>Under 5 T / month</option>
                      <option>5 – 25 T / month</option>
                      <option>25 – 100 T / month</option>
                      <option>100+ T / month</option>
                      <option>One-off project</option>
                    </select>
                  </div>
                </div>

                <div className="hc-field">
                  <label>Tell us more</label>
                  <textarea
                    rows="5"
                    placeholder="Briefly describe your waste streams, project timelines, or what you need help with..."
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button type="submit" className="hc-cta">Send Enquiry →</button>
                <p className="contact-disclaimer">We respond within one working day. Your details are never shared with third parties.</p>
              </form>
            )}
          </div>

          <aside className="contact-aside">
            <div className="contact-card">
              <h3>Direct channels</h3>
              <div className="contact-channels">
                {channels.map(c => (
                  <a className="contact-channel" href={c.href} key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <div className="contact-channel-icon">{c.icon}</div>
                    <div className="contact-channel-body">
                      <span className="contact-channel-label">{c.label}</span>
                      <span className="contact-channel-value">{c.value}</span>
                      <span className="contact-channel-note">{c.note}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-card contact-card-dark">
              <h3 style={{ color: '#fff' }}>Office</h3>
              <p className="contact-address">
                Green Shrushti<br />
                Mumbai, Maharashtra<br />
                India — 400001
              </p>
              <hr className="contact-hr" />
              <div className="contact-hours">
                <div><strong>Mon – Fri</strong><span>9:30 – 18:30</span></div>
                <div><strong>Saturday</strong><span>10:00 – 16:00</span></div>
                <div><strong>Sunday</strong><span>Closed</span></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-cream">
        <span className="eyebrow">Common Questions</span>
        <h2 className="heading">Before you ask</h2>
        <p className="lead">A few questions we hear often — if yours isn't here, drop us a line.</p>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <details className="faq-item" key={f.q} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
