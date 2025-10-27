import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookingProvider } from "./contexts/BookingContext";
import CarNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import MyBooking from "./pages/Mybooking";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <BookingProvider>
      <Router>
        <CarNavbar />

        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/cars/:id" element={<CarDetails />} />
    <Route path="/my-booking" element={<MyBooking />} />

          {/*     <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
      </Router>
    </BookingProvider>
  );
}

export default App;
