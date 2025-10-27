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
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-3">Featured Vehicles</h2>
      <p className="text-center text-muted mb-4">
        Explore our selection of premium vehicles available for your next
        adventure.
      </p>
      <Row>
        {vehicles.map((v, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Link
              to={`/cars/${v.id}`}
              className="text-decoration-none text-dark"
            >
              <motion.div
                className="h-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card className="shadow-sm h-100 hover-shadow-sm">
                  <div style={{ position: "relative" }}>
                    <span
                      className="badge bg-success position-absolute rounded-5"
                      style={{ top: 8, left: 8, zIndex: 2 }}
                    >
                      Avalible Now
                    </span>
                    <Card.Img variant="top" src={v.img} alt={v.name} />
                    <span
                      className="badge bg-dark position-absolute"
                      style={{
                        bottom: 8,
                        right: 8,
                        zIndex: 2,
                        fontSize: 15,
                        padding: 12,
                      }}
                    >
                      {v.price}
                    </span>
                  </div>
                  <Card.Body>
                    <Card.Title>{v.name}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      {v.type}
                    </Card.Subtitle>
                    <h5 className="mt-2">{v.price}</h5>
                    <ul className="list-unstyled mt-2">
                      {v.tags.map((t, i) => (
                        <li key={i} className="text-muted small">
                          • {t}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <button className="btn btn-primary">View All Vehicles</button>
      </div>
    </Container>
  );
};

export default FeaturedVehicles;
