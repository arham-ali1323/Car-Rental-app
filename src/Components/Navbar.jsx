import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { motion } from "framer-motion";
import {
  FaHome,
  FaCar,
  FaCalendarAlt,
  FaSearch,
  FaList,
  FaSignInAlt,
} from "react-icons/fa";
import Logo from "../assets/image/logo.png";
import { vehicles as featuredVehicles } from "../Components/Home/FeaturedVehicles";
import { vehicles as carsVehicles } from "../Components/Cars/CarsFeatures";

function CarNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const allVehicles = [...featuredVehicles, ...carsVehicles].filter((vehicle, index, self) =>
    index === self.findIndex(v => v.id === vehicle.id)
  );

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = allVehicles.filter(vehicle =>
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
    setShowDropdown(filtered.length > 0);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (vehicleId) => {
    setSearchQuery('');
    setShowDropdown(false);
    navigate(`/cars/${vehicleId}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0].id);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-lg navbar-custom"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <motion.img
            src={Logo}
            alt="logo"
            height="40"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <motion.div
              whileHover={{ scale: 1.05, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: "8px", padding: "5px 10px" }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link text-white d-flex align-items-center nav-link-custom" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <FaHome className="me-2" />
                Home
              </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: "8px", padding: "5px 10px" }}
            >
              <NavLink
                to="/cars"
                className={({ isActive }) =>
                  "nav-link text-white d-flex align-items-center nav-link-custom" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <FaCar className="me-2" />
                Cars
              </NavLink>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: "8px", padding: "5px 10px" }}
            >
              <NavLink
                to="/my-booking"
                className={({ isActive }) =>
                  "nav-link text-white d-flex align-items-center nav-link-custom" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <FaCalendarAlt className="me-2" />
                My Booking
              </NavLink>
            </motion.div>

            <Form className="d-flex ms-3" onSubmit={handleSearchSubmit}>
              <Row className="g-2 align-items-center">
                <Col xs="auto" className="position-relative">
                  <FaSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    style={{ zIndex: 1 }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Search cars..."
                    className="ps-5 rounded-pill border-0 shadow-sm search-input-custom"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {showDropdown && (
                    <div
                      className="position-absolute w-100 mt-1 bg-white border rounded shadow-lg"
                      style={{
                        zIndex: 10000,
                        maxHeight: '300px',
                        overflowY: 'auto',
                        top: '100%',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {searchResults.map(vehicle => (
                        <div
                          key={vehicle.id}
                          onClick={() => handleResultClick(vehicle.id)}
                          className="d-flex align-items-center p-2 border-bottom"
                          style={{
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <img
                            src={vehicle.img}
                            alt={vehicle.name}
                            style={{
                              width: '40px',
                              height: '40px',
                              objectFit: 'cover',
                              marginRight: '10px',
                              borderRadius: '4px'
                            }}
                          />
                          <div>
                            <div className="fw-bold text-dark">{vehicle.name}</div>
                            <small className="text-muted">{vehicle.type} • {vehicle.price}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    style={{ borderRadius: "50rem", padding: "5px 10px" }}
                  >
                    <Button
                      variant="outline-light"
                      className="rounded-pill me-2 d-flex align-items-center border-2 btn-outline-light-custom"
                    >
                      <FaList className="me-2" />
                      List Cars
                    </Button>
                  </motion.div>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    style={{ borderRadius: "50rem", padding: "5px 10px" }}
                  >
                    <Button
                      variant="primary"
                      className="rounded-pill d-flex align-items-center btn-primary-custom"
                    >
                      <FaSignInAlt className="me-2" />
                      Login
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CarNavbar;
