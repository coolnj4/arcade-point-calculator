import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles['center-container']}>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>Welcome to the Arcade Points Calculator app...</p>
      </div>
    </div>
  );
}
