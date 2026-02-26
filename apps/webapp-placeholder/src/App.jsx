import './App.css'

function App() {
  return (
    <div className="app-shell">
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="/" aria-label="LykLuk Home">
          <img src="/assets/icons/app%20logo.png" alt="LykLuk Logo" />
          <span>LYKLUK</span>
        </a>
        <div className="nav-links">
          <a href="https://about.lykluk.com">About</a>
          <a href="https://about.lykluk.com/faq">FAQ</a>
          <a href="https://blog.lykluk.com">Blog</a>
        </div>
        <a className="nav-cta" href="https://apps.apple.com/ng/app/lykluk/id6444111490" target="_blank" rel="noopener noreferrer">
          Download App
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path d="M10 3a1 1 0 011 1v5.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 9.586V4a1 1 0 011-1z" />
            <path d="M3 14a1 1 0 011 1v1h12v-1a1 1 0 112 0v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z" />
          </svg>
        </a>
      </nav>

      {/* Hero: Download the App */}
      <main className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="app-icon-large">
            <img src="/assets/icons/app%20logo.png" alt="LykLuk App Icon" />
          </div>

          <h1>
            Get <span className="gradient-text">LykLuk</span>
          </h1>

          <p className="hero-sub">
            The short-form video platform where culture meets commerce. Create videos, 
            go live, shop trending products, and earn rewards — all in one app.
          </p>

          {/* Store Badges */}
          <div className="store-badges">
            <a
              className="store-badge"
              href="https://apps.apple.com/ng/app/lykluk/id6444111490"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="store-badge-text">
                <span className="store-badge-small">Download on the</span>
                <span className="store-badge-large">App Store</span>
              </div>
            </a>
            <a
              className="store-badge"
              href="https://play.google.com/store/apps/details?id=com.lykluk.lykluk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302-2.533-2.533L17.698 9.508zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <div className="store-badge-text">
                <span className="store-badge-small">Get it on</span>
                <span className="store-badge-large">Google Play</span>
              </div>
            </a>
          </div>

          {/* QR Code section for desktop */}
          <div className="qr-section">
            <div className="qr-divider">
              <span className="divider-line" />
              <span className="divider-text">or scan to download</span>
              <span className="divider-line" />
            </div>
            <div className="qr-placeholder">
              <div className="qr-code">
                {/* Simple QR-like visual pattern */}
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <rect width="100" height="100" rx="12" fill="white"/>
                  <rect x="8" y="8" width="28" height="28" rx="4" fill="#6A0DAD"/>
                  <rect x="12" y="12" width="20" height="20" rx="2" fill="white"/>
                  <rect x="16" y="16" width="12" height="12" rx="1" fill="#6A0DAD"/>
                  <rect x="64" y="8" width="28" height="28" rx="4" fill="#6A0DAD"/>
                  <rect x="68" y="12" width="20" height="20" rx="2" fill="white"/>
                  <rect x="72" y="16" width="12" height="12" rx="1" fill="#6A0DAD"/>
                  <rect x="8" y="64" width="28" height="28" rx="4" fill="#6A0DAD"/>
                  <rect x="12" y="68" width="20" height="20" rx="2" fill="white"/>
                  <rect x="16" y="72" width="12" height="12" rx="1" fill="#6A0DAD"/>
                  <rect x="40" y="8" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="52" y="8" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="40" y="20" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="40" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="52" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="40" y="52" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="52" y="52" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="64" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="76" y="52" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="84" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="64" y="64" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="76" y="64" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="84" y="76" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="64" y="84" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="76" y="84" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="84" y="84" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="8" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="20" y="40" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="8" y="52" width="8" height="8" rx="1" fill="#6A0DAD"/>
                  <rect x="28" y="52" width="8" height="8" rx="1" fill="#6A0DAD"/>
                </svg>
              </div>
              <p className="qr-label">Point your phone camera here</p>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-heading">Everything in one app</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon purple">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <h3>Short-Form Video</h3>
            <p>Record, edit, and share videos with advanced filters, effects, stickers, and music.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon amber">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
            <h3>Live Streaming</h3>
            <p>Go live, interact with fans in real-time, and sell products directly during your streams.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon orange">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h3>Shop & Discover</h3>
            <p>Browse trending products, discover new brands, and shop seamlessly from your feed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3>Earn Rewards</h3>
            <p>Earn coins through engagement, complete challenges, and unlock exclusive rewards.</p>
          </div>
        </div>
      </section>

      {/* Phone Mockup Section */}
      <section className="phone-section">
        <div className="phone-section-inner">
          <div className="phone-text">
            <h2>Your culture.<br /><span className="gradient-text">Your community.</span></h2>
            <p>
              LykLuk brings together video creation, social commerce, live streaming, 
              and rewards into one powerful platform. Whether you're a creator, shopper, 
              or entrepreneur — there's something for you.
            </p>
            <div className="store-badges-small">
              <a href="https://apps.apple.com/ng/app/lykluk/id6444111490" target="_blank" rel="noopener noreferrer" className="store-badge-mini">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.lykluk.lykluk" target="_blank" rel="noopener noreferrer" className="store-badge-mini">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302-2.533-2.533L17.698 9.508zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-status-bar">
                  <span>9:41</span>
                  <div className="phone-status-icons">
                    <div className="status-bar-signal" />
                    <div className="status-bar-wifi" />
                    <div className="status-bar-battery" />
                  </div>
                </div>
                <div className="phone-app-header">
                  <img src="/assets/icons/app%20logo.png" alt="" className="phone-logo" />
                  <span>LykLuk</span>
                </div>
                <div className="phone-feed">
                  <div className="phone-video-card">
                    <div className="phone-video-overlay">
                      <span className="phone-play-btn">&#9654;</span>
                    </div>
                    <div className="phone-video-info">
                      <div className="phone-avatar" />
                      <div className="phone-video-meta">
                        <div className="phone-line w70" />
                        <div className="phone-line w50" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone-tab-bar">
                  <div className="phone-tab active" />
                  <div className="phone-tab" />
                  <div className="phone-tab center-tab">+</div>
                  <div className="phone-tab" />
                  <div className="phone-tab" />
                </div>
              </div>
            </div>
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
          <p className="footer-copy">&copy; 2025 Lykluk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
