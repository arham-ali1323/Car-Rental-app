import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import carImage from "../../assets/image/main_car.png";


const HeroSearch = () => {
  return (
    <section className="hero-section">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      <Container className="hero-container">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Luxury Cars on Rent
          <br />
          <span>Drive Your Dreams</span>
        </motion.h1>

        {/* Search Box */}
        <motion.div
          className="search-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Row className="align-items-end g-3">
            <Col md={3} sm={12}>
              <div className="search-field">
                <label className="form-label">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  Pickup Location
                </label>
                <Form.Select className="form-select">
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

            <Col md={3} sm={12}>
              <div className="search-field">
                <label className="form-label">
                  <FaCalendarAlt className="me-2 text-primary" />
                  Pick-up Date
                </label>
                <Form.Control type="date" className="form-control" />
              </div>
            </Col>

            <Col md={3} sm={12}>
              <div className="search-field">
                <label className="form-label">
                  <FaCalendarAlt className="me-2 text-primary" />
                  Return Date
                </label>
                <Form.Control type="date" className="form-control" />
              </div>
            </Col>

            <Col md={3} sm={12}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" className="search-button">
                  <FaSearch className="me-2" /> Search Cars
                </Button>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Car Image */}
        <motion.img
          src={carImage}
          alt="Luxury Car"
          className="hero-car-image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </Container>
    </section>
  );
};

export default HeroSearch;
