import { Link } from "react-router-dom";
import styles from './Projects.module.css';

export default function HydroponicsDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Link to="/" className={styles.link}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Hydroponics Dashboard</h1>
      </div>
      <h3 className={styles.backlogged}>STATUS BACKLOGGED: you've stumbled across my plan for this project and this has not started yet!</h3>
      <p>A containerized dashboard app built with React frontend and Flask backend to monitor and control your hydroponics system.</p>

      <h2>🌿 Features</h2>
      <ul className={styles.customBulletList}>
        <li>Fully containerized for easy deployment</li>
        <li>Dashboard overview of system status</li>
        <li>Control page to manage sensors and pumps</li>
        <li>Data page displaying real-time sensor readings</li>
      </ul>

      <img
        className={styles.projectDemoGif}
        src="https://via.placeholder.com/600x300"
        alt="Hydroponics Dashboard Demo"
      />

      <h2>🗂 Rough Folder Structure</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          hydroponics-dashboard/
          ├── client/              # React frontend dashboard
          │   ├── Dockerfile
          │   ├── public/
          │   └── src/
          ├── server/              # Flask backend API for sensor data and control
          │   ├── Dockerfile
          │   ├── app/
          │   │   ├── __init__.py
          │   │   ├── routes.py
          │   │   ├── models.py (if needed)
          │   │   └── utils.py
          │   ├── requirements.txt
          │   └── .env
          ├── docker-compose.yml   # Orchestration for client and server containers
          └── README.md
        `}
      </pre>

      <h2>🔗 Frontend ↔ Backend Communication</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          GET /api/sensors/data
          Response:
          {
            "temperature": 22.5,
            "humidity": 60,
            "pH": 6.8,
            "waterLevel": "Full"
          }

          POST /api/pump/control
          Request Body:
          {
            "pumpId": "mainPump",
            "action": "start"  // or "stop"
          }

          Response:
          {
            "status": "success",
            "message": "Pump started"
          }
        `}
      </pre>

      <h2>🚀 Deployment Plan</h2>
      <ul className={styles.customBulletList}>
        <li>Docker Compose manages frontend and Flask backend containers</li>
        <li>Supports easy scaling and portability</li>
        <li>Deploy on cloud or local server</li>
      </ul>

      {/* <a
        href="https://github.com/your-repo-link"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLinkDemo}
      >
        View Source on GitHub
      </a> */}
    </div>
  );
}
