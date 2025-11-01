import './App.css'

function App() {
  return (
    <div className="app-shell">
      {/* Top Nav */}
      <nav className="nav">
        <div className="container" style={{display:'flex',justifyContent:'space-between',width:'min(1200px,92%)'}}>
          <a className="brand" href="#home" aria-label="LykLuk Home">
            <img src={"/assets/icons/app%20logo.png"} alt="LykLuk Logo" />
            <span>Lykluk</span>
          </a>
          <div style={{display:'flex',gap:'12px'}}>
            <a className="btn ghost" href="#features">Features</a>
            <a className="btn primary" href="#waitlist">Join waitlist</a>
          </div>
        </div>
      </nav>
      <div className="spacer" />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Experience payments that feel effortless</h1>
          <p>
            We’re crafting a modern experience for creators and businesses. Join the waitlist to
            get early access when we launch.
          </p>
          <form id="waitlist" className="waitlist" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch.')}}>
            <label className="visually-hidden" htmlFor="email">Email address</label>
            <input id="email" required name="email" type="email" placeholder="Enter your email" />
            <button className="btn secondary" style={{background:'var(--color-secondary)',color:'#000',fontWeight:700}}>
              Join waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Placeholder sections to enable scrolling structure */}
      <section id="features">
        <div className="container">
          <h2 style={{color:'var(--color-primary)'}}>Built for speed and trust</h2>
          <p>We’ll add detailed sections based on your Figma next.</p>
        </div>
      </section>

      <footer>
        <div className="container">© {new Date().getFullYear()} Lykluk Digital</div>
      </footer>
    </div>
  )
}

export default App
