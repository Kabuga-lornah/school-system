import React from 'react';
import { Link } from 'react-router-dom';
// We'd use react-icons for real icons, e.g., FaFacebook, FaTwitter, FaLinkedin
// For now, we'll use text placeholders.

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div className="footer-column-about">
          <Link to="/" className="footer-brand">
            SomaTech
          </Link>
          <p>
            Empowering the next generation of tech leaders through accessible,
            expert-led online education.
          </p>
        </div>

        <div className="footer-column-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-column-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            {/* Replace with actual icons */}
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 SomaTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;