import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('loading'); setMessage('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) {
        const data = await res.json().catch(()=>({}))
        throw new Error(data?.error || 'Failed to join waitlist')
      }
      setStatus('success'); setMessage('Thanks! You\'re on the list.')
      setEmail('')
    } catch (err) {
      setStatus('error'); setMessage(err.message || 'Something went wrong')
    }
  }
  return (
    <div className="app-shell">
      {/* Top Nav */}
      <nav className="nav">
        <a className="brand" href="#home" aria-label="LykLuk Home">
          <img src={"/assets/icons/app%20logo.png"} alt="LykLuk Logo" />
          <span>LYKLUK</span>
        </a>
        
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>

        <a className="nav-cta" href="#waitlist">
          Join Waitlist
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
      <div className="spacer" />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>⭐</span>
              <span>2,947 people are waiting</span>
            </div>
            
            <h1>
              Own your culture.<br />
              Grow your business.
            </h1>
            
            <p className="hero-subtext">
              The all-in-one platform connecting African entrepreneurs with their community. 
              Shop, share, and celebrate culture—launching soon.
            </p>
            
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="email">Email address</label>
              <input 
                id="email" 
                required 
                name="email" 
                type="email" 
                placeholder="Enter your email..." 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
              />
              <button className="btn-submit" type="submit" disabled={status==='loading'}>
                Join waitlist
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
            
            {status !== 'idle' && (
              <p className={`waitlist-message ${status}`}>
                {status==='loading' ? 'Submitting…' : message}
              </p>
            )}
          </div>

          <div className="hero-image">
            <img src="/assets/images/image1.png" alt="App preview on phone" />
          </div>
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
