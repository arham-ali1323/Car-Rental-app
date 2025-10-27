import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const BookingCard = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="p-3 mb-4 border rounded shadow-sm bg-white">
      <Row>
        {/* Car Image */}
        <Col md={3} className="d-flex align-items-center justify-content-center">
          <img
            src={booking.image}
            alt={booking.title}
            className="img-fluid rounded"
            style={{ maxHeight: "120px", objectFit: "cover" }}
          />
        </Col>

        {/* Car Info & Details */}
        <Col md={6}>
          <div className="d-flex align-items-center mb-2">
            <Badge bg="light" text="dark" className="me-2 border">
              Booking #1
            </Badge>
            <Badge bg="success" className="text-capitalize">
              confirmed
            </Badge>
          </div>

          <div className="text-secondary small mb-2">
            <FaCalendarAlt className="me-2 text-primary" />
            <strong>Rental Period</strong>: {booking.dateRange}
          </div>
          <div className="text-secondary small mb-2">
            <FaMapMarkerAlt className="me-2 text-primary" />
            <strong>Pick-up Location</strong>: {booking.pickupLocation}
          </div>
          <div className="text-secondary small">
            <FaMapMarkerAlt className="me-2 text-primary" />
            <strong>Return Location</strong>: {booking.returnLocation}
          </div>

          <h6 className="mt-3 mb-0 fw-bold">{booking.title}</h6>
          <small className="text-muted">
            {booking.year} • {booking.type || "SUV"} • {booking.location}
          </small>
        </Col>

        {/* Pricing */}
        <Col md={3} className="text-end d-flex flex-column justify-content-between">
          <div>
            <p className="text-secondary small mb-0">Total Price</p>
            <h5 className="text-primary fw-bold">{booking.price}</h5>
            <p className="text-muted small">Booked on 4/1/2025</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookingCard;
