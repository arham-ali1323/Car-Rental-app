import React from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

const CarsHero = () => {
  return (
    <section className="hero-section">
      <Container className="text-center">
        <h1 className="hero-heading">Luxury cars on Rent</h1>
        <p className="text-secondary fw-bold">Browse our selection of premium vehicles available for your next adventure</p>
        <Row className="my-5">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <i className="bi bi-search text-dark"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search By Make, Model and Features"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="text-opacity-50 text-secondary fw-bold"
              />
              <InputGroup.Text>
                <i className="bi bi-funnel text-dark"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarsHero;
