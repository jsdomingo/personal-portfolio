import { Link } from "react-router-dom";
import styles from './Projects.module.css'
import demo from './SpotifyDemo.gif'

export default function SpotifyPlaylistBuilder() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        ← Back to Home
      </Link>

      <h1 className={styles.title} >Spotify Playlist Builder</h1>
      <div className={styles.topSection}>
        <a className={styles.projectLinkDemo}href="https://jsdomingo.github.io/stardust-and-soundwaves/" target="_blank" rel="noopener noreferrer">
          Explore the live project
          </a>
        <img  className={styles.projectDemoGif}src={demo}  alt="spotify-api-demo" />
      </div>

      <section>
        <h2>Project Overview</h2>
        <p>
          <em>Spotify Playlist Builder</em> is a frontend React application designed to let users search for songs and create custom Spotify playlists directly from their browser. By leveraging the Spotify Web API and secure OAuth 2.0 PKCE authentication, the app enables seamless interaction with Spotify accounts without needing a backend server.
        </p>
      </section>

      <section>
        <h2>Goals and Objectives</h2>
        <ul className={styles.customBulletList}>
          <li>Enable users to securely authenticate with their Spotify accounts using PKCE OAuth flow.</li>
          <li>Allow users to search Spotify’s music catalog by song title or artist name.</li>
          <li>Implement functionality to add and remove tracks from a custom playlist within the app interface.</li>
          <li>Provide the ability to save created playlists directly to users’ Spotify accounts with a custom playlist name.</li>
          <li>Design a responsive, intuitive UI that works well on both desktop and mobile devices.</li>
          <li>Support light and dark mode themes for enhanced accessibility and user preference.</li>
        </ul>
      </section>

      <section>
        <h2>Scope of Work</h2>
        <h3>Core Features</h3>
        <ul className={styles.customBulletList}>
          <li>User authentication with Spotify via OAuth 2.0 PKCE</li>
          <li>Search bar connected to Spotify’s /v1/search endpoint for track lookup</li>
          <li>Dynamic display of search results with track details (title, artist, album)</li>
          <li>Playlist builder interface to add/remove tracks</li>
          <li>Save-to-Spotify functionality creating playlists on user accounts</li>
          <li>Playlist renaming capability within the app UI</li>
          <li>Responsive design with theme toggling</li>
        </ul>
        <h3>Non-Functional Requirements</h3>
        <ul className={styles.customBulletList}>
          <li>Secure frontend-only authentication without exposing client secrets</li>
          <li>Use of localStorage for session persistence</li>
          <li>Efficient API request handling and error management</li>
          <li>Clean, modular React component structure with unidirectional data flow</li>
          <li>Use of modern development tools (Vite, CSS Modules)</li>
        </ul>
      </section>


      <section>
        <h2>Technologies Used</h2>
        <ul className={styles.customBulletList}>
          <li>React – UI components</li>
          <li>Vite – Development tooling</li>
          <li>Spotify Web API – Music data and playlist management</li>
          <li>OAuth 2.0 PKCE – Secure frontend authentication</li>
          <li>CSS Modules – Scoped styling</li>
          <li>localStorage – Session persistence</li>
        </ul>
      </section>

      <section>
        <h2>Risk Management</h2>
        <ul className={styles.customBulletList}>
          <li>Authentication complexities mitigated by PKCE frontend flow</li>
          <li>Handle API rate limits and errors gracefully</li>
          <li>Ensure HTTPS and CORS compliance for deployment</li>
          <li>Test responsiveness and usability across devices</li>
        </ul>
      </section>

      <section>
        <h2>Future Roadmap</h2>
        <ul className={styles.customBulletList}>
          <li>Integrate audio previews for tracks</li>
          <li>Add playlist search and browsing</li>
          <li>Mood-based playlist recommendations using audio features</li>
          <li>User notifications for actions</li>
          <li>Accessibility improvements and keyboard navigation</li>
        </ul>
      </section>
      <p>
        <strong>Explore the source code:</strong>{" "}
        <a href="https://github.com/jsdomingo/stardust-and-soundwaves" target="_blank" rel="noopener noreferrer">
          https://github.com/jsdomingo/stardust-and-soundwaves
        </a>
      </p>
    </div>

  );
}
