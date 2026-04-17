import SEO from '../components/SEO'

const projects = [
  {
    title: 'Mumbai Township — C&D Waste Programme',
    client: 'Tier-1 Developer',
    body: 'Handled 2,400 tonnes of construction & demolition waste over a 14-month build cycle — with zero RERA filing delays and 78% diversion from landfill via crushing and re-use.',
    stats: [{ k: '2,400T', v: 'C&D Waste Handled' }, { k: '78%', v: 'Landfill Diversion' }, { k: 'Zero', v: 'RERA Delays' }],
    before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
  },
  {
    title: 'Manufacturing Plant — Recurring Scrap Cycle',
    client: 'Metal Fabrication Unit',
    body: 'Set up weekly scrap-collection cycles with transparent weighbridge invoicing. Client captured 22% higher realised value vs prior middleman-based arrangement over the first year.',
    stats: [{ k: '520T', v: 'Scrap / Year' }, { k: '+22%', v: 'Realised Value' }, { k: '48 cycles', v: 'Pickups Completed' }],
    before: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
  },
  {
    title: 'Biochar Carbon Project — Western Maharashtra',
    client: 'Farmer Producer Organisation',
    body: 'Developed a biochar carbon-removal project from agri residues, producing 320 tonnes of biochar in the first phase and generating verified removal credits under the Puro.earth methodology.',
    stats: [{ k: '320T', v: 'Biochar Produced' }, { k: '800+', v: 'Credits Generated' }, { k: 'Puro', v: 'Certified' }],
    before: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
  },
]

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects & Case Studies"
        path="/projects"
        description="Selected projects from Green Shrushti — C&D waste programmes, scrap cycles, and biochar carbon-removal projects with verified outcomes and real numbers."
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Projects & Case Studies</span>
          <h1>Operations, not<br />marketing copy</h1>
          <p>Selected projects from across waste management and carbon credit work — real numbers, real outcomes, real documentation.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="proj-list">
          {projects.map((p, i) => (
            <div className="proj-row" key={p.title}>
              <div className="proj-head">
                <span className="proj-tag">{p.client}</span>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
              <div className="proj-stats">
                {p.stats.map(s => (
                  <div className="proj-stat" key={s.v}>
                    <div className="proj-stat-k">{s.k}</div>
                    <div className="proj-stat-v">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="proj-compare">
                <div className="proj-compare-item">
                  <span className="proj-compare-label">Before</span>
                  <img src={p.before} alt="Before" />
                </div>
                <div className="proj-compare-item">
                  <span className="proj-compare-label">After</span>
                  <img src={p.after} alt="After" />
                </div>
              </div>
              {i < projects.length - 1 && <hr className="proj-divider" />}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
