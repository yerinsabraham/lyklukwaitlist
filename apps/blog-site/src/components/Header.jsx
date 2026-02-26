import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="blog-header">
      <div className="header-inner">
        <Link className="header-brand" to="/">
          <img src="/assets/icons/app%20logo.png" alt="Lykluk Logo" />
          <span className="header-brand-text">LYKLUK</span>
          <span className="header-divider" />
          <span className="header-blog-label">Blog</span>
        </Link>

        <nav className="header-nav">
          <a href="https://about.lykluk.com">About</a>
          <a href="https://lykluk.com">Web App</a>
          <a href="https://about.lykluk.com/faq">FAQ</a>
        </nav>

        <a className="header-cta" href="https://about.lykluk.com/#waitlist">
          Join Waitlist
        </a>

        <button
          className="header-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="header-mobile-menu">
          <a href="https://about.lykluk.com" onClick={() => setMenuOpen(false)}>About</a>
          <a href="https://lykluk.com" onClick={() => setMenuOpen(false)}>Web App</a>
          <a href="https://about.lykluk.com/faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="mobile-cta" href="https://about.lykluk.com/#waitlist" onClick={() => setMenuOpen(false)}>Join Waitlist</a>
        </div>
      )}
    </header>
  )
}
