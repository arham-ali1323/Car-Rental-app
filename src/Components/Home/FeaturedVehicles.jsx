import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import carImage1 from "../../assets/image/car_image1.png";
import carImage3 from "../../assets/image/car_image3.png";
import carImage4 from "../../assets/image/car_image4.png";
import carImage2 from "../../assets/image/car_image2.png";
const vehicles = [
  {
    id: 1,
    name: "BMW X5",
    type: "SUV - 2006",
    price: "$300/day",
    img: carImage1,
    tags: ["4 Seats", "Hybrid", "Semi-Automatic", "New York"],
  },
  {
    id: 2,
    name: "Toyota Corolla",
    type: "Sedan - 2021",
    price: "$130/day",
    img: carImage2,
    tags: ["4 Seats", "Diesel", "Automatic", "Los Angeles"],
  },
  {
    id: 3,
    name: "Jeep Wrangler",
    type: "SUV - 2023",
    price: "$200/day",
    img: carImage3,
    tags: ["4 Seats", "Hybrid", "Automatic", "Los Angeles"],
  },
  {
    id: 4,
    name: "BMW X5",
    type: "SUV - 2006",
    price: "$300/day",
    img: carImage4,
    tags: ["4 Seats", "Hybrid", "Semi-Automatic", "New York"],
  },
  {
    id: 5,
    name: "Toyota Corolla",
    type: "Sedan - 2021",
    price: "$130/day",
    img: carImage1,
    tags: ["4 Seats", "Diesel", "Automatic", "Los Angeles"],
  },
  {
    id: 6,
    name: "Jeep Wrangler",
    type: "SUV - 2023",
    price: "$200/day",
    img: carImage4,
    tags: ["4 Seats", "Hybrid", "Automatic", "Los Angeles"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedVehicles = () => {
  return (
    <section className="featured-vehicles-section">
      <Container>
        <h2 className="featured-vehicles-title text-center">Featured Vehicles</h2>
        <p className="featured-vehicles-subtitle text-center">
          Explore our selection of premium vehicles available for your next adventure.
        </p>
        <Row>
          {vehicles.map((v, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Link to={`/cars/${v.id}`} className="text-decoration-none">
                <motion.div
                  className="h-100"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <Card className="vehicle-card">
                    <div className="position-relative">
                      <span className="vehicle-badge-available">Available Now</span>
                      <Card.Img variant="top" src={v.img} alt={v.name} className="vehicle-card-image" />
                      <span className="vehicle-badge-price">{v.price}</span>
                    </div>
                    <Card.Body className="vehicle-card-body">
                      <Card.Title className="vehicle-card-title">{v.name}</Card.Title>
                      <Card.Subtitle className="vehicle-card-subtitle">{v.type}</Card.Subtitle>
                      <div className="vehicle-card-price">{v.price}</div>
                      <ul className="vehicle-tags">
                        {v.tags.map((t, i) => (
                          <li key={i} className="vehicle-tag">{t}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <button className="view-all-button">View All Vehicles</button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedVehicles;
