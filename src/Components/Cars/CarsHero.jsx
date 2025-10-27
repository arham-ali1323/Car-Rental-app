import React, { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import "./Cars.css";

const CarsHero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="cars-hero-section">
      <Container className="cars-hero-container text-center">
        <h1 className="cars-hero-heading">Luxury cars on Rent</h1>
        <p className="cars-hero-subtitle">Browse our selection of premium vehicles available for your next adventure</p>
        <Row className="cars-hero-search">
          <Col>
            <Form onSubmit={handleSearch}>
              <InputGroup className="cars-hero-input-group mb-3">
                <InputGroup.Text className="cars-hero-input-group-text">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search By Make, Model and Features"
                  aria-label="Search cars"
                  className="cars-hero-form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroup.Text className="cars-hero-input-group-text">
                  <i className="bi bi-funnel"></i>
                </InputGroup.Text>
                <Button
                  type="submit"
                  variant="primary"
                  className="cars-hero-search-btn"
                >
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarsHero;
