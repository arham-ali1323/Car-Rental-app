import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cars from "../../assets/image/banner_car_image.png";

const CTASection = () => {
  return (
    <section className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="cta-content">
            <h3 className="cta-title">Do You Own a Luxury Car?</h3>
            <p className="cta-description">
              Monetize your vehicle effortlessly by listing it on CarRental. We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.
            </p>
            <Button className="cta-button">List your car</Button>
          </Col>
          <Col md={4}>
            <img src={cars} alt="car" className="cta-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;
