import React from 'react';
import styles from './StayConnected.module.css';

const galleryImages = [
  '/assets/images/Row/1.png',
  '/assets/images/Row/2.png',
  '/assets/images/Row/3.png',
  '/assets/images/Row/4.png',
  '/assets/images/Row/5.png',
  '/assets/images/Row/6.png',
  '/assets/images/Row/7.png',
];

export default function StayConnected() {
  return (
    <section className={styles.stayConnectedSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textSide}>
          <span className={styles.badge}>
            <span role="img" aria-label="chat" className={styles.emoji}>💬</span>
            Stay Connected
          </span>
          <h2 className={styles.title}>Talk to Your People Without the Algorithm Drama</h2>
          <p className={styles.subtitle}>Direct Messages That Actually Feel Direct. No weird rules, just real conversations with people who care about you.</p>
          <button className={styles.cta}>
            Get Early Access 
            <svg className={styles.arrow} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryTrack}>
            {/* Triple the images for seamless loop without flashing */}
            {galleryImages.concat(galleryImages, galleryImages).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i+1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>
        </div>
      </div>
    </section>
  );
}
