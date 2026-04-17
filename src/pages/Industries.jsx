import { Link } from 'react-router-dom'

const industries = [
  { slug: 'construction',   title: 'Construction Companies', body: 'C&D waste handling, RERA-compliant disposal documentation, and on-site segregation support for construction firms across Mumbai and Maharashtra.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1100&q=80' },
  { slug: 'manufacturing',  title: 'Manufacturing Units',    body: 'Industrial waste management, scrap recovery, and EPR compliance support for factories and processing units — recurring pickup cycles matched to production.', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1100&q=80' },
  { slug: 'municipal',      title: 'Municipal Corporations', body: 'MSW collection systems, composting programmes, and operator training for municipalities and bulk generators — systems that run reliably in the long term.', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1100&q=80' },
  { slug: 'agriculture',    title: 'Agriculture Sector',     body: 'Agri residue collection for biochar production, biochar supply back to farms, and carbon-credit generation pathways for farmer producer organisations.', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1100&q=80' },
  { slug: 'real-estate',    title: 'Real Estate Developers', body: 'C&D waste at project scale, RERA documentation, and sustainability reporting for gated communities and township developments.', img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1100&q=80' },
]

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Industries We Serve</span>
          <h1>Sector expertise<br />that shapes every engagement</h1>
          <p>We understand how your sector operates — not just the waste it generates. Here's how we work across the industries we serve.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="ind-list">
          {industries.map((ind, i) => (
            <div className={`ind-list-row ${i % 2 ? 'ind-list-row-alt' : ''}`} key={ind.slug}>
              <div className="ind-list-img"><img src={ind.img} alt={ind.title} /></div>
              <div className="ind-list-body">
                <span className="ind-list-num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{ind.title}</h2>
                <p>{ind.body}</p>
                <Link to="/#contact" className="ind-list-link">Get in touch →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
