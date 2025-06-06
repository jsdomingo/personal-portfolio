import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.home}>
        <Link to="/" className={styles.jesi}>Jesi</Link>
        <Link to="/" className={styles.carey}>Carey</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/work" className={styles.work}>Work</Link>
        <Link to="/info" className={styles.info}>Info</Link>
        <Link to="/connect" className={styles.connect}>Connect</Link>
      </div>
    </div>
  );
}