import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cars from "../../assets/image/banner_car_image.png"

const CTASection = () => {
  return (
    <section style={{ backgroundColor: "#2c6ef5", color: "#fff", padding: "2rem 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h3>Do You Own a Luxury Car?</h3>
            <p>
              Monetize your vehicle effortlessly by listing it on CarRental. We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.
            </p>
            <Button variant="light">List your car</Button>
          </Col>
          <Col md={4}>
            <img src={cars} alt="car" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;
