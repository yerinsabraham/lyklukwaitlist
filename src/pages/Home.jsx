import { useState } from 'react'
import BuiltForYou from '../components/BuiltForYou'
import StayConnected from '../components/StayConnected'
import WhereCulture from '../components/WhereCulture'
import './Home.css'
import { useWaitlist } from '../contexts/WaitlistContext'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')
  const { open: openWaitlist } = useWaitlist()

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
        // show confirmation modal after success
        openWaitlist()
      } catch (err) {
        setStatus('error'); setMessage(err.message || 'Something went wrong')
      }
  }

  // Scroll to hero and focus the email input (smooth) — used by CTAs across the page
  function scrollToHeroAndFocus(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const input = document.getElementById('email');
    const hero = document.getElementById('home');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Wait a short time for the scroll to begin/complete before focusing.
    // Immediate focus sometimes works; we add a slightly delayed focus for reliability.
    setTimeout(() => {
      if (input) input.focus({ preventScroll: true });
    }, 350);
  }

  return (
    <div className="home-page">
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
            
            <form id="waitlist" className="waitlist-form" onSubmit={handleSubmit}>
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
            <img src="/assets/images/image1.png" alt="App preview on phone" loading="eager" fetchpriority="high" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-marquee">
          <div className="partners-track">
            <img src="/assets/images/partners/access.png" alt="Access Bank" />
            <img src="/assets/images/partners/byteplus.png" alt="BytePlus" />
            <img src="/assets/images/partners/googlecloud.png" alt="Google Cloud" />
            <img src="/assets/images/partners/gtbank.png" alt="GTBank" />
            <img src="/assets/images/partners/metpay.png" alt="MetPay" />
            <img src="/assets/images/partners/paystack.png" alt="Paystack" />
            <img src="/assets/images/partners/startbutton.png" alt="Start Button" />
            <img src="/assets/images/partners/sterling.png" alt="Sterling Bank" />
            {/* Duplicate for seamless loop */}
            <img src="/assets/images/partners/access.png" alt="Access Bank" />
            <img src="/assets/images/partners/byteplus.png" alt="BytePlus" />
            <img src="/assets/images/partners/googlecloud.png" alt="Google Cloud" />
            <img src="/assets/images/partners/gtbank.png" alt="GTBank" />
            <img src="/assets/images/partners/metpay.png" alt="MetPay" />
            <img src="/assets/images/partners/paystack.png" alt="Paystack" />
            <img src="/assets/images/partners/startbutton.png" alt="Start Button" />
            <img src="/assets/images/partners/sterling.png" alt="Sterling Bank" />
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid-section">
        <div className="container">
          <h2 className="features-heading">Your shop, your community, your culture—all in one app</h2>

          <div className="features-grid">
            {/* Left column (2 cards) */}
            <div className="features-col">
              <div className="feature-card card-purple">
                <div className="feature-icon" aria-hidden="true">
                  {/* Shopping bag icon */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12" opacity="0" />
                    <path d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z" />
                    <path d="M9 7V6a3 3 0 0 1 6 0v1" />
                  </svg>
                </div>
                <h3 className="feature-title">Sell your thing & earn</h3>
                <p className="feature-desc">Scale from your first sale to thousands. We handle payments, shipping, & technical complexity.</p>
              </div>

              <div className="feature-card card-amber">
                <div className="feature-icon" aria-hidden="true">
                  {/* Chat bubble icon */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  </svg>
                </div>
                <h3 className="feature-title">Chat like you mean it</h3>
                <p className="feature-desc">Connect with customers who share your culture. Build loyalty through authentic engagement.</p>
              </div>
            </div>

            {/* Center image */}
            <div className="features-image">
              <img src="/assets/images/3bgimage.png" alt="App features preview" />
            </div>

            {/* Right column (3 cards) */}
            <div className="features-col features-col--right">
              <div className="feature-card card-orange">
                <div className="feature-icon" aria-hidden="true">
                  {/* Camera icon */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <h3 className="feature-title">Show, don’t just tell</h3>
                <p className="feature-desc">Showcase your heritage through rich content, stories, & products that celebrate African culture.</p>
              </div>

              <div className="feature-card card-deeppurple">
                <div className="feature-icon" aria-hidden="true">
                  {/* Wallet icon */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h18v10H2z" />
                    <path d="M16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <h3 className="feature-title">P2P Wallet System</h3>
                <p className="feature-desc">Send and receive money instantly between users — fast, secure, and built for creators and communities.</p>
              </div>

              <div className="feature-card card-adsuite">
                <div className="feature-icon" aria-hidden="true">
                  {/* Edit / pencil icon for Creators Ad Suite */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="feature-title">Creators Ad Suite</h3>
                <p className="feature-desc">Promote your content and products with powerful in-app ad tools designed to help creators grow their reach and revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Shoppers Section */}
      <section className="reach-shoppers-section">
        <div className="container reach-shoppers-container">
          <div className="reach-shoppers-image">
            <img src="/assets/images/4bgimage.png" alt="Reach thousands of shoppers" />
          </div>
          <div className="reach-shoppers-content">
            <h2 className="reach-shoppers-heading">Reach Thousands of Shoppers</h2>
            <p className="reach-shoppers-desc">
              Promote your products on Lykluk and connect with customers actively looking to buy. 
              No account needed, just submit your ad & start selling.
            </p>
            <a href="#advertise" className="btn-advertise" onClick={scrollToHeroAndFocus}>
              Advertise Your Product
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="podcast-section">
        <div className="container podcast-container">
          <div className="podcast-content">
            <div className="podcast-badge">
              <span aria-hidden="true">🎙️</span>
              <span>Your Voice Matters</span>
            </div>
            <h2 className="podcast-heading">Start a podcast. Right here.</h2>
            <p className="podcast-desc">
              No separate hosting. No extra platform. Just record and publish where your community already hangs out…
            </p>
          </div>
          <div className="podcast-image">
            <div className="podcast-image-frame">
              <img src="/assets/images/5bgimage.png" alt="Start your podcast" />
            </div>
          </div>
        </div>
      </section>

      {/* Get Featured Section */}
      <section className="get-featured-section">
        <div className="container get-featured-container">
          <div className="get-featured-image">
            <img src="/assets/images/6bgimage.png" alt="Get featured on Lykluk" />
          </div>
          <div className="get-featured-content">
            <div className="get-featured-badge">
              <span aria-hidden="true">🔊</span>
              <span>Run Ads</span>
            </div>
            <h2 className="get-featured-heading">Get featured. Reach thousands</h2>
            <p className="get-featured-desc">
              Run ads on your products. Get featured on the home feed. Reach customers across Africa instantly.
            </p>
          </div>
        </div>
      </section>

  {/* Built For You Hero Section */}
  <BuiltForYou onCTAClick={scrollToHeroAndFocus} />

  <StayConnected />

  {/* New WhereCulture section placed above footer */}
  <WhereCulture />
    </div>
  )
}
