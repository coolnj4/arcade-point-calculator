import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles['center-container']}>
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us at support@arcadepoints.com.</p>
      </div>
    </div>
  );
}
