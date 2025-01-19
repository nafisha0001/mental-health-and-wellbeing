// Footer.js
import React from 'react';
import './Footer.css'; // External CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-logo">
          <img src="https://as2.ftcdn.net/v2/jpg/06/32/87/91/1000_F_632879123_oONQU284ijVi7JdPR5vwQuhpuUzVXKcE.jpg" alt="MindCare Logo" />
          <span>MindCare</span>
        </div>

        <ul className="footer-nav">
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>

      <hr/>

      <div className="footer-bottom">
        <div className="language-selector">
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="footer-copyright">
          <p>© 2022 Brand, Inc. - <a href="/privacy">Privacy</a> - <a href="/terms">Terms</a> - <a href="/sitemap">Sitemap</a></p>
        </div>
        <div className="footer-right">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link twitter">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link facebook">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link linkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-link youTube">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
