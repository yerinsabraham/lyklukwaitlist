import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to join waitlist')
      }
      setStatus('success')
      setMessage('Thanks! You\'re on the list.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong')
    }
  }

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              Your Culture. Your Creativity. Your Capital.
            </h1>
            <p className={styles.heroSubheadline}>
              LykLuk gives African creators, entrepreneurs, and the diaspora the tools to share, sell, and succeed.
            </p>
            <div className={styles.heroCTAs}>
              <button className={styles.btnPrimary} onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}>
                Sign Up Today
              </button>
              <button className={styles.btnSecondary} onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={styles.mission}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Converting African Culture to Capital</h2>
          <p className={styles.missionText}>
            We connect creators, entrepreneurs, and the diaspora, empowering them to share and monetize African culture globally.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>The LykLuk Experience</h2>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>💜</div>
              <h3 className={styles.cardTitle}>For You, By You</h3>
              <p className={styles.cardDesc}>
                Personalized feed curated by creators across Africa and the diaspora.
              </p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>🌍</div>
              <h3 className={styles.cardTitle}>Endless Discovery</h3>
              <p className={styles.cardDesc}>
                Discover fashion, music, food, art, and stories that feel like home.
              </p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>🤝</div>
              <h3 className={styles.cardTitle}>Community-Driven</h3>
              <p className={styles.cardDesc}>
                Creators, entrepreneurs, and fans building culture together.
              </p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.cardIcon}>💰</div>
              <h3 className={styles.cardTitle}>Built for Earning</h3>
              <p className={styles.cardDesc}>
                Wallet, marketplace, and ad tools designed for creators to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Our Growing Impact</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5,000+</div>
              <div className={styles.statLabel}>Pre-registered Users</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>30,000+</div>
              <div className={styles.statLabel}>Videos Uploaded</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>Growing</div>
              <div className={styles.statLabel}>Community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={styles.culture}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Culture in Motion</h2>
          <p className={styles.cultureText}>
            Music. Fashion. Food. Art. Every day, creators are redefining what African culture means to the world.
          </p>
          <div className={styles.cultureVisual}>
            <div className={styles.cultureTag}>Music 🎵</div>
            <div className={styles.cultureTag}>Fashion 👗</div>
            <div className={styles.cultureTag}>Food 🍲</div>
            <div className={styles.cultureTag}>Art 🎨</div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className={styles.purpose}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Our Purpose</h2>
          <div className={styles.purposeGrid}>
            <div className={styles.purposeItem}>
              <span className={styles.purposeIcon}>⚡</span>
              <span className={styles.purposeText}>Empower creators</span>
            </div>
            <div className={styles.purposeItem}>
              <span className={styles.purposeIcon}>🌐</span>
              <span className={styles.purposeText}>Bridge the diaspora</span>
            </div>
            <div className={styles.purposeItem}>
              <span className={styles.purposeIcon}>📈</span>
              <span className={styles.purposeText}>Fuel economic growth</span>
            </div>
            <div className={styles.purposeItem}>
              <span className={styles.purposeIcon}>🛡️</span>
              <span className={styles.purposeText}>Champion safety and trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className={styles.joinUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Be part of the movement.</h2>
          <p className={styles.joinUsText}>Share. Shop. Connect. Earn.</p>
          <form className={styles.joinForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.joinInput}
            />
            <button type="submit" className={styles.btnPrimary} disabled={status === 'loading'}>
              Sign Up Today
            </button>
          </form>
          {status !== 'idle' && (
            <p className={`${styles.message} ${styles[status]}`}>
              {status === 'loading' ? 'Submitting…' : message}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
