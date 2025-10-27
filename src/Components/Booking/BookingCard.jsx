import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaEdit, FaTrash, FaCheckCircle, FaCar, FaTruck, FaGasPump, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

const BookingCard = ({ booking, index, onRemove }) => {
  if (!booking) return null;

  return (
    <motion.div
      className="p-4 mb-4 border-0 rounded-3 shadow-lg bg-white position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Status Indicator */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #28a745 0%, #20c997 100%)",
        }}
      ></div>

      <Row className="align-items-center">
        {/* Car Image */}
        <Col md={3} className="d-flex align-items-center justify-content-center">
          <motion.img
            src={booking.image}
            alt={booking.title}
            className="img-fluid rounded-3"
            style={{
              maxHeight: "140px",
              objectFit: "cover",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Col>

        {/* Car Info & Details */}
        <Col md={6}>
          <div className="d-flex align-items-center mb-3">
            <Badge
              bg="light"
              text="dark"
              className="me-2 border fw-semibold px-3 py-2"
              style={{ fontSize: "0.75rem" }}
            >
              Booking #{index + 1}
            </Badge>
            <Badge
              bg="success"
              className="text-capitalize d-flex align-items-center px-3 py-2"
              style={{ fontSize: "0.75rem" }}
            >
              <FaCheckCircle className="me-1" />
              Confirmed
            </Badge>
          </div>

          <div className="mb-2">
            <div className="d-flex align-items-center text-dark mb-2">
              <FaCalendarAlt className="me-2 text-primary" style={{ fontSize: "1rem" }} />
              <span className="fw-semibold">Rental Period:</span>
              <span className="ms-2">{booking.dateRange}</span>
            </div>
            <div className="d-flex align-items-center text-dark mb-2">
              <FaMapMarkerAlt className="me-2 text-success" style={{ fontSize: "1rem" }} />
              <span className="fw-semibold">Pick-up:</span>
              <span className="ms-2">{booking.pickupLocation}</span>
            </div>
            <div className="d-flex align-items-center text-dark">
              <FaMapMarkerAlt className="me-2 text-warning" style={{ fontSize: "1rem" }} />
              <span className="fw-semibold">Return:</span>
              <span className="ms-2">{booking.returnLocation}</span>
            </div>
          </div>

          <h5 className="mt-3 mb-1 fw-bold text-dark">{booking.title}</h5>
          <div className="d-flex align-items-center gap-3 mb-0">
            <small className="text-muted d-flex align-items-center">
              <FaCar className="me-1 text-secondary" />
              {booking.year}
            </small>
            <small className="text-muted d-flex align-items-center">
              <FaCog className="me-1 text-secondary" />
              {booking.transmission || "Automatic"}
            </small>
            <small className="text-muted d-flex align-items-center">
              <FaGasPump className="me-1 text-secondary" />
              {booking.fuel || "Petrol"}
            </small>
            <small className="text-muted d-flex align-items-center">
              <FaMapMarkerAlt className="me-1 text-secondary" />
              {booking.location}
            </small>
          </div>
        </Col>

        {/* Pricing & Actions */}
        <Col md={3} className="text-end d-flex flex-column justify-content-between h-100">
          <div className="mb-3">
            <p className="text-secondary small mb-1 fw-semibold">Total Price</p>
            <h4 className="text-primary fw-bold mb-1">{booking.price}</h4>
            <p className="text-muted small mb-0">Booked on 4/1/2025</p>
          </div>

          <div className="d-flex gap-2 justify-content-end">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill px-3"
                style={{ fontSize: "0.8rem" }}
              >
                <FaEdit className="me-1" />
                Edit
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline-danger"
                size="sm"
                className="rounded-pill px-3"
                style={{ fontSize: "0.8rem" }}
                onClick={() => onRemove(booking.id)}
              >
                <FaTrash className="me-1" />
                Cancel
              </Button>
            </motion.div>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default BookingCard;
