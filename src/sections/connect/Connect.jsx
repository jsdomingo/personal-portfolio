import styles from './Connect.module.css';
import image from './switzerland.png';
import { Mail, GitHub, Linkedin } from 'react-feather';
import { motion } from 'framer-motion';

export default function Connect() {
  return (
    <motion.div
      className={styles.stack}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      <div id="connect" className={styles.container}>
        <img className={styles.img} src={image} alt="Switzerland" />
        <div className={styles.content}>
          <h2>Let's Connect</h2>
          <div className={styles.details}>
            <div className={styles.text}>
              <Mail size={14} />
              <a href="mailto:dummy@dummy.com" className={styles.value}>Email Me!</a>
            </div>
            <div className={styles.text}>
              <GitHub size={14} />
              <a href="https://github.com/yourusername" className={styles.value} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className={styles.text}>
              <Linkedin size={14} />
              <a href="https://via.placeholder.com/150" className={styles.value} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
