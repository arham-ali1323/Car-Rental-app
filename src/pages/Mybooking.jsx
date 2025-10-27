import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookingCard from "../Components/Booking/BookingCard";
import BMWM4 from "../assets/image/car_image1.png";
import Mercedes from "../assets/image/car_image3.png";
import BMWM3 from "../assets/image/banner_car_image.png";
import Mercedes2 from "../assets/image/car_image4.png";
const MyBooking = () => {
  const bookings = [
      {
        image: BMWM4,
        title: "BMW M4 Competition",
        year: "2022",
        location: "Los Angeles",
        dateRange: "4/10/2025 - 4/15/2025",
        pickupLocation: "Airport Terminal 1",
        returnLocation: "Downtown Office",
        price: "$475",
      },
      {
        image: Mercedes,
        title: "Mercedes E-Class AMG",
        year: "2023",
        location: "New York",
        dateRange: "5/1/2025 - 5/5/2025",
        pickupLocation: "Midtown",
        returnLocation: "Uptown",
        price: "$580",
      },
      {
        image: BMWM3,
        title: "BMW M3 Touring",
        year: "2021",
        location: "San Francisco",
        dateRange: "6/10/2025 - 6/14/2025",
        pickupLocation: "Union Square",
        returnLocation: "SFO Airport",
        price: "$499",
      },
      {
        image: Mercedes2,
        title: "Mercedes C-Class Coupe",
        year: "2020",
        location: "Chicago",
        dateRange: "7/2/2025 - 7/6/2025",
        pickupLocation: "Downtown Loop",
        returnLocation: "O'Hare Terminal",
        price: "$450",
      },
    ];


  return (
    <Container className="py-5">
      <h2 className="mb-4">My Bookings</h2>
      <Row>
        {bookings.map((booking, index) => (
          <Col md={6} lg={12} key={index}>
            <BookingCard booking={booking} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyBooking;
