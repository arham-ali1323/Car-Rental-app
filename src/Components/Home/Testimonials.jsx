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
    <section className="testimonials-section">
      <Container>
        <h2 className="testimonials-title text-center">What Our Customers Say</h2>
        <p className="testimonials-subtitle text-center">Why travelers choose CarRental around the world.</p>
        <Row>
          {testimonials.map((t, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body className="d-flex flex-column">
                  <div className="testimonial-user-info">
                    <img src={t.img} alt={t.name} className="testimonial-user-image" />
                    <div>
                      <div className="testimonial-user-name">{t.name}</div>
                      <div className="testimonial-user-location">{t.location}</div>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, idx) => (
                      <img src={starIcon} alt="star" key={idx} className="testimonial-star" />
                    ))}
                  </div>
                  <Card.Text className="testimonial-review">"{t.review}"</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
