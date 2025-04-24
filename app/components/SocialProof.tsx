import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Bu eğitim sayesinde 3 ay içinde web geliştirici olarak iş buldum. Teşekkürler Yazılımcı Madeni!",
      author: "Ahmet Yılmaz",
      role: "Frontend Developer"
    },
    {
      quote: "Mentor desteği ve pratik projelerle gerçekten çok şey öğrendim. Kesinlikle tavsiye ederim.",
      author: "Ayşe Demir",
      role: "Fullstack Developer"
    }
  ];

  return (
    <section className="social-proof">
      <div className="social-proof-container">
        <div className="social-proof-content">
          <h2 className="social-proof-title">
            Öğrencilerimiz Ne Diyor?
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">
                  "{testimonial.quote}"
                </p>
                <div className="testimonial-author">
                  {testimonial.author}
                </div>
                <div className="testimonial-role">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
          <div className="stats-container">
            <div className="stats-number">
              500+
            </div>
            <div className="stats-label">
              Başarılı Mezun
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 