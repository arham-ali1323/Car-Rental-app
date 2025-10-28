import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const carImage1 = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&crop=center";
const carImage2 = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&crop=center";
const carImage3 = "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop&crop=center";
const carImage4 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center";
import usersIcon from "../../assets/image/users_icon.svg";
import fuelIcon from "../../assets/image/fuel_icon.svg";
import locationIcon from "../../assets/image/location_icon.svg";
import dashboardIcon from "../../assets/image/dashboardIcon.svg";

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
    name: "Mercedes-Benz C-Class",
    type: "Sedan - 2022",
    price: "$250/day",
    img: carImage1,
    tags: ["5 Seats", "Petrol", "Automatic", "Chicago"],
  },
  {
    id: 6,
    name: "Ford Mustang",
    type: "Coupe - 2020",
    price: "$180/day",
    img: carImage2,
    tags: ["2 Seats", "Petrol", "Manual", "Miami"],
  },
  {
    id: 7,
    name: "Audi Q7",
    type: "SUV - 2021",
    price: "$350/day",
    img: carImage3,
    tags: ["7 Seats", "Diesel", "Automatic", "San Francisco"],
  },
  {
    id: 8,
    name: "Honda Civic",
    type: "Sedan - 2023",
    price: "$120/day",
    img: carImage4,
    tags: ["5 Seats", "Hybrid", "CVT", "Seattle"],
  },
  {
    id: 9,
    name: "Honda Civic",
    type: "Sedan - 2023",
    price: "$120/day",
    img: carImage1,
    tags: ["5 Seats", "Hybrid", "CVT", "Seattle"],
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

const CarsFeatures = () => {
  return (
    <section className="cars-features-section">
      <Container className="cars-features-container">
        <h2 className="cars-features-heading">Available  Cars</h2>
        <p className="cars-features-subtitle">
          Explore our selection of premium vehicles available for your next adventure.
        </p>
        <Row>
          {vehicles.map((v, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div
                className="h-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Link to={`/cars/${v.id}`} className="text-decoration-none text-dark">
                  <Card className="cars-features-card">
                    <div style={{ position: "relative" }}>
                      <span className="cars-features-badge-available position-absolute">
                        Available Now
                      </span>
                      <Card.Img variant="top" src={v.img} alt={v.name} className="cars-features-card-img" />
                      <span className="cars-features-badge-price position-absolute">
                        {v.price}
                      </span>
                    </div>
                    <Card.Body>
                      <Card.Title className="cars-features-card-title">{v.name}</Card.Title>
                      <Card.Subtitle className="cars-features-card-subtitle">{v.type}</Card.Subtitle>
                      <div className="cars-features-price">{v.price}</div>
                      <ul className="cars-features-tags">
                        {v.tags.map((tag, tagIdx) => {
                          let icon = null;
                          if (tag.toLowerCase().includes("seat")) icon = usersIcon;
                          else if (tag.toLowerCase().includes("hybrid") || tag.toLowerCase().includes("diesel"))
                            icon = fuelIcon;
                          else if (tag.toLowerCase().includes("automatic") || tag.toLowerCase().includes("manual") || tag.toLowerCase().includes("cvt") || tag.toLowerCase().includes("semi-automatic")) icon = dashboardIcon;
                          else if (
                            tag.toLowerCase().includes("new york") ||
                            tag.toLowerCase().includes("los angeles") ||
                            tag.toLowerCase().includes("chicago") ||
                            tag.toLowerCase().includes("miami") ||
                            tag.toLowerCase().includes("san francisco") ||
                            tag.toLowerCase().includes("seattle")
                          )
                            icon = locationIcon;
                          return (
                            <li key={tagIdx} className="cars-features-tag-item">
                              {icon && (
                                <img src={icon} alt="icon" className="cars-features-tag-icon" />
                              )}
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    </Card.Body>
                  </Card>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <button className="cars-features-view-all-btn">View All Vehicles</button>
        </div>
      </Container>
    </section>
  );
};

export { vehicles };
export default CarsFeatures;
