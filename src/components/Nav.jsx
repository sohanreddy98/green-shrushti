import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { serviceCategories } from '../data/services'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const dropRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setMobileOpen(false)
    setMobileSubOpen(false)
  }, [pathname])

  useEffect(() => {
    const onDown = e => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeAll = () => { setOpen(false); setMobileOpen(false); setMobileSubOpen(false) }

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={closeAll}>
        <img src="/logo.jpeg" alt="Green Shrushti" className="nav-logo-img" />
        <span className="nav-logo-text">Green Shrushti</span>
      </Link>

      <button
        className={`nav-hamburger ${mobileOpen ? 'nav-hamburger-open' : ''}`}
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${mobileOpen ? 'nav-links-mobile-open' : ''}`}>
        <li><NavLink to="/" end onClick={closeAll}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeAll}>About</NavLink></li>

        <li
          ref={dropRef}
          className={`nav-drop ${open ? 'nav-drop-open' : ''} ${mobileSubOpen ? 'nav-drop-mobile-open' : ''}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            className="nav-drop-trigger"
            type="button"
            onClick={() => { setOpen(v => !v); setMobileSubOpen(v => !v) }}
            aria-expanded={open || mobileSubOpen}
          >
            Services
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="nav-mega">
            <div className="nav-mega-inner">
              {serviceCategories.map(cat => (
                <div className="nav-mega-col" key={cat.slug}>
                  <h5>{cat.title}</h5>
                  <p>{cat.blurb}</p>
                  <ul>
                    {cat.services.map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} onClick={closeAll}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>

        <li><NavLink to="/industries" onClick={closeAll}>Industries</NavLink></li>
        <li><NavLink to="/projects" onClick={closeAll}>Projects</NavLink></li>
        <li><NavLink to="/esg" onClick={closeAll}>ESG</NavLink></li>
        <li><NavLink to="/contact" onClick={closeAll}>Contact</NavLink></li>
        <li className="nav-mobile-cta-wrap">
          <Link to="/contact" className="nav-btn nav-mobile-cta" onClick={closeAll}>Get a Quote</Link>
        </li>
      </ul>

      <Link to="/contact" className="nav-btn nav-btn-desktop">Get a Quote</Link>
    </nav>
  )
}
