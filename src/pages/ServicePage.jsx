import { useParams, Link, Navigate } from 'react-router-dom'
import { getService, serviceCategories } from '../data/services'
import SEO from '../components/SEO'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/" replace />

  const related = serviceCategories
    .find(c => c.slug === service.categorySlug)
    .services.filter(s => s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      <SEO
        title={service.title}
        path={`/services/${service.slug}`}
        description={service.tagline}
        image={service.image}
      />
      <section
        className="sp-hero"
        style={{ backgroundImage: `linear-gradient(105deg,rgba(10,24,15,0.86) 30%,rgba(10,24,15,0.55) 100%),url('${service.image}')` }}
      >
        <div className="sp-hero-inner">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span className="sp-breadcrumb-cat">{service.category}</span>
          </div>
          <h1>{service.title}</h1>
          <p className="sp-tagline">{service.tagline}</p>
          <div className="sp-hero-btns">
            <a href="/#contact" className="btn btn-green">Get a Quote</a>
            <Link to="/" className="btn btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>

      <section className="sp-body">
        <div className="sp-body-inner">
          <div className="sp-body-left">
            <span className="eyebrow">About This Service</span>
            <h2 className="heading">What we do<br />& how we do it</h2>
            <p className="sp-long">{service.body}</p>
          </div>
          <div className="sp-body-right">
            <h3 className="sp-offer-title">What's included</h3>
            <ul className="sp-offer-list">
              {service.offerings.map((o, i) => (
                <li key={o}>
                  <span className="sp-offer-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sp-related">
          <div className="sp-related-inner">
            <span className="eyebrow">Related Services</span>
            <h2 className="heading">More in {service.category}</h2>
            <div className="sp-related-grid">
              {related.map(r => (
                <Link to={`/services/${r.slug}`} className="sp-related-card" key={r.slug}>
                  <h4>{r.title}</h4>
                  <p>{r.tagline}</p>
                  <span className="sp-related-arrow">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section">
        <span className="eyebrow eyebrow-light">Let's Work Together</span>
        <h2>Ready to discuss<br />{service.title.toLowerCase()}?</h2>
        <p>Talk to our team about volumes, timelines, and commercial terms — we'll come back to you within 24 hours.</p>
        <div className="cta-btns">
          <a href="mailto:support@greenshrushti.in" className="btn btn-white">Email Us</a>
          <a href="https://wa.me/918482841702" className="btn btn-outline-light">WhatsApp</a>
        </div>
      </section>
    </>
  )
}
