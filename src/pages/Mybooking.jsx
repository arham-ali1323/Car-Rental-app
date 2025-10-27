import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookingCard from "../Components/Booking/BookingCard";
import { useBooking } from "../contexts/BookingContext";

const MyBooking = () => {
  const { bookings, removeBooking } = useBooking();

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Bookings</h2>
      {bookings.length > 0 ? (
        <Row>
          {bookings.map((booking, index) => (
            <Col key={booking.id} md={12} className="mb-4">
              <BookingCard
                booking={booking}
                index={index}
                onRemove={removeBooking}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5">
          <div className="mb-4">
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted"
            >
              <path
                d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M3 7H21M16 11V15M12 11V15M8 11V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="text-muted mb-3">No Bookings Yet</h4>
          <p className="text-muted">
            You haven't made any bookings yet. Start exploring our car collection to book your next ride!
          </p>
        </div>
      )}
    </Container>
  );
};

export default MyBooking;

