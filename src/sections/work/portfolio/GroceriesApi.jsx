import { Link } from "react-router-dom";
import styles from './Projects.module.css';
import Forkast from './Forkast.gif';

export default function GroceriesAPI() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Link to="/" className={styles.link}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Groceries API</h1>
      </div>
      <h3 className={styles.backlogged}>STATUS BACKLOGGED: you've stumbled across my plan for this project and this has not started yet!</h3>
      <p>A smart grocery app that helps you estimate costs for recipes by adding ingredients to your cart.</p>

      <h2>🍲 Features</h2>
      <ul className={styles.customBulletList}>
        <li>Includes 5 curated recipes</li>
        <li>Add recipe ingredients directly to your shopping cart</li>
        <li>Displays a detailed table with ingredient price, quantity, and purchase links</li>
        <li>Calculates and shows the total cost for making selected meals</li>
      </ul>
      <img
                className={styles.forkastGif}
                src={Forkast}
                alt="Groceries AI Demo"
              />

      <h2>🗂 Rough Folder Structure</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          groceries-ai/
          ├── client/              # React frontend
          │   ├── Dockerfile
          │   ├── public/
          │   └── src/
          ├── server/              # Backend API (Node.js, FastAPI, etc.)
          │   ├── Dockerfile
          │   ├── app/
          │   ├── requirements.txt or package.json
          │   └── .env
          ├── docker-compose.yml
          └── README.md
        `}
      </pre>

      <h2>🔗 Frontend ↔ Backend Communication</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          POST /api/cart/add-ingredients
          Request Body:
          {
            "recipeId": "123"
          }

          Response:
          {
            "cart": [
              {
                "ingredient": "Tomatoes",
                "quantity": 3,
                "price": 2.50,
                "link": "https://grocerystore.com/tomatoes"
              },
              {
                "ingredient": "Olive Oil",
                "quantity": "1 bottle",
                "price": 8.00,
                "link": "https://grocerystore.com/olive-oil"
              }
            ],
            "totalCost": 10.50
          }
        `}
      </pre>

      <h2>🚀 Deployment Plan</h2>
      <ul className={styles.customBulletList}>
        <li>Containerize frontend and backend with Docker</li>
        <li>Use Docker Compose to orchestrate services</li>
        <li>Optionally deploy on cloud VPS or managed services</li>
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
