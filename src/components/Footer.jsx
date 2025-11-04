import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useWaitlist } from '../contexts/WaitlistContext'

export default function Footer(){
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const { open: openWaitlist } = useWaitlist()

  async function handleJoin(e){
    e.preventDefault();
    if(!email) return;
    setStatus('loading')
    try{
      const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type':'application/json'}, body: JSON.stringify({email}) });
      if(!res.ok) throw new Error('fail');
      setStatus('success'); setEmail('');
      openWaitlist()
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
            <a href="https://www.instagram.com/lyklukdigital/profilecard/?igsh=MWt1YTVzcHR5bGpnMA==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5zM18.5 6a1 1 0 11-1 1 1 1 0 011-1z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a href="https://x.com/lyklukdigital?s=21" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"> 
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3 5.71a1 1 0 10-1.41-1.41L12 9.17 7.11 4.29A1 1 0 105.7 5.7L10.59 10.6 5.7 15.49a1 1 0 101.41 1.41L12 12.99l4.89 4.91a1 1 0 001.41-1.41L13.41 11.6 18.3 6.71z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/share/1BXnKnac4W/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.6c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.07c-1.06 0-1.39.66-1.39 1.34V12h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z"/></svg>
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
