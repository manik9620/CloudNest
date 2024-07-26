import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> +1 123 456 7890</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
