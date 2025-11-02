import React from 'react';
import styles from './StayConnected.module.css';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow-right.svg'; // If you have an SVG arrow icon

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
            Get Early Access <ArrowIcon className={styles.arrow} />
          </button>
        </div>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryTrack}>
            {galleryImages.concat(galleryImages).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i+1}`}
                style={{ height: '70px', borderRadius: '12px', objectFit: 'cover' }}
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
