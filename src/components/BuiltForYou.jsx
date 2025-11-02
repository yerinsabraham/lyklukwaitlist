import React from 'react'
import styles from './BuiltForYou.module.css'

export default function BuiltForYou({ onCTAClick }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: collage */}
  <div className={`${styles.left} ${styles.orbit}`}>
          {/* Layered circles */}
          <div className={`${styles.circleBase} ${styles.circle1}`} />
          <div className={`${styles.circleBase} ${styles.circle2}`} />
          <div className={`${styles.circleBase} ${styles.circle3}`} />

          {/* Center image */}
          <img className={styles.mainImage} src="/assets/images/main-collage-img.png" alt="Culture collage" />

          {/* Decorative images */}
          <img className={`${styles.decor} ${styles.d1}`} src="/assets/images/decor-img-1.png" alt="Decor 1" />
          <img className={`${styles.decor} ${styles.d2}`} src="/assets/images/decor-img-2.png" alt="Decor 2" />
          <img className={`${styles.decor} ${styles.d3}`} src="/assets/images/decor-img-3.png" alt="Decor 3" />
          <img className={`${styles.decor} ${styles.d4}`} src="/assets/images/decor-img-4.png" alt="Decor 4" />
          <img className={`${styles.decor} ${styles.d5}`} src="/assets/images/decor-img-5.png" alt="Decor 5" />
          <img className={`${styles.decor} ${styles.d6}`} src="/assets/images/decor-img-6.png" alt="Decor 6" />
          <img className={`${styles.decor} ${styles.d7}`} src="/assets/images/decor-img-7.png" alt="Decor 7" />
        </div>

        {/* Right: text & CTA */}
        <div className={styles.right}>
          <div className={styles.badge}>
            <span role="img" aria-label="heart">💜</span>
            <span>Built for you</span>
          </div>
          <h2 className={styles.title}>Where African culture isn't an "aesthetic" but a home</h2>
          <p className={styles.subtitle}>
            Share your traditional recipes, your language, your music, your heritage. This isn't a platform where African content gets buried or your account gets shadowbanned for being "too cultural."
          </p>
          <button className={styles.cta} onClick={onCTAClick}>
            Get early access
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
