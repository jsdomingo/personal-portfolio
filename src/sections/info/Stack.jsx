import styles from './Stack.module.css';
import cad from './logo/fusion.png';
import eda from './logo/easyeda.png'
import docker from './logo/docker.jpg'
import postgresql from './logo/postgresql.png'
import python from './logo/python.png'
import javascript from './logo/javascript.png'


export default function Stack() {
    const stackItems = [
        { tool: 'Fusion 360', label: '3D CAD', logo: cad },
        { tool: 'EasyEDA', label: 'PCB Design', logo: eda },
        { tool: 'Python', label: 'Automation', logo: python },
        { tool: 'Javascript', label: 'Web Development', logo: javascript},
        { tool: 'PostgreSQL', label: 'Database', logo: postgresql},
        { tool: 'Docker', label: 'Containerization', logo: docker },
    ];

    return (
        <div className={styles.stackGrid}>
            {stackItems.map((item, index) => (
                <div key={index} className={styles.stackCard}>
                    <img src={item.logo} alt={item.tool} className={styles.logo} />
                    <div className={styles.textBlock}>
                        <div className={styles.tool}>{item.tool}</div>
                        <div className={styles.label}>{item.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}