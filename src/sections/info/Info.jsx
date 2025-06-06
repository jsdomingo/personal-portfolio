'use client'

import { motion } from 'framer-motion'
import styles from './Info.module.css'
import Experience from './Experience'
import Competencies from './Competencies'
import Stack from './Stack'

export default function Info() {
  return (
    <motion.div
      id="info"
      className={styles.info}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.about}>
        <div className={styles.left}>
          <h2 className={styles.title}>Info</h2>
          <div className={styles.aboutMe}>
            <p>
              I’m an engineer who loves building and creating things. 
              I’m passionate about embedded tech and enjoy designing, prototyping, and automating solutions that really make a difference.
            </p>
            <p>
              Lately, I’ve been diving into web development as my latest challenge. 
              I’m especially motivated by work in cell agriculture, sustainability, and improving quality of life.
              Off duty, I’m usually baking sweets, brewing or fermenting something, or spending time gardening.
            </p>
          </div>
          <a href="/JesiCarey_CV2025_4.pdf" download className={styles.btn}>Download Resume</a>
        </div>
        <img src="/Jesi_notion.png" alt="Jesi Carey" className={styles.image} />
      </div>

      <motion.div
        className={styles.experience}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h2 className={`{styles.title} ${styles.experienceTitle}`}>Experience</h2>
          <div className={styles.experienceBox}>
            <Experience />
          </div>
      </motion.div>

      <motion.div
        className={styles.competencies}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <h2 className={styles.title}>Competencies</h2>
        <Competencies />
      </motion.div>

      <motion.div
        className={styles.stack}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        <h2 className={styles.title}>Stack</h2>
        <Stack />
      </motion.div>
    </motion.div>
  )
}
