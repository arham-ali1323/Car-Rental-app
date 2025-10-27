import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import carImage from "../../assets/image/main_car.png";

const HeroSearch = () => {
  return (
    <section className="hero-section">
      <Container className="text-center">
        <h1 className="hero-heading">Luxury cars on Rent</h1>

        {/* Search Box */}
        <div className="search-box shadow">
          <Row className="align-items-center px-4 py-3">
            <Col md={3} sm={12} className="mb-2 mb-md-0">
              <div className="search-field">
                <label className="form-label">Pickup Location</label>
                <Form.Select>
                  <option>Please select location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>Houston</option>
                  <option>Phoenix</option>
                  <option>Philadelphia</option>
                  <option>San Antonio</option>
                  <option>San Diego</option>
                  <option>Dallas</option>
                  <option>San Jose</option>
                </Form.Select>
              </div>
            </Col>

            <Col md={3} sm={12} className="mb-2 mb-md-0">
              <div className="search-field">
                <label className="form-label">Pick-up Date</label>
                <Form.Control type="date" />
              </div>
            </Col>

            <Col md={3} sm={12} className="mb-2 mb-md-0">
              <div className="search-field">
                <label className="form-label">Return Date</label>
                <Form.Control type="date" />
              </div>
            </Col>

            <Col md={3} sm={12} className="text-center">
              <Button variant="primary" className=" search-btn">
                <FaSearch className="me-2" /> Search
              </Button>
            </Col>
          </Row>
        </div>

        {/* Car Image */}
        <img
          src={carImage}
          alt="Luxury Car"
          className="img-fluid mt-4 car-image"
        />
      </Container>
    </section>
  );
};

export default HeroSearch;
