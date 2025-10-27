import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Container className="text-center my-5">
      <h3 className="fw-bold">Never Miss a Deal!</h3>
      <p className="text-muted">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex">
            <Form.Control type="email" placeholder="Enter your email" />
            <Button variant="primary" className="ms-2">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
