import styles from './Competencies.module.css';


export default function Competencies(){
    const skills = ['Embroidery', 'System Testing & Validation', 'Adaptability', '3D CAD', 
        'Gardening', 'Rapid Prototyping', 'Communication', 'Problem Solving', 'Git',
        'Cross-Functional Team Collaboration', 'Baking'];
    
    
    return (
        <div className={styles.grid}>
            {skills.map((skill, index) => (
                <div key={index} className={styles.card}>
                    {skill}
                </div>
            ))}
        </div>
    )
}