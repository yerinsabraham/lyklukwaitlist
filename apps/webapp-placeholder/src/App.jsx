import './App.css'

function App() {
  return (
    <div className="app-shell">
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="https://about.lykluk.com" aria-label="LykLuk Home">
          <img src="/assets/icons/app%20logo.png" alt="LykLuk Logo" />
          <span>LYKLUK</span>
        </a>
        <div className="nav-links">
          <a href="https://about.lykluk.com">About</a>
          <a href="https://about.lykluk.com/faq">FAQ</a>
          <a href="https://blog.lykluk.com">Blog</a>
        </div>
        <a className="nav-cta" href="https://about.lykluk.com/#waitlist">
          Join Waitlist
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>

      {/* Hero: Coming Soon */}
      <main className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot" />
            <span>Web App in Development</span>
          </div>

          <h1>
            The Lykluk<br />
            <span className="gradient-text">Web Experience</span><br />
            is coming soon.
          </h1>

          <p className="hero-sub">
            Everything you love about the app — your shop, your community, your culture — 
            is being built for the web. Stay tuned.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="https://about.lykluk.com">
              Visit About Page
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a className="btn-secondary" href="https://blog.lykluk.com">
              Read Our Blog
            </a>
          </div>
        </div>

        {/* Mock App Shell Preview */}
        <div className="app-preview">
          <div className="preview-window">
            <div className="preview-titlebar">
              <div className="preview-dots">
                <span /><span /><span />
              </div>
              <span className="preview-url">app.lykluk.com</span>
            </div>
            <div className="preview-body">
              {/* Sidebar mock */}
              <div className="preview-sidebar">
                <div className="sidebar-logo">
                  <img src="/assets/icons/app%20logo.png" alt="" />
                </div>
                <div className="sidebar-item active">
                  <div className="sidebar-icon" />
                  <div className="sidebar-label" />
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon" />
                  <div className="sidebar-label" />
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon" />
                  <div className="sidebar-label" />
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon" />
                  <div className="sidebar-label" />
                </div>
                <div className="sidebar-item">
                  <div className="sidebar-icon" />
                  <div className="sidebar-label" />
                </div>
              </div>

              {/* Main content mock */}
              <div className="preview-main">
                <div className="preview-topbar">
                  <div className="topbar-search" />
                  <div className="topbar-avatar" />
                </div>
                <div className="preview-cards">
                  <div className="preview-card shimmer">
                    <div className="card-img" />
                    <div className="card-line short" />
                    <div className="card-line" />
                  </div>
                  <div className="preview-card shimmer">
                    <div className="card-img" />
                    <div className="card-line short" />
                    <div className="card-line" />
                  </div>
                  <div className="preview-card shimmer">
                    <div className="card-img" />
                    <div className="card-line short" />
                    <div className="card-line" />
                  </div>
                </div>
                <div className="coming-soon-overlay">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section className="features-preview">
        <h2 className="section-heading">What you'll be able to do</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon purple">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z" />
                <path d="M9 7V6a3 3 0 0 1 6 0v1" />
              </svg>
            </div>
            <h3>Shop & Sell</h3>
            <p>Browse authentic African products or list your own. Full marketplace at your fingertips.</p>
            <span className="feature-status">Coming Soon</span>
          </div>
          <div className="feature-card">
            <div className="feature-icon amber">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
            </div>
            <h3>Connect & Chat</h3>
            <p>Direct messages, groups, and community spaces — no algorithm drama.</p>
            <span className="feature-status">Coming Soon</span>
          </div>
          <div className="feature-card">
            <div className="feature-icon orange">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <h3>Create & Share</h3>
            <p>Showcase your culture through rich video content, stories, and podcasts.</p>
            <span className="feature-status">Coming Soon</span>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h18v10H2z" />
                <path d="M16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h3>Earn & Grow</h3>
            <p>P2P wallet, ad suite, and creator monetization tools — all built in.</p>
            <span className="feature-status">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/assets/icons/app%20logo.png" alt="Lykluk" />
            <span>LYKLUK</span>
          </div>
          <div className="footer-links">
            <a href="https://about.lykluk.com">About</a>
            <a href="https://blog.lykluk.com">Blog</a>
            <a href="https://about.lykluk.com/faq">FAQ</a>
            <a href="https://about.lykluk.com/privacy">Privacy</a>
            <a href="https://about.lykluk.com/terms-of-use">Terms</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/lyklukdigital/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5zM18.5 6a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
            </a>
            <a href="https://x.com/lyklukdigital" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.3 5.71a1 1 0 10-1.41-1.41L12 9.17 7.11 4.29A1 1 0 105.7 5.7L10.59 10.6 5.7 15.49a1 1 0 101.41 1.41L12 12.99l4.89 4.91a1 1 0 001.41-1.41L13.41 11.6 18.3 6.71z"/></svg>
            </a>
            <a href="mailto:Info@lykluk.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.01L12 13 2 6.01V6zm0 3.99V18a2 2 0 002 2h16a2 2 0 002-2V9l-10 6L2 9z"/></svg>
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Lykluk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
