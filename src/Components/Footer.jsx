import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/image/logo.svg'; // adjust path to your actual logo

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-5 border-top">
      <Container>
        <Row className="gy-4">
          {/* Logo & Description */}
          <Col md={4}>
            <div className="mb-3">
              <img src={Logo} alt="CarRental" height="40" />
            </div>
            <p className="text-secondary small">
              Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h6 className="fw-bold">QUICK LINKS</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse Cars</a></li>
              <li><a href="#">List Your Car</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </Col>

          {/* Resources */}
          <Col md={3}>
            <h6 className="fw-bold">RESOURCES</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Insurance</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="fw-bold">CONTACT</h6>
            <ul className="list-unstyled small text-secondary">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </Col>
        </Row>

        {/* Bottom line */}
        <hr className="my-4" />
        <div className="d-md-flex justify-content-between small text-secondary">
          <div>© 2025 Brand. All rights reserved.</div>
          <div className="d-flex gap-3">
            <a href="#">Privacy</a>
            <span>|</span>
            <a href="#">Terms</a>
            <span>|</span>
            <a href="#">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
