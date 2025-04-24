"use client";

import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
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
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
              <button
                type="submit"
                className="submit-button"
              >
                Webinara Katıl
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm; 