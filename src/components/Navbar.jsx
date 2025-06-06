import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.home}>
        <a href="/#home" className={styles.jesi}>Jesi</a>
        <a href="/#home" className={styles.carey}>Carey</a>
      </div>
      <div className={styles.navLinks}>
        <a href="/#work" className={styles.work}>Work</a>
        <a href="/#info" className={styles.info}>Info</a>
        <a href="/#connect" className={styles.connect}>Connect</a>
      </div>
    </div>
  );
}