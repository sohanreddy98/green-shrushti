import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import Industries from './pages/Industries'
import Projects from './pages/Projects'
import ESG from './pages/ESG'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="Green Shrushti" className="footer-logo" />
            <p>Bridging waste generators and recyclers across Mumbai and Maharashtra. Compliance-driven, scalable, and long-term focused.</p>
            <span className="footer-slogan">"Focused on compliance, consistency, and long-term partnerships."</span>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link to="/services/cnd-waste-management">Waste Management</Link>
            <Link to="/services/biochar-production">Sustainable Solutions</Link>
            <Link to="/services/carbon-project-development">Carbon Credits</Link>
            <Link to="/esg">ESG Advisory</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/esg">ESG</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <span>Mumbai, Maharashtra</span>
            <a href="tel:+918482841702">+91 8482 841702</a>
            <a href="mailto:support@greenshrushti.in">support@greenshrushti.in</a>
            <a href="https://wa.me/918482841702">WhatsApp Us</a>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-bottom">
          <p>© 2026 Green Shrushti. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  )
}
