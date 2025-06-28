import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import DataScience from './pages/DataScience';
import Design from './pages/Design';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [showToast, setShowToast] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Theme toggling + toast + fade-scale animation
  useEffect(() => {
    document.body.className = theme;

    setAnimate(false);
    requestAnimationFrame(() => setAnimate(true));

    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 2000);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      {/* Toast Message */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: 80,
            right: 20,
            backgroundColor: theme === 'light' ? '#e2e8f0' : '#334155',
            color: theme === 'light' ? '#1e293b' : '#f1f5f9',
            padding: '10px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1001,
          }}
        >
          {theme === 'light' ? 'Light Mode Activated ☀️' : 'Dark Mode Activated 🌙'}
        </div>
      )}

      {/* Toggle Switch */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1001 }}>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Animated Page Wrapper */}
      <div className={`fade-scale ${animate ? 'show' : ''}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
