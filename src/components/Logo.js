import React from 'react';
import '../styles/logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="portfolio-logo"
      >
        {/* Pink flower petals - five petals in circular arrangement */}
        <circle 
          cx="20" 
          cy="13" 
          r="4" 
          fill="#E4AF9D" 
          opacity="0.9"
        />
        <circle 
          cx="15.5" 
          cy="17.5" 
          r="4" 
          fill="#E4AF9D" 
          opacity="0.9"
        />
        <circle 
          cx="24.5" 
          cy="17.5" 
          r="4" 
          fill="#E4AF9D" 
          opacity="0.9"
        />
        <circle 
          cx="17" 
          cy="25" 
          r="4" 
          fill="#E4AF9D" 
          opacity="0.9"
        />
        <circle 
          cx="23" 
          cy="25" 
          r="4" 
          fill="#E4AF9D" 
          opacity="0.9"
        />
        
        {/* Flower center */}
        <circle 
          cx="20" 
          cy="20" 
          r="3" 
          fill="#85715B"
        />
        
        {/* Simple stem */}
        <path 
          d="M20 28 L20 32" 
          stroke="#97A182" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Small leaf */}
        <path 
          d="M16 30 Q12 28 16 26 Q20 28 16 30" 
          fill="#97A182" 
          opacity="0.8"
        />
        
      </svg>
    </div>
  );
};

export default Logo;
