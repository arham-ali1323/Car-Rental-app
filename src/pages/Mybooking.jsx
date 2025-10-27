import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookingCard from "../Components/Booking/BookingCard";
import { vehicles as featuredVehicles } from "../Components/Home/FeaturedVehicles";
import { vehicles as carsVehicles } from "../Components/Cars/CarsFeatures";

const MyBooking = () => {
  const allVehicles = [...featuredVehicles, ...carsVehicles];
  const [bookings, setBookings] = useState([
    {
      id: 1,
      image: allVehicles[0]?.img || "",
      title: allVehicles[0]?.name || "BMW M4 Competition",
      year: allVehicles[0]?.type?.split(" - ")[1] || "2022",
      location: allVehicles[0]?.tags?.find(tag => tag.includes("York") || tag.includes("Angeles") || tag.includes("Francisco") || tag.includes("Chicago")) || "Los Angeles",
      transmission: allVehicles[0]?.tags?.find(tag => tag.includes("Automatic") || tag.includes("Manual") || tag.includes("Semi-Automatic")) || "Manual",
      fuel: allVehicles[0]?.tags?.find(tag => tag.includes("Hybrid") || tag.includes("Diesel") || tag.includes("Petrol")) || "Petrol",
      dateRange: "4/10/2025 - 4/15/2025",
      pickupLocation: "Airport Terminal 1",
      returnLocation: "Downtown Office",
      price: allVehicles[0]?.price || "$475",
    },
    {
      id: 2,
      image: allVehicles[1]?.img || "",
      title: allVehicles[1]?.name || "Mercedes E-Class AMG",
      year: allVehicles[1]?.type?.split(" - ")[1] || "2023",
      location: allVehicles[1]?.tags?.find(tag => tag.includes("York") || tag.includes("Angeles") || tag.includes("Francisco") || tag.includes("Chicago")) || "New York",
      transmission: allVehicles[1]?.tags?.find(tag => tag.includes("Automatic") || tag.includes("Manual") || tag.includes("Semi-Automatic")) || "Automatic",
      fuel: allVehicles[1]?.tags?.find(tag => tag.includes("Hybrid") || tag.includes("Diesel") || tag.includes("Petrol")) || "Diesel",
      dateRange: "5/1/2025 - 5/5/2025",
      pickupLocation: "Midtown",
      returnLocation: "Uptown",
      price: allVehicles[1]?.price || "$580",
    },
    {
      id: 3,
      image: allVehicles[2]?.img || "",
      title: allVehicles[2]?.name || "BMW M3 Touring",
      year: allVehicles[2]?.type?.split(" - ")[1] || "2021",
      location: allVehicles[2]?.tags?.find(tag => tag.includes("York") || tag.includes("Angeles") || tag.includes("Francisco") || tag.includes("Chicago")) || "San Francisco",
      transmission: allVehicles[2]?.tags?.find(tag => tag.includes("Automatic") || tag.includes("Manual") || tag.includes("Semi-Automatic")) || "Automatic",
      fuel: allVehicles[2]?.tags?.find(tag => tag.includes("Hybrid") || tag.includes("Diesel") || tag.includes("Petrol")) || "Petrol",
      dateRange: "6/10/2025 - 6/14/2025",
      pickupLocation: "Union Square",
      returnLocation: "SFO Airport",
      price: allVehicles[2]?.price || "$499",
    },
    {
      id: 4,
      image: allVehicles[3]?.img || "",
      title: allVehicles[3]?.name || "Mercedes C-Class Coupe",
      year: allVehicles[3]?.type?.split(" - ")[1] || "2020",
      location: allVehicles[3]?.tags?.find(tag => tag.includes("York") || tag.includes("Angeles") || tag.includes("Francisco") || tag.includes("Chicago")) || "Chicago",
      transmission: allVehicles[3]?.tags?.find(tag => tag.includes("Automatic") || tag.includes("Manual") || tag.includes("Semi-Automatic")) || "Manual",
      fuel: allVehicles[3]?.tags?.find(tag => tag.includes("Hybrid") || tag.includes("Diesel") || tag.includes("Petrol")) || "Petrol",
      dateRange: "7/2/2025 - 7/6/2025",
      pickupLocation: "Downtown Loop",
      returnLocation: "O'Hare Terminal",
      price: allVehicles[3]?.price || "$450",
    },
  ]);

  const removeBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const addBooking = (newBooking) => {
    const id = Math.max(...bookings.map(b => b.id)) + 1;
    setBookings([...bookings, { ...newBooking, id }]);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Bookings</h2>
      {bookings.length > 0 ? (
        <div className="list-group">
          {bookings.map((booking) => (
            <Link key={booking.id} to={`/cars/${booking.id}`} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{booking.title}</h5>
                <p className="mb-1 text-muted">{booking.location} - {booking.dateRange}</p>
                <small className="text-muted">{booking.year} • {booking.transmission} • {booking.fuel}</small>
              </div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  removeBooking(booking.id);
                }}
              >
                Remove
              </Button>
            </Link>
          ))}
        </div>
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

