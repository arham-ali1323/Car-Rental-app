import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import starIcon from "../../assets/image/star_icon.svg";

const testimonials = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    review: "I've rented cars from various companies, but the experience with CarRental was exceptional.",
  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5,
  },
  {
    name: "John Smith",
    location: "New York, USA",
    review: "CarRental made my trip so much easier. The car was delivered right to my door!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 4,
  },
  {
    name: "Ava Johnson",
    location: "Sydney, Australia",
    review: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Tokyo, Japan",
    review: "The booking process was seamless, and the car was spotless. Will definitely use CarRental again for my business trips.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    review: "Great customer service and competitive prices. The GPS system in the car was a lifesaver during my road trip.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    rating: 4,
  },
  {
    name: "Carlos Mendoza",
    location: "Mexico City, Mexico",
    review: "As a frequent traveler, I've tried many rental companies. CarRental stands out with their reliability and modern fleet.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    location: "Toronto, Canada",
    review: "The 24/7 support was incredible when I had a flat tire. They sent help immediately and got me back on the road quickly.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    review: "Luxury cars at affordable prices. The online booking system is user-friendly and the pickup was hassle-free.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    rating: 4,
  },
  {
    name: "Arham Ahmed",
    location: "Dubai, UAE",
    review: "Luxury cars at affordable prices. The online booking system is user-friendly and the pickup was hassle-free.",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
    rating: 4,
  },
  {
    name: "Sophia Patel",
    location: "Mumbai, India",
    review: "Exceptional service and well-maintained vehicles. The staff was incredibly helpful throughout my rental period.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    rating: 5,
  },
  {
    name: "David Kim",
    location: "Seoul, South Korea",
    review: "Fast booking process and excellent car condition. Highly recommend for anyone visiting the city.",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    location: "Madrid, Spain",
    review: "Great value for money with top-notch customer support. The car exceeded my expectations.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    rating: 4,
  },
];

const Testimonials = () => {
  // Group testimonials into slides of 3
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="testimonials-title text-center">What Our Customers Say</h2>
        <p className="testimonials-subtitle text-center">Why travelers choose CarRental around the world.</p>
        <Carousel indicators={true} controls={true} interval={3000} pause={false} wrap={true} className="testimonials-carousel">
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="justify-content-center">
                {slide.map((t, i) => (
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
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
