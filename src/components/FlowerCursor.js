import React, { useEffect, useRef } from 'react';

const FlowerCursor = () => {
  const trailRef = useRef(null);

  useEffect(() => {
    const trail = trailRef.current;

    if (!trail) return;

    let animationFrameId;
    let lastPetalTime = 0;
    const petalInterval = 100; // Create a petal every 100ms

    const updateCursor = (e) => {
      if (!e || typeof e.clientX === 'undefined' || typeof e.clientY === 'undefined') {
        return;
      }

      // Create petal trail
      const now = Date.now();
      if (now - lastPetalTime > petalInterval) {
        createPetal(e.clientX, e.clientY);
        lastPetalTime = now;
      }
    };

    const createPetal = (x, y) => {
      const petal = document.createElement('div');
      petal.className = 'trail-petal';
      
      // Randomize petal position slightly
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      
      petal.style.left = `${x + offsetX}px`;
      petal.style.top = `${y + offsetY}px`;
      
      // Randomize petal rotation
      const rotation = Math.random() * 360;
      petal.style.transform = `rotate(${rotation}deg)`;
      
      // Randomize petal size slightly
      const size = 0.8 + Math.random() * 0.4;
      petal.style.transform += ` scale(${size})`;
      
      trail.appendChild(petal);

      // Remove petal after animation completes
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 2000);
    };


    // Handle clicks with special effect
    const handleClick = (e) => {
      if (!e || typeof e.clientX === 'undefined' || typeof e.clientY === 'undefined') {
        return;
      }
      
      // Create a burst of petals on click
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          createPetal(e.clientX, e.clientY);
        }, i * 30);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('click', handleClick);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Petal trail container */}
      <div ref={trailRef} className="petal-trail" />
    </>
  );
};

export default FlowerCursor;
