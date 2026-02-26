import './Footer.css'

export default function Footer() {
  return (
    <footer className="blog-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/icons/app%20logo.png" alt="Lykluk" />
            <span>LYKLUK</span>
          </div>
          <p className="footer-tagline">Where culture meets commerce.</p>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Platform</h4>
            <a href="https://lykluk.com">Web App</a>
            <a href="https://about.lykluk.com">About</a>
            <a href="https://about.lykluk.com/faq">FAQ</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="https://about.lykluk.com/privacy">Privacy Policy</a>
            <a href="https://about.lykluk.com/terms-of-use">Terms of Use</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="https://www.instagram.com/lyklukdigital/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/lyklukdigital" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.facebook.com/share/1BXnKnac4W/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="mailto:Info@lykluk.com">Email Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Lykluk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
