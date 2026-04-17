import SEO from '../components/SEO'

const services = [
  { title: 'ESG Strategy Support', body: 'Materiality assessment, peer benchmarking, and strategy frameworks tailored to Indian mid-market companies — not generic global templates.' },
  { title: 'Corporate Sustainability Consulting', body: 'Hands-on advisory across waste, water, energy, and Scope 3 emissions — with implementation partners, not just slide decks.' },
  { title: 'Net Zero Roadmap', body: 'Science-based target pathways, decarbonisation levers, and a realistic step-plan to hit interim and long-term goals.' },
  { title: 'Sustainability Reporting', body: 'BRSR, GRI and TCFD-aligned reporting — with the data systems underneath to keep it defensible, not just disclosable.' },
  { title: 'Carbon Accounting', body: 'Scope 1, 2, and 3 inventories using GHG Protocol methodology — baseline year setting, recalculation policies, and assurance-readiness.' },
  { title: 'Stakeholder & Investor Engagement', body: 'ESG narrative for investors, bankers, and rating agencies — CDP, DJSI, and S&P responses handled end-to-end.' },
]

export default function ESG() {
  return (
    <>
      <SEO
        title="ESG & Sustainability Advisory"
        path="/esg"
        description="ESG strategy, sustainability consulting, net-zero roadmaps, BRSR reporting, and carbon accounting for Indian mid-market companies — operational ESG, not window-dressing."
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">ESG & Sustainability</span>
          <h1>Operational ESG<br />not window-dressing</h1>
          <p>We help companies build ESG programmes that deliver compliance, investor readiness, and actual environmental outcomes — in that order.</p>
        </div>
      </section>

      <section className="section section-cream">
        <span className="eyebrow">Our Advisory Services</span>
        <h2 className="heading">What we help with</h2>
        <p className="lead">End-to-end ESG support — from first materiality assessment to assured public reporting.</p>
        <div className="esg-grid">
          {services.map((s, i) => (
            <div className="esg-card" key={s.title}>
              <div className="esg-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-forest">
        <div className="esg-cta">
          <div>
            <span className="eyebrow eyebrow-light">Where To Start</span>
            <h2 className="heading heading-light">A 2-week ESG<br />diagnostic</h2>
            <p className="lead lead-light">Most engagements start with a short diagnostic — we assess where you are today, where you need to be, and the shortest path between the two.</p>
          </div>
          <ul className="esg-diag">
            <li><strong>Week 1</strong><span>Data review, stakeholder interviews, regulatory gap assessment</span></li>
            <li><strong>Week 2</strong><span>Priority matrix, roadmap draft, commercial proposal</span></li>
            <li><strong>Output</strong><span>Written diagnostic report and 12-month roadmap</span></li>
          </ul>
        </div>
      </section>
    </>
  )
}
