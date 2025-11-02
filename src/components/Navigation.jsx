import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false)
  const menuBtnRef = useRef(null)
  const menuRef = useRef(null)
  const closeTimeoutRef = useRef(null)
  const navigate = useNavigate()

  function closeMenu() {
    setMobileMenuClosing(true)
    closeTimeoutRef.current = setTimeout(() => {
      setMobileMenuOpen(false)
      setMobileMenuClosing(false)
    }, 200)
  }

  useEffect(() => {
    if (!mobileMenuOpen) return
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 768px)')
    if (!mq.matches) return

    function handleOutside(e) {
      const target = e.target
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <Link className={styles.brand} to="/" aria-label="LykLuk Home">
        <img src="/assets/icons/app%20logo.png" alt="LykLuk Logo" />
        <span>LYKLUK</span>
      </Link>

      <div className={styles.navLinks}>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <button
        ref={menuBtnRef}
        className={styles.mobileMenuBtn}
        onClick={() => {
          if (mobileMenuOpen) {
            closeMenu()
          } else {
            setMobileMenuOpen(true)
          }
        }}
        aria-label="Menu"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {(mobileMenuOpen || mobileMenuClosing) && (
        <>
          <div
            className={`${styles.mobileMenuOverlay} ${mobileMenuClosing ? styles.closing : ''}`}
            onClick={closeMenu}
          />
          <div ref={menuRef} className={`${styles.mobileMenuDropdown} ${mobileMenuClosing ? styles.closing : ''}`}>
            <Link
              to="/about"
              onClick={() => {
                closeMenu()
              }}
            >
              About
            </Link>
            <Link
              to="/faq"
              onClick={() => {
                closeMenu()
              }}
            >
              FAQ
            </Link>
            <button
              className={styles.dropdownCta}
              onClick={() => {
                closeMenu()
                navigate('/')
                setTimeout(() => {
                  const input = document.getElementById('email')
                  const hero = document.getElementById('home')
                  if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  setTimeout(() => {
                    if (input) input.focus({ preventScroll: true })
                  }, 350)
                }, 100)
              }}
            >
              Join Waitlist
            </button>
          </div>
        </>
      )}

      <button
        className={styles.navCta}
        onClick={() => {
          navigate('/')
          setTimeout(() => {
            const input = document.getElementById('email')
            const hero = document.getElementById('home')
            if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setTimeout(() => {
              if (input) input.focus({ preventScroll: true })
            }, 350)
          }, 100)
        }}
      >
        Join Waitlist
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  )
}
