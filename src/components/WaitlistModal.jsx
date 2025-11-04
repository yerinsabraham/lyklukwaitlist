import React, { useEffect } from 'react'
import styles from './WaitlistModal.module.css'

export default function WaitlistModal({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onMouseDown={(e) => e.stopPropagation()} aria-live="polite">
        <header className={styles.header}>
          <div className={styles.brand}>
            <img src="/assets/icons/app%20logo.png" alt="Lykluk" />
            <strong>LYKLUK</strong>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className={styles.body}>
          <h2 className={styles.title}>You're on the waitlist 🎉</h2>
          <p className={styles.subtitle}>Thanks — we saved your spot. We'll email you when we launch.</p>

          <div className={styles.emojiRow} aria-hidden>
            <span>🎉</span>
            <span>🔥</span>
            <span>🌍</span>
            <span>💡</span>
            <span>🛍️</span>
            <span>🤝</span>
          </div>

          <p className={styles.small}>You are not alone — 2,500+ people are waiting with you.</p>
        </div>
      </div>
    </div>
  )
}
