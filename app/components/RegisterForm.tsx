"use client";

import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Form gönderilirken bir hata oluştu');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Form başarıyla gönderildi!'
      });
      
      // Formu sıfırla
      setFormData({
        ad: '',
        soyad: '',
        email: '',
        telefon: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="register" className="register-section">
      <div className="register-container">
        <div className="register-content">
          <div className="register-form-container">
            <h2 className="register-title">
              Webinara Hemen Kaydol
            </h2>
            {submitStatus.type && (
              <div className={`submit-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="ad" className="form-label">
                  Adınız
                </label>
                <input
                  type="text"
                  id="ad"
                  name="ad"
                  value={formData.ad}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="soyad" className="form-label">
                  Soyadınız
                </label>
                <input
                  type="text"
                  id="soyad"
                  name="soyad"
                  value={formData.soyad}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefon" className="form-label">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Webinara Katıl'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm; 