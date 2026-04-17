import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const HERO_BG = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85'
const WHY_IMG = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&q=85'

const stats = [
  { n: '500+', l: 'Tonnes Processed Monthly' },
  { n: '50+',  l: 'Industrial Partners' },
  { n: '100%', l: 'Compliance Rate' },
  { n: '14',   l: 'Service Offerings' },
]

const whatCards = [
  { img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80', title: 'Source-to-Recycler Pipeline', body: 'We procure, process, and channel recyclable waste from industries directly to verified recyclers — eliminating middlemen and ensuring material quality.' },
  { img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', title: 'Regulatory Compliance',       body: 'Every operation aligns with environmental regulations. We handle documentation, manifests, and reporting so you stay audit-ready without the hassle.' },
  { img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', title: 'Consistent Volume Supply',    body: 'Recyclers depend on us for predictable, high-volume raw material availability — reducing procurement uncertainty and operational downtime.' },
]

const solutions = [
  { n: '01', title: 'Waste Management', slug: 'waste-management',      body: 'Compliant handling across C&D, industrial, MSW, hazardous and scrap streams — with documentation built in.',   items: ['C&D Waste Management','Industrial Waste','MSW Programmes','Hazardous Waste','Scrap & Metal'] },
  { n: '02', title: 'Sustainable Solutions', slug: 'sustainable-solutions', body: 'Biochar, composting, plastic recycling, and waste-to-energy — circular systems that produce real value.', items: ['Biochar Production','Composting','Waste-to-Energy','Plastic Recycling'] },
  { n: '03', title: 'Carbon Credits', slug: 'carbon-credits',          body: 'End-to-end project development — from methodology to verified issuance under Verra, Gold Standard and Puro.', items: ['Project Development','Biochar Credits','Afforestation','MRV Services','Verra / Gold Standard'] },
]

const whyPoints = [
  { title: 'Reliable Supply Chain', body: 'Consistent material availability for recyclers — reducing procurement uncertainty and production halts.' },
  { title: 'Compliance-Driven Operations', body: 'Aligned with CPCB and state regulations. Every manifest, every document — handled.' },
  { title: 'Cost Optimization', body: 'Efficient waste handling models that reduce your disposal costs while maximizing recovery value.' },
  { title: 'Transparent Process', body: 'Data-driven tracking and reporting — you always know where your material is.' },
  { title: 'Scalable Execution', body: 'Capable of handling large industrial volumes with the logistics to scale with your needs.' },
]

const industries = [
  { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80', tag: 'Recycling',     title: 'Metal & Plastic Recyclers' },
  { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80', tag: 'Construction',  title: 'Construction & Infrastructure' },
  { img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&q=80', tag: 'Manufacturing', title: 'Industrial & Manufacturing' },
]

const materials = [
  { title: 'Ferrous Metals',     body: 'Mild steel, cast iron, structural steel scrap from industrial sources.' },
  { title: 'Non-Ferrous Metals', body: 'Aluminium, copper, brass, stainless steel — sorted and weighed.' },
  { title: 'Plastic Scrap',      body: 'Segregated HDPE, PP, PET, and mixed plastic categories.' },
  { title: 'C&D Debris',         body: 'Construction & demolition waste — concrete, wood, tiles, fixtures.' },
]

const steps = [
  { n: '01', title: 'Waste Assessment',           body: 'We evaluate waste type, volume, and frequency at your facility before committing to any arrangement.' },
  { n: '02', title: 'Collection & Segregation',   body: 'Scheduled pickup with on-site segregation based on material category and compliance requirements.' },
  { n: '03', title: 'Processing & Quality Check', body: 'Materials are processed, graded, and verified for quality before dispatch to recyclers.' },
  { n: '04', title: 'Supply / Disposal / Report', body: 'Final delivery to recyclers or compliant disposal — with complete documentation.' },
]

const testimonials = [
  { quote: 'Green Shrushti has been one of the most reliable scrap supply partners we\'ve worked with. Consistent volume, clean segregation, and they handle all the paperwork.', name: 'Metal Recycling Unit',    loc: 'Mumbai, Maharashtra' },
  { quote: 'We needed a waste management partner who understood compliance. Green Shrushti handled our industrial waste, documentation, and reporting — zero headaches.',          name: 'Manufacturing Plant',      loc: 'Navi Mumbai, Maharashtra' },
  { quote: 'The C&D waste handling on our project was seamless. On-time pickups, proper disposal, and they gave us the sustainability report our client required.',               name: 'Infrastructure Developer', loc: 'Thane, Maharashtra' },
]

const logos = [
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zm0 3a6 6 0 0 1 5.5 8.4l-8.9-8.9A6 6 0 0 1 11 5zm0 12a6 6 0 0 1-5.5-8.4l8.9 8.9A6 6 0 0 1 11 17z" fill="currentColor"/></svg><span>RecyFlow</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/></svg><span>EarthCore</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 7v8l8 5 8-5V7L11 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M11 2v13M3 7l8 4 8-4" stroke="currentColor" strokeWidth="1.5"/></svg><span>SteelNet</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M4 16s1-1 4-1 5 2 8 2 4-1 4-1V6s-1 1-4 1-5-2-8-2-4 1-4 1v10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg><span>WasteLine</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="12" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="2" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="12" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg><span>MetaLink</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M5 11c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 11c0 3.3-2.7 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M11 5l2.5 2.5L11 10M11 17l-2.5-2.5L11 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg><span>PureLoop</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M3 17L8 7l4 6 3-4 4 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg><span>GoldLine</span></div>),
  () => (<div className="logo-item"><svg width="32" height="32" viewBox="0 0 22 22" fill="none"><path d="M11 3L4 8v6l7 5 7-5V8L11 3z" fill="currentColor" opacity="0.15"/><path d="M11 3L4 8v6l7 5 7-5V8L11 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg><span>Urban<strong>2.0</strong></span></div>),
]

function HeroForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', company: '', phone: '', need: '' })
  const set = useCallback(k => e => setForm(f => ({ ...f, [k]: e.target.value })), [])

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.need) return
    setError('')
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, company: form.company, phone: form.phone,
          service: form.need, source: 'hero',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSent(true)
    } catch (err) {
      setError(err.message || 'Could not send. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (sent) return (
    <div className="hero-card hc-sent">
      <div className="hc-sent-icon">✓</div>
      <h3>We'll be in touch</h3>
      <p>Thanks {form.name.split(' ')[0]}. Our team will contact you within 24 hours.</p>
    </div>
  )

  return (
    <form className="hero-card" onSubmit={submit}>
      <p className="hc-label">Get a Quick Quote</p>
      <div className="hc-field"><label>Your Name</label><input placeholder="Rahul Sharma" value={form.name} onChange={set('name')} required /></div>
      <div className="hc-field"><label>Company</label><input placeholder="Company Pvt. Ltd." value={form.company} onChange={set('company')} /></div>
      <div className="hc-field"><label>Phone / WhatsApp</label><input placeholder="+91 98XXX XXXXX" value={form.phone} onChange={set('phone')} required /></div>
      <div className="hc-field">
        <label>I need</label>
        <select value={form.need} onChange={set('need')} required>
          <option value="">Select a service...</option>
          <option>Waste Management</option>
          <option>Sustainable Solutions</option>
          <option>Carbon Credits</option>
          <option>ESG Advisory</option>
          <option>General Enquiry</option>
        </select>
      </div>
      <button type="submit" className="hc-cta" disabled={sending}>
        {sending ? 'Sending…' : 'Send Enquiry →'}
      </button>
      {error && <p className="contact-error" style={{ marginTop: 10 }}>{error}</p>}
    </form>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="Green Shrushti provides compliant waste management, recycling, sustainable solutions, and carbon-credit project development for industries, construction firms, municipalities, and agriculture across Mumbai and Maharashtra."
      />
      <section className="hero" style={{ backgroundImage: `linear-gradient(105deg,rgba(10,24,15,0.88) 32%,rgba(10,24,15,0.46) 100%),url('${HERO_BG}')` }}>
        <div className="hero-inner">
          <div className="hero-left">
            <h1>Reliable Supply of<br /><em>Recyclable Materials</em><br />&amp; Compliant Waste<br />Solutions</h1>
            <p>We bridge the gap between waste generators and recyclers — ensuring consistent raw material supply and efficient, compliant waste management for industries across Mumbai.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-green">Request Material Availability</a>
              <a href="#solutions" className="btn btn-outline">Explore Solutions</a>
            </div>
          </div>
          <HeroForm />
        </div>
      </section>

      <div className="logo-strip">
        <div className="logo-strip-label">Trusted by industrial partners across Mumbai &amp; Maharashtra</div>
        <div className="logo-strip-track-wrap">
          <div className="logo-strip-fade logo-strip-fade-l" />
          <div className="logo-strip-track">
            {[...Array(2)].map((_, pass) => logos.map((L, i) => <L key={`${pass}-${i}`} />))}
          </div>
          <div className="logo-strip-fade logo-strip-fade-r" />
        </div>
      </div>

      <div className="stats-bar">
        {stats.map(s => (
          <div className="stat" key={s.l}><div className="stat-n">{s.n}</div><div className="stat-l">{s.l}</div></div>
        ))}
      </div>

      <section className="section section-cream" id="what-we-do">
        <span className="eyebrow">What We Do</span>
        <h2 className="heading">Connecting Waste Generators<br />with Recyclers</h2>
        <p className="lead">Green Shrushti operates at the intersection of industrial waste management and recycler raw material supply — making the circular economy work in practice.</p>
        <div className="trio">
          {whatCards.map(c => (
            <div className="card" key={c.title}>
              <img className="card-img" src={c.img} alt={c.title} />
              <div className="card-body"><h3>{c.title}</h3><p>{c.body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-forest" id="solutions">
        <span className="eyebrow eyebrow-light">Our Core Solutions</span>
        <h2 className="heading heading-light">Built for Recyclers &amp;<br />Industry Alike</h2>
        <p className="lead lead-light">Three focused service lines — each opens into detailed service pages.</p>
        <div className="sol-grid">
          {solutions.map(s => (
            <div className="sol-card" key={s.n}>
              <div className="sol-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="sol-list">{s.items.map(i => <li key={i}>{i}</li>)}</ul>
              <Link to={`/services/${s.slug === 'waste-management' ? 'cnd-waste-management' : s.slug === 'sustainable-solutions' ? 'biochar-production' : 'carbon-project-development'}`} className="sol-cta">Explore →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white" id="why">
        <div className="split">
          <div className="split-img"><img src={WHY_IMG} alt="Recycling Operations" /></div>
          <div>
            <span className="eyebrow">Why Green Shrushti</span>
            <h2 className="heading">Pure Business Value.<br />No Empty Promises.</h2>
            <p className="lead" style={{marginBottom:24}}>We don't sell sustainability stories. We deliver reliable operations your business can depend on.</p>
            <div className="why-inline-stats">
              <div className="why-stat"><span className="why-stat-n">3+</span><span className="why-stat-l">Years in Operations</span></div>
              <div className="why-stat-div" />
              <div className="why-stat"><span className="why-stat-n">500+</span><span className="why-stat-l">Tonnes / Month</span></div>
              <div className="why-stat-div" />
              <div className="why-stat"><span className="why-stat-n">100%</span><span className="why-stat-l">Compliant</span></div>
            </div>
            <div className="why-list">
              {whyPoints.map(w => (
                <div className="why-item" key={w.title}>
                  <div className="why-check">✓</div>
                  <div><h4>{w.title}</h4><p>{w.body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream" id="industries">
        <span className="eyebrow">Industries We Work With</span>
        <h2 className="heading">Sector Experience<br />That Matters</h2>
        <p className="lead">We understand the operational realities of each sector — not just the waste they generate.</p>
        <div className="ind-row">
          {industries.map(i => (
            <div className="ind-card" key={i.title}>
              <img src={i.img} alt={i.title} />
              <div className="ind-overlay"><div className="ind-tag">{i.tag}</div><h3>{i.title}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mat-section" id="materials">
        <div className="mat-panel">
          <span className="eyebrow eyebrow-light">Available Materials</span>
          <h2 className="mat-heading">What We Supply<br />to Recyclers</h2>
          <p className="mat-sub">Volume availability varies based on sourcing. Contact us for current supply.</p>
          <a href="#contact" className="btn btn-white" style={{marginTop:8}}>Check Availability</a>
        </div>
        <div className="mat-list">
          {materials.map((m, i) => (
            <div className="mat-item" key={m.title}>
              <span className="mat-item-num">{String(i + 1).padStart(2,'0')}</span>
              <div className="mat-item-body"><h4>{m.title}</h4><p>{m.body}</p></div>
              <span className="mat-item-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="proc-section" id="process">
        <div className="proc-header">
          <span className="eyebrow">Our Process</span>
          <h2 className="heading">Structured. Transparent.<br />Reliable.</h2>
          <p className="lead" style={{marginBottom:0}}>From first assessment to final report — every step documented and accountable.</p>
        </div>
        <div className="proc-steps">
          {steps.map(s => (
            <div className="proc-step" key={s.n}>
              <div className="proc-step-num">{s.n}</div>
              <div className="proc-step-content"><h4>{s.title}</h4><p>{s.body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white" id="testimonials">
        <span className="eyebrow">What Partners Say</span>
        <h2 className="heading">Built on Long-Term<br />Partnerships</h2>
        <p className="lead">We let operational results speak — not marketing copy.</p>
        <div className="testi-row">
          {testimonials.map(t => (
            <div className="testi-card" key={t.name}>
              <div className="testi-quote">"</div>
              <p>{t.quote}</p>
              <div className="testi-foot">
                <div className="testi-av">{t.name.charAt(0)}</div>
                <div><strong>{t.name}</strong><span>{t.loc}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact" style={{ backgroundImage: `linear-gradient(rgba(10,24,15,0.82),rgba(10,24,15,0.82)),url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=75')` }}>
        <span className="eyebrow eyebrow-light">Let's Work Together</span>
        <h2>Ready to Streamline<br />Your Waste Operations?</h2>
        <p>Whether you need recyclable material supply or compliant waste management, we're ready to support your operations.</p>
        <div className="cta-btns">
          <a href="mailto:support@greenshrushti.in" className="btn btn-white">Request Material Availability</a>
          <a href="https://wa.me/918482841702" className="btn btn-outline-light">WhatsApp Us</a>
          <a href="tel:+918482841702" className="btn btn-outline-light">Call Now</a>
        </div>
      </section>
    </>
  )
}
