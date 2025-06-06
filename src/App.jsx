import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './sections/home/Home';
import Work from './sections/work/Work';
import Info from './sections/info/Info';
import Connect from './sections/connect/Connect';
import Footer from './components/Footer';
import ProjectPage from './sections/work/ProjectPage'; 
import SpotifyPlaylistBuilder from './sections/work/portfolio/SpotifyPlaylistBuilder';
import GroceriesApi from './sections/work/portfolio/GroceriesApi';
import GenerativeArt from './sections/work/portfolio/GenerativeArt';
import CookieCutter from './sections/work/portfolio/CookieCutter';
import HydroponicsSystem from './sections/work/portfolio/HydroponicsSystem';
import AIFragranceGenerator from './sections/work/portfolio/AIFragranceGenerator';
import CarrotCakeCinnamonScroll from './sections/work/portfolio/CarrotCakeCinnamonScroll';
import PotatoFoccacia from './sections/work/portfolio/PotatoFoccacia';
import HotSourSoup from './sections/work/portfolio/HotSourSoup';
import NoSupport from './components/assets/NoSupport.png';


function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/projects/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div style={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        textAlign: 'center',
        fontFamily: '"Spline Sans Mono", monospace',
        fontSize: '1.3rem',
        gap: '1rem'
      }}>
        <img 
          src={NoSupport} 
          alt="Not supported" 
          style={{ maxWidth: '600px', width: '100%', height: 'auto' }} 
        />
        <p>
          This site is currently not supported for this device.<br />
          Please view on a larger screen.
        </p>
      </div>
    );
  }
  

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Work />
            <Info />
            <Connect />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/projects/spotify-api-page" element={<SpotifyPlaylistBuilder />} />
        <Route path="/projects/groceries-api" element={<GroceriesApi />} />
        <Route path="/projects/generative-art" element={<GenerativeArt />} />
        <Route path="/projects/cookie-cutter" element={<CookieCutter />} />
        <Route path="/projects/hydroponics-system" element={<HydroponicsSystem />} />
        <Route path="/projects/ai-fragrance-generator" element={<AIFragranceGenerator />} />
        <Route path="/projects/carrot-cake-cinnamon-scroll" element={<CarrotCakeCinnamonScroll />} />
        <Route path="/projects/potato-foccacia" element={<PotatoFoccacia />} />
        <Route path="/projects/hot-sour-soup" element={<HotSourSoup />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
