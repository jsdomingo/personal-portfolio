import styles from './Footer.module.css'

export default function Footer(){

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerText}>
                <p className={styles.footerKey}>Built by:</p>
                <p className={styles.footerValue}>Jesi Carey</p>
            </div>
            <div className={styles.footerText}>
                <p className={styles.footerKey}>Last updated:</p>
                <p className={styles.footerValue}>6 June 2025</p>
            </div>
        </div>
    )
}