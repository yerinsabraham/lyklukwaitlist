import Navigation from './Navigation'
import Footer from './Footer'
import styles from './Layout.module.css'
import { WaitlistProvider } from '../contexts/WaitlistContext'

export default function Layout({ children }) {
  return (
    <WaitlistProvider>
      <div className={styles.layout}>
        <Navigation />
        <div className={styles.spacer} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </WaitlistProvider>
  )
}
