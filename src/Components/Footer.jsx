import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/image/logo.svg'; // adjust path to your actual logo

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* Logo & Description */}
          <Col md={4}>
            <img src={Logo} alt="CarRental" className="footer-logo" />
            <p className="footer-description">
              Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link"><FaFacebookF /></a>
              <a href="#" className="footer-social-link"><FaInstagram /></a>
              <a href="#" className="footer-social-link"><FaTwitter /></a>
              <a href="#" className="footer-social-link"><FaEnvelope /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h6 className="footer-heading">QUICK LINKS</h6>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Browse Cars</a></li>
              <li><a href="#" className="footer-link">List Your Car</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
            </ul>
          </Col>

          {/* Resources */}
          <Col md={3}>
            <h6 className="footer-heading">RESOURCES</h6>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Insurance</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="footer-heading">CONTACT</h6>
            <ul className="footer-contact-info">
              <li className="footer-contact-item">1234 Luxury Drive</li>
              <li className="footer-contact-item">San Francisco, CA 94107</li>
              <li className="footer-contact-item">+1 234 567890</li>
              <li className="footer-contact-item">info@example.com</li>
            </ul>
          </Col>
        </Row>

        {/* Bottom line */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Brand. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-bottom-link">Terms</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
