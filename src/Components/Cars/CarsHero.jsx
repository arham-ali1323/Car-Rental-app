import React from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import "./Cars.css";

const CarsHero = () => {
  return (
    <section className="cars-hero-section">
      <Container className="cars-hero-container text-center">
        <h1 className="cars-hero-heading">Luxury cars on Rent</h1>
        <p className="cars-hero-subtitle">Browse our selection of premium vehicles available for your next adventure</p>
        <Row className="cars-hero-search">
          <Col>
            <InputGroup className="cars-hero-input-group mb-3">
              <InputGroup.Text className="cars-hero-input-group-text">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search By Make, Model and Features"
                aria-label="Search cars"
                className="cars-hero-form-control"
              />
              <InputGroup.Text className="cars-hero-input-group-text">
                <i className="bi bi-funnel"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarsHero;
