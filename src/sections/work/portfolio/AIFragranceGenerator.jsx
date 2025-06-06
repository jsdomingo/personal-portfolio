import { Link } from "react-router-dom";
import styles from './Projects.module.css';
import Fragrance from './fragrance.png'

export default function AIFragrance() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Link to="/" className={styles.link}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Fragrance Astrology App</h1>
      </div>
      <h3 className={styles.backlogged}>STATUS BACKLOGGED: you've stumbled across my plan for this project and this has not started yet!</h3>
      <div className={styles.pageWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.overview}>
            <h2>Overview</h2>
            <p>
              Build a fullstack web application that generates a personalised fragrance suggestion based on the user's daily horoscope. The app will consist of:
            </p>
            <ul className={styles.customBulletList}>
              <li>Frontend: React</li>
              <li>Backend: FastAPI</li>
              <li>Database: PostgreSQL</li>
              <li>Reverse Proxy: Nginx</li>
              <li>Containerization: Docker & Docker Compose</li>
            </ul>
          </div>

          <div className={styles.features}>
            <h2>✨ Features</h2>
            <ul className={styles.customBulletList}>
              <li>User selects zodiac sign to receive a custom fragrance</li>
              <li>Horoscope fetched from an astrology API</li>
              <li>Keywords mapped to scent families (e.g. calming → lavender)</li>
              <li>Fragrance profile returned: top, heart, and base notes</li>
            </ul>
          </div>

          <div className={styles.imageContent}>
            <img src={Fragrance} alt="Fragrance Placeholder" />
          </div>
        </div>
      </div>

      <div className={styles.fragranceDetails} >
      <h2>📦 Folder Structure</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          fragrance-astrology/
          ├── client/                 # React frontend
          │   ├── Dockerfile
          │   ├── public/
          │   └── src/
          ├── server/                 # FastAPI backend
          │   ├── Dockerfile
          │   ├── app/
          │   │   ├── __init__.py
          │   │   ├── main.py         # FastAPI entry point
          │   │   ├── models.py       # SQLAlchemy models
          │   │   ├── routes.py       # API routes
          │   │   ├── services.py     # Business logic (e.g. horoscope -> fragrance)
          │   │   └── database.py     # DB connection
          │   ├── requirements.txt
          │   └── .env
          ├── nginx/                 # Nginx config
          │   └── default.conf
          ├── docker-compose.yml     # Orchestration file
          └── README.md

        `}
      </pre>

      <h2>🔗 Frontend ↔ Backend Communication</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          POST /api/fragrance
          {
            zodiacSign: 'aries'
          }

          Response:
          {
            "sign": "aries",
            "mood": "energetic",
            "fragrance": {
              "top": "bergamot",
              "heart": "jasmine",
              "base": "cedarwood"
            }
          }
        `}
      </pre>

      <h2>🚀 Deployment Plan</h2>
      <ul className={styles.customBulletList}>
        <li>Nginx serves frontend and proxies API requests to FastAPI</li>
        <li>Docker Compose orchestrates React, FastAPI, PostgreSQL, and Nginx</li>
      </ul>

      <h2>🛠 Environment Variables</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          DATABASE_URL=postgresql://user:password@db:5432/fragrance_app
          ASTROLOGY_API_KEY=your_api_key_here
        `}
      </pre>

      <h2>💡 Optional Enhancements</h2>
      <ul className={styles.customBulletList}>
        <li>User authentication and scent history</li>
        <li>Social media sharing</li>
        <li>AI-generated fragrance descriptions</li>
        <li>Admin panel for managing scent mappings</li>
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
    </div>
  );
}
