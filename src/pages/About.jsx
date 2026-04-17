import { Link } from 'react-router-dom'

const missionPoints = [
  { title: 'End-to-end waste solutions', body: 'Efficient, sustainable handling across every waste stream — from industrial scrap to municipal organics.' },
  { title: 'Lower carbon footprint', body: 'Practical pathways for businesses to reduce emissions and achieve ESG goals — backed by data and documentation.' },
  { title: 'Innovative practices', body: 'Biochar production, carbon credit generation, and circular-economy models that create value where waste once existed.' },
  { title: 'A cleaner future', body: 'Active contribution to a greener, more responsible India — one partnership, one project, one tonne at a time.' },
]

const principles = [
  { n: '01', title: 'Compliance first',     body: 'Every manifest, every certificate, every audit trail — handled the way regulators expect.' },
  { n: '02', title: 'Operational reliability', body: 'Scheduled pickups, consistent volumes, transparent weighing — partners depend on us showing up.' },
  { n: '03', title: 'Long-term partnerships', body: 'We optimise for multi-year relationships, not one-off contracts — because waste is a recurring problem.' },
  { n: '04', title: 'Measured outcomes',   body: 'Real metrics — tonnes diverted, credits generated, costs reduced — shared openly with every partner.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">About Green Shrushti</span>
          <h1>Transforming waste<br />into value — with compliance built in</h1>
          <p>A forward-thinking environmental solutions company bridging the gap between waste generation and responsible recovery.</p>
        </div>
      </section>

      <section className="section section-white about-intro">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading">Green Shrushti Waste Management<br />&amp; Sustainability Pvt. Ltd.</h2>
            <p className="about-lead">
              Green Shrushti is a forward-thinking environmental solutions company dedicated to transforming waste into valuable resources — while contributing to a low-carbon, sustainable future.
            </p>
            <p className="about-body">
              Founded with a vision to bridge the gap between waste generation and responsible disposal, we specialise in integrated waste management, recycling, and carbon credit solutions. Our work spans industries, construction companies, municipalities, and the agricultural sector — delivering efficient, compliant, and eco-friendly outcomes across every engagement.
            </p>
            <div className="about-stats">
              <div><span className="about-stat-n">3+</span><span className="about-stat-l">Years of Operations</span></div>
              <div><span className="about-stat-n">500+</span><span className="about-stat-l">Tonnes Handled / Month</span></div>
              <div><span className="about-stat-n">50+</span><span className="about-stat-l">Industrial Partners</span></div>
            </div>
          </div>
          <div className="about-intro-img">
            <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&q=85" alt="Green Shrushti operations" />
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision-inner">
          <span className="eyebrow eyebrow-light">Our Vision</span>
          <blockquote>
            To become a leading force in India's transition towards a <em>circular economy</em> — where waste is not discarded, but converted into opportunity, value, and environmental impact.
          </blockquote>
        </div>
      </section>

      <section className="section section-cream">
        <span className="eyebrow">Our Mission</span>
        <h2 className="heading">Four commitments<br />that shape every engagement</h2>
        <p className="lead">Each one is operational, not aspirational — you'll see them in the work we do together.</p>
        <div className="about-mission-grid">
          {missionPoints.map((m, i) => (
            <div className="about-mission-card" key={m.title}>
              <div className="about-mission-num">0{i + 1}</div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-forest">
        <span className="eyebrow eyebrow-light">How We Operate</span>
        <h2 className="heading heading-light">Principles we hold<br />ourselves to</h2>
        <p className="lead lead-light">The operational standards behind every partnership we build.</p>
        <div className="about-principles">
          {principles.map(p => (
            <div className="about-principle" key={p.n}>
              <div className="about-principle-num">{p.n}</div>
              <div className="about-principle-body">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <span className="eyebrow eyebrow-light">Let's Work Together</span>
        <h2>Build something<br />measurable with us</h2>
        <p>Whether you're a recycler looking for reliable supply, an industry looking for compliant waste handling, or a stakeholder exploring carbon projects — let's talk.</p>
        <div className="cta-btns">
          <Link to="/contact" className="btn btn-white">Start a Conversation</Link>
          <Link to="/services/cnd-waste-management" className="btn btn-outline-light">Explore Services</Link>
        </div>
      </section>
    </>
  )
}
