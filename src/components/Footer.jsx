import React, {useState} from 'react';
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
              <a href="#">About us</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleJoin}>
            <input type="email" placeholder="Enter your email..." value={email} onChange={e=>setEmail(e.target.value)} aria-label="Footer email" />
            <button type="submit" className={styles.btn}>Join waitlist</button>
          </form>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" dangerouslySetInnerHTML={{__html:`<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" width=\"20\" height=\"20\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" /><path d=\"M16 11.37A4 4 0 1112.63 8\" /></svg>`}} />
            <a href="#" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.33 6 7.66V24h-5v-7.2c0-1.72-.03-3.95-2.4-3.95-2.4 0-2.76 1.87-2.76 3.8V24h-5V8z"/></svg></a>
            <a href="#" aria-label="Twitter"> <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.5 4.5 0 00-4.5 4.5c0 .35.04.7.11 1.03A12.94 12.94 0 013 4.1a4.5 4.5 0 001.39 6A4.41 4.41 0 012.8 9.7v.06A4.5 4.5 0 004.5 14a4.52 4.52 0 01-2 .08 4.5 4.5 0 004.2 3.13A9 9 0 012 19.54 12.74 12.74 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.18 8.18 0 0023 3z"/></svg></a>
            <a href="mailto:hello@lykluk.com" aria-label="Email"> <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M2 4h20v16H2z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
