import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.home}>
        <Link to="/" onClick={() => scrollToSection('home')} className={styles.jesi}>Jesi</Link>
        <Link to="/" onClick={() => scrollToSection('home')} className={styles.carey}>Carey</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" onClick={() => scrollToSection('work')} className={styles.work}>Work</Link>
        <Link to="/" onClick={() => scrollToSection('info')} className={styles.info}>Info</Link>
        <Link to="/" onClick={() => scrollToSection('connect')} className={styles.connect}>Connect</Link>
      </div>
    </div>
  );
}