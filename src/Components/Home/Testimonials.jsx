import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import starIcon from "../../assets/image/star_icon.svg";
import testimonialImg1 from "../../assets/image/testimonial_image_1.png";
import testimonialImg2 from "../../assets/image/testimonial_image_2.png";
import userProfile from "../../assets/image/user_profile.png";

const testimonials = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    review: "I've rented cars from various companies, but the experience with CarRental was exceptional.",
    img: testimonialImg1,
    rating: 5,
  },
  {
    name: "John Smith",
    location: "New York, USA",
    review: "CarRental made my trip so much easier. The car was delivered right to my door!",
    img: testimonialImg2,
    rating: 4,
  },
  {
    name: "Ava Johnson",
    location: "Sydney, Australia",
    review: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal.",
    img: userProfile,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold">What Our Customers Say</h2>
      <p className="text-center text-muted mb-4">Why travelers choose CarRental around the world.</p>
      <Row>
        {testimonials.map((t, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card className="shadow-sm p-3 h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-2" style={{ width: '100%' }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", marginRight: 12 }}
                  />
                  <div className="text-start">
                    <Card.Title className="fw-bold mb-0">{t.name}</Card.Title>
                    <Card.Subtitle className="text-muted mb-0" style={{ fontSize: 14 }}>{t.location}</Card.Subtitle>
                  </div>
                </div>
                <div className="mb-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <img src={starIcon} alt="star" key={idx} style={{ width: 18, height: 18, marginRight: 2 }} />
                  ))}
                </div>
                <Card.Text className="text-start ">"{t.review}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
