import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer(){
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleJoin(e){
    e.preventDefault();
    if(!email) return;
    setStatus('loading');
    try{
      const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type':'application/json'}, body: JSON.stringify({email}) });
      if(!res.ok) throw new Error('fail');
      setStatus('success'); setEmail('');
    }catch(err){ setStatus('error'); }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="/assets/icons/app%20logo.png" alt="Lykluk"/>
            <span className={styles.brandName}>Lykluk</span>
          </div>
          <div className={styles.links}>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy policy</a>
              <a href="#">Terms of use</a>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about">About us</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleJoin}>
            <input type="email" placeholder="Enter your email..." value={email} onChange={e=>setEmail(e.target.value)} aria-label="Footer email" />
            <button type="submit" className={styles.btn}>Join waitlist</button>
          </form>

          <div className={styles.socials}>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5zM18.5 6a1 1 0 11-1 1 1 1 0 011-1z" />
              </svg>
            </a>

            {/* LinkedIn (kept) */}
            <a href="#" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.33 6 7.66V24h-5v-7.2c0-1.72-.03-3.95-2.4-3.95-2.4 0-2.76 1.87-2.76 3.8V24h-5V8z"/></svg></a>

            {/* X (formerly Twitter) */}
            <a href="#" aria-label="X"> 
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3 5.71a1 1 0 10-1.41-1.41L12 9.17 7.11 4.29A1 1 0 105.7 5.7L10.59 10.6 5.7 15.49a1 1 0 101.41 1.41L12 12.99l4.89 4.91a1 1 0 001.41-1.41L13.41 11.6 18.3 6.71z" />
              </svg>
            </a>

            {/* Email (envelope) */}
            <a href="mailto:Info@lykluk.com" aria-label="Email"> 
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.01L12 13 2 6.01V6zm0 3.99V18a2 2 0 002 2h16a2 2 0 002-2V9l-10 6L2 9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
