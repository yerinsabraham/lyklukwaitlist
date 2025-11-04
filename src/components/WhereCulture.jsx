import React, { useState } from 'react';
import styles from './WhereCulture.module.css';
import { useWaitlist } from '../contexts/WaitlistContext'

export default function WhereCulture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const { open: openWaitlist } = useWaitlist()

  async function handleJoin(e){
    e.preventDefault();
    if(!email) return;
    setStatus('loading')
    try{
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if(!res.ok) throw new Error('Failed')
      setStatus('success'); setEmail('')
      openWaitlist()
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section className={styles.whereSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <img src="/assets/images/7bgimage.png" alt="Culture meets commerce" />
          </div>
          <div className={styles.right}>
            <h3 className={styles.kicker}>Where culture meets commerce</h3>
            <p className={styles.lead}>
              Join thousands of entrepreneurs building businesses that celebrate heritage. Be the first to know when we launch.
            </p>

            <form className={styles.form} onSubmit={handleJoin}>
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={e=>setEmail(e.target.value)}
                aria-label="Email"
              />
              <button type="submit" className={styles.joinBtn} disabled={status==='loading'}>
                Join waitlist
                <svg viewBox="0 0 20 20" fill="currentColor" className={styles.arrow} aria-hidden>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
