import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import { FaHome, FaCar, FaCalendarAlt, FaSearch, FaList, FaSignInAlt } from "react-icons/fa";
import Logo from "../assets/image/logo.svg";

function CarNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-lg"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backdropFilter: "blur(10px)",
      }}
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
                  "nav-link text-white d-flex align-items-center" +
                  (isActive ? " active fw-bold" : "")
                }
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffd700";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
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
                  "nav-link text-white d-flex align-items-center" +
                  (isActive ? " active fw-bold" : "")
                }
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffd700";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
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
                  "nav-link text-white d-flex align-items-center" +
                  (isActive ? " active fw-bold" : "")
                }
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffd700";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
              >
                <FaCalendarAlt className="me-2" />
                My Booking
              </NavLink>
            </motion.div>

            <Form className="d-flex ms-3">
              <Row className="g-2 align-items-center">
                <Col xs="auto" className="position-relative">
                  <FaSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    style={{ zIndex: 1 }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Search cars..."
                    className="ps-5 rounded-pill border-0 shadow-sm"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  />
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffd700" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderRadius: "50rem", padding: "5px 10px" }}
                  >
                    <Button
                      variant="outline-light"
                      className="rounded-pill me-2 d-flex align-items-center border-2"
                      style={{
                        transition: "all 0.3s ease",
                        borderColor: "white",
                        color: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#ffd700";
                        e.target.style.borderColor = "#ffd700";
                        e.target.style.color = "#333";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.borderColor = "white";
                        e.target.style.color = "white";
                      }}
                    >
                      <FaList className="me-2" />
                      List Cars
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffd700" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderRadius: "50rem", padding: "5px 10px" }}
                  >
                    <Button
                      variant="primary"
                      className="rounded-pill d-flex align-items-center"
                      style={{
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        transition: "all 0.3s ease",
                        color: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#ffd700";
                        e.target.style.borderColor = "#ffd700";
                        e.target.style.color = "#333";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#4c51bf";
                        e.target.style.borderColor = "#4c51bf";
                        e.target.style.color = "white";
                      }}
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
