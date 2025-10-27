import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import carImage from "../../assets/image/main_car.png";

const HeroSearch = () => {
  return (
    <section
      className="hero-section position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      ></div>

      <Container className="text-center position-relative" style={{ zIndex: 2 }}>
        <motion.h1
          className="hero-heading text-white mb-5 display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Luxury Cars on Rent
          <br />
          <span className="text-warning">Drive Your Dreams</span>
        </motion.h1>

        {/* Search Box */}
        <motion.div
          className="search-box bg-white rounded-4 shadow-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <Row className="align-items-end g-3">
            <Col md={3} sm={12}>
              <div className="search-field position-relative">
                <label className="form-label fw-semibold text-muted">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  Pickup Location
                </label>
                <Form.Select className="form-select rounded-pill border-0 shadow-sm">
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
              <div className="search-field position-relative">
                <label className="form-label fw-semibold text-muted">
                  <FaCalendarAlt className="me-2 text-primary" />
                  Pick-up Date
                </label>
                <Form.Control
                  type="date"
                  className="form-control rounded-pill border-0 shadow-sm"
                />
              </div>
            </Col>

            <Col md={3} sm={12}>
              <div className="search-field position-relative">
                <label className="form-label fw-semibold text-muted">
                  <FaCalendarAlt className="me-2 text-primary" />
                  Return Date
                </label>
                <Form.Control
                  type="date"
                  className="form-control rounded-pill border-0 shadow-sm"
                />
              </div>
            </Col>

            <Col md={3} sm={12}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="primary"
                  className="w-100 rounded-pill py-3 fw-bold shadow"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#ffd700";
                    e.target.style.color = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    e.target.style.color = "white";
                  }}
                >
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
          className="img-fluid mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ maxWidth: "600px", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
        />
      </Container>
    </section>
  );
};

export default HeroSearch;
