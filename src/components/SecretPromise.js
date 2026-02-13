import React, { useEffect, useRef } from 'react';

const SecretPromise = ({ isActive, onToggle }) => {
  const secretMessageRef = useRef(null);

  useEffect(() => {
    if (isActive && secretMessageRef.current) {
      secretMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isActive]);

  return (
    <section className="section">
      <div style={{ textAlign: 'center' }}>
        <button className="button" onClick={onToggle}>
          My Forever Promise to You
        </button>
      </div>
      <div 
        ref={secretMessageRef}
        className={`secret-message ${isActive ? 'active' : ''}`}
      >
        <h2 className="section-title">My Promise to You</h2>
        <p className="message">My darling Baby, on this Valentine's Day, I want to make you a promise:</p>
        <p className="message">I promise to always cherish you, to support your dreams, to laugh with you in times of joy and hold you close in times of sorrow.</p>
        <p className="message">I promise to be your partner in every adventure, your comfort in every storm, and your biggest fan in every endeavor.</p>
        <p className="message">Most of all, I promise to love you more with each passing day, today, tomorrow, and forever.</p>
        <p className="signature">With all my love, Sadik</p>
      </div>
    </section>
  );
};

export default SecretPromise;