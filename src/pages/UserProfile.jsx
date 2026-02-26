import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './UserProfile.module.css';

export default function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Set page metadata
    document.title = `@${username} on Lykluk`;
    
    // Try to open the app if installed (deep link)
    const timeout = setTimeout(() => {
      // If app didn't open after 2 seconds, user likely doesn't have it installed
      // Just stay on this page
    }, 2000);

    return () => clearTimeout(timeout);
  }, [username]);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/app/lykluk', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.lykluk.lykluk', '_blank');
  };

  // Remove @ symbol if present in username
  const displayUsername = username?.startsWith('@') ? username : `@${username}`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <img src="/assets/icons/app logo.png" alt="Lykluk" className={styles.logo} />
          <h1 className={styles.title}>{displayUsername}</h1>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profilePlaceholder}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
          <p className={styles.description}>
            Check out {displayUsername}'s profile on Lykluk
          </p>
        </div>

        <div className={styles.downloadSection}>
          <h2 className={styles.downloadTitle}>Download Lykluk</h2>
          <p className={styles.downloadText}>
            Get the app to view this profile, watch videos, and connect with creators from around the world.
          </p>
          
          <div className={styles.buttonGroup}>
            <button onClick={handleAppStoreClick} className={styles.storeButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
            
            <button onClick={handlePlayStoreClick} className={styles.storeButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>

        <button onClick={() => navigate('/')} className={styles.backButton}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
