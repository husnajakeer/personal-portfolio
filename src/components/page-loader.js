import React, { useState, useEffect } from 'react';
import '../styles/page-loader.css';
import Logo from './Logo.js';

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-icon">
          <Logo />
        </div>
        <div className="loader-text">Entering Husna's world...</div>
        <div className="loader-dots">
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
