import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      let valentineDate = new Date(currentYear, 1, 14);
      
      if (now > valentineDate) {
        valentineDate = new Date(currentYear + 1, 1, 14);
      }
      
      const timeDifference = valentineDate - now;
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown">
      <h2 className="section-title">Countdown to Next Valentine's Day</h2>
      <div className="countdown-timer">
        <div className="timer-unit">
          <div className="timer-value">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="timer-label">Days</div>
        </div>
        <div className="timer-unit">
          <div className="timer-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="timer-label">Hours</div>
        </div>
        <div className="timer-unit">
          <div className="timer-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="timer-label">Minutes</div>
        </div>
        <div className="timer-unit">
          <div className="timer-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="timer-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;