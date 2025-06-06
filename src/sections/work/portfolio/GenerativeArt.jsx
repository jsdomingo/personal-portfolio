import { Link } from "react-router-dom";
import styles from './Projects.module.css';

export default function GenerativeArt() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Link to="/" className={styles.link}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Generative Art Plan</h1>
      </div>
      <h3 className={styles.backlogged}>STATUS BACKLOGGED: you've stumbled across my plan for this project and this has not started yet!</h3>
      <p>Create unique, beautiful artwork generated programmatically using Python. 
        The goal is to explore creative coding techniques and produce art pieces that can be showcased, 
        including replacing my current banner photo in the connect section of this website.</p>

      <h2>🧰 Tools & Libraries</h2>
      <ul className={styles.customBulletList}>
        <li>Python 3.x</li>
        <li><code>Pillow</code> for image creation and manipulation</li>
        <li><code>matplotlib</code> or <code>seaborn</code> for plots and patterns</li>
        <li><code>turtle</code> for simple drawings</li>
        <li><code>Processing.py</code> or <code>p5py</code> for interactive sketches</li>
        <li><code>numpy</code> for numerical calculations</li>
        <li>Optional: AI-assisted generation with models like VQGAN+CLIP or Stable Diffusion</li>
      </ul>

      <h2>🗂 Rough Folder Structure</h2>
      <pre style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>
        {`
          generative-art/
          ├── scripts/              # Python scripts generating art
          │   ├── abstract_shapes.py
          │   ├── fractals.py
          │   └── noise_patterns.py
          ├── output/               # Generated images saved here
          ├── assets/               # Any static resources
          ├── README.md
          └── requirements.txt
        `}
      </pre>

      <h2>🧠 Features & Goals</h2>
      <ul className={styles.customBulletList}>
        <li>Generate a variety of art styles (abstract, fractal, geometric, noise-based)</li>
        <li>Produce high-resolution images suitable for banners or backgrounds</li>
        <li>Document scripts with explanations of techniques used</li>
        <li>Explore AI-assisted generative art (optional)</li>
        <li>Replace banner photo in connect section with a selected generated image</li>
      </ul>

      <h2>🚀 Workflow</h2>
      <ol className={styles.customBulletList}>
        <li>Write Python scripts experimenting with generative techniques</li>
        <li>Save outputs to <code>output/</code> folder</li>
        <li>Select favorite images for site use</li>
        <li>Optimize images for web</li>
        <li>Update connect section banner</li>
        <li>Optionally share scripts and images on GitHub or portfolio</li>
      </ol>

      <h2>📌 Optional Enhancements</h2>
      <ul className={styles.customBulletList}>
        <li>Create an interactive web page to generate art dynamically</li>
        <li>Animate generative art sequences (GIFs or videos)</li>
        <li>Add CLI options to customize script parameters</li>
        <li>Integrate with backend to serve art dynamically</li>
      </ul>
    </div>
  );
}
