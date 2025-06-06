'use client'

import { motion } from 'framer-motion'
import styles from './home.module.css'

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      {/* Top Section */}
      <div className={styles.topSentence}>
        <motion.p
          className={styles.star}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          ✦
        </motion.p>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          Engineer <br /> Based in Sydney
        </motion.p>
      </div>

      {/* Top Line */}
      <motion.hr
        className={styles.solid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />

      {/* Headline */}
      <div className={styles.headline}>
        {/* Outer container keeps position */}
        <div className={styles.topWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
            >
              <h1 className={styles.top}>Jesi</h1>
            </motion.div>
          </div>


        {/* Outer container keeps position */}
        <div className={styles.bottomGroup}>
          {/* Inner motion div slides and fades */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className={styles.bottom}>Carey</h1>
            <motion.p
              className={styles.blurb}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              Seeking roles in sustainability
              <br />
              or enhancing quality of life.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Line */}
      <motion.hr
        className={styles.bottomLine}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />
    </div>
  )
}


