import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <div className="header-grid">
        <NavLink to="/" className="flex items-center gap-3" style={{ borderRight: '1px solid color-mix(in oklab, currentColor 20%, transparent)', minWidth: 0, padding: 'calc(var(--spacing) * 4)', display: 'flex', alignItems: 'center' }}>
          <img src="/img/mark.webp" alt="" style={{ height: '28px', width: 'auto', opacity: 0.7 }} />
          <h2
            className="font-sans font-bold"
            style={{ fontSize: '1.5rem', lineHeight: 1, letterSpacing: '0.0525rem', mixBlendMode: 'plus-lighter' }}
          >
            Ken
          </h2>
        </NavLink>
        {navLinks.slice(1).map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            className={({ isActive }) => `nav-link ${isActive ? 'text-midground' : ''}`}
          >
            <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>
              {link.label}
            </small>
            <span className="hover-bg" />
          </NavLink>
        ))}
        <Link to="/socials" className="social-text">
          <small className="font-mondwest" style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }}>
            Socials
          </small>
        </Link>
      </div>

      <div className="header-mobile">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/img/mark.webp" alt="" style={{ height: '24px', width: 'auto', opacity: 0.7 }} />
          <h2 className="font-sans font-bold" style={{ fontSize: '1.25rem', lineHeight: 1, letterSpacing: '0.05rem', mixBlendMode: 'plus-lighter' }}>
            Ken
          </h2>
        </NavLink>
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" className="relative z-50 cursor-pointer bg-transparent p-2" type="button" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24">
              <line style={{ transform: mobileOpen ? 'rotate(45deg)' : 'translateY(-4px)', transformOrigin: 'center', transition: 'transform 0.2s ease-out' }} x1="4" x2="20" y1="12" y2="12" />
              <line style={{ opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s ease-out' }} x1="4" x2="20" y1="12" y2="12" />
              <line style={{ transform: mobileOpen ? 'rotate(-45deg)' : 'translateY(4px)', transformOrigin: 'center', transition: 'transform 0.2s ease-out' }} x1="4" x2="20" y1="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ border: '1px solid color-mix(in oklab, currentColor 20%, transparent)', borderTop: 0, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.path} className={({ isActive }) => `font-mondwest ${isActive ? 'text-midground' : 'opacity-60'}`} style={{ fontSize: '0.9375rem', letterSpacing: '0.1875rem' }} onClick={() => setMobileOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
