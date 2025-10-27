import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <Container>
        <h3 className="newsletter-title">Never Miss a Deal!</h3>
        <p className="newsletter-subtitle">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        <Form className="newsletter-form">
          <Form.Control type="email" placeholder="Enter your email" className="newsletter-input" />
          <Button className="newsletter-button">Subscribe</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Newsletter;
