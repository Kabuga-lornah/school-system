import React from 'react';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // Here you would send the form data to your backend
  };

  return (
    <div className="page-container">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Have questions? Our team is here to help. Reach out to us, and we'll
        get back to you as soon as possible.
      </p>

      {/* --- NEW: Two-column layout --- */}
      <div className="contact-layout">
        <div className="contact-form-container card">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="auth-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info-container">
          <h3>Helpline & Address</h3>
          <div className="contact-info-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+254 700 000 000</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>info@somatech.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>123 Tech Avenue, Nairobi, Kenya</p>
            </div>
          </div>
          {/* Placeholder for a map */}
          <div className="map-placeholder">
            <span>Google Map Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;