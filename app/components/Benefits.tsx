import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '💻',
      title: 'Modern Web Teknolojileri',
      description: 'React, Next.js, Node.js gibi güncel teknolojileri öğren',
      colorClass: 'blue'
    },
    {
      icon: '🚀',
      title: 'Gerçek Proje Deneyimi',
      description: 'Canlı projelerde çalışarak pratik deneyim kazan',
      colorClass: 'purple'
    },
    {
      icon: '👨‍🏫',
      title: 'Mentor Desteği',
      description: 'Alanında uzman mentorlardan birebir destek al',
      colorClass: 'green'
    },
    {
      icon: '🌟',
      title: 'Kariyer Fırsatları',
      description: 'Eğitim sonrası iş fırsatları ve network imkanı',
      colorClass: 'yellow'
    },
    {
      icon: '🎓',
      title: 'Sertifika',
      description: 'Uluslararası geçerliliği olan sertifika kazan',
      colorClass: 'red'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-background">
        <div className="benefits-skew"></div>
      </div>
      <div className="benefits-container">
        <div className="benefits-content">
          <div className="benefits-header">
            <h2 className="benefits-title">
              Eğitimde Neler Öğreneceksiniz?
            </h2>
            <p className="benefits-subtitle">
              Kariyerinizi değiştirecek kapsamlı eğitim programı
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className={`benefit-icon ${benefit.colorClass}`}>
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">
                  {benefit.title}
                </h3>
                <p className="benefit-description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="benefits-cta">
            <a href="#register" className="benefits-button">
              Hemen Başvur
              <svg className="benefits-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 