import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Dekoratif arka plan elementleri */}
      <div className="hero-background">
        <div className="hero-circle-1"></div>
        <div className="hero-circle-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-text">🚀 Yeni Dönem Kayıtları Açıldı</span>
          </div>
          
          <h1 className="hero-title">
            Fullstack Web Developer Olma Fırsatını Kaçırma!
          </h1>
          
          <h2 className="hero-subtitle">
            Yazılımcı Madeni ile 3 Ayda Profesyonel Web Geliştirici Ol
          </h2>
          
          <p className="hero-description">
            Modern web teknolojilerini öğren, gerçek projelerde deneyim kazan ve kariyerine hızlı bir başlangıç yap.
          </p>
          
          <div className="hero-buttons">
            <a href="#register" className="primary-button">
              Hemen Kaydol
            </a>
            <a href="#learn-more" className="secondary-button">
              Detaylı Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 