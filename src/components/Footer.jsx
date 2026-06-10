import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-grid">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/img/mark.webp" alt="" style={{ height: '24px', width: 'auto', opacity: 0.5 }} />
        <div>
          <small className="font-mondwest opacity-70" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>
            Ken
          </small>
          <small className="font-mondwest text-midground lowercase" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter', marginLeft: '0.5rem' }}>
            Portfolio
          </small>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" className="font-mondwest opacity-60 hover-opacity-70 transition-opacity" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>Home</Link>
        <Link to="/skills" className="font-mondwest opacity-60 hover-opacity-70 transition-opacity" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>Skills</Link>
        <Link to="/projects" className="font-mondwest opacity-60 hover-opacity-70 transition-opacity" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>Projects</Link>
      </div>
      <div className="hidden md-block" />
      <div>
        <a className="transition-opacity hover-opacity-70" href="https://worksken.vercel.app" rel="noopener noreferrer" target="_blank">
          <small className="font-mondwest opacity-70" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>
            worksken.vercel.app ↗
          </small>
        </a>
      </div>
      <div>
        <small className="font-mondwest text-midground" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem', mixBlendMode: 'plus-lighter' }}>
          MIT License · 2026
        </small>
      </div>
    </footer>
  )
}
