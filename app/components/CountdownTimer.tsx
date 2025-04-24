"use client";

import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const webinarDate = new Date('2025-05-15T20:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = webinarDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-background"></div>
      <div className="countdown-container">
        <div className="countdown-content">
          <h2 className="countdown-title">
            Yazılımcı Madeni ile 4 Ayda Full Stack Web Developer Olun!
          </h2>
          <p className="countdown-date">
            15 Mayıs 2025, Saat: 20:00
          </p>
          <p className="countdown-subtitle">Ücretsiz Webinar'e Katılın! Sektör Hakkında Bilgi Alın!</p>
          
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-number">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="countdown-label">Gün</div>
            </div>
            
            <div className="countdown-item">
              <div className="countdown-number">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="countdown-label">Saat</div>
            </div>
            
            <div className="countdown-item">
              <div className="countdown-number">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="countdown-label">Dakika</div>
            </div>
            
            <div className="countdown-item">
              <div className="countdown-number">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="countdown-label">Saniye</div>
            </div>
          </div>
          
          <div className="countdown-button-container">
            <a href="#register" className="countdown-button">
              Şimdi Kaydol
              <svg className="countdown-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer; 