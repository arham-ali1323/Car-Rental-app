// At the top of the file
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BMWM4 from "../assets/image/car_image1.png"
 
const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy dynamic content (replace with real car data based on id later)
  const car = {
    name: "BMW M4 Competition",
    price: "$299",
    type: "SUV",
    year: 2022,
    location: "Los Angeles",
    seats: "5 Seats",
    fuel: "Gasoline",
    transmission: "Automatic",
    features: ["Leather Seats", "Panoramic Sunroof", "Wireless Charging", "360 Camera"],
    image: BMWM4,
    description: "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
  };

  return (
    <div className="bg-light min-vh-100 font-inter text-dark">
           <main className="container my-4">
        {/* Back to all cars link */}
        <div className="mb-4">
          <a href="#" className="text-secondary text-decoration-none d-flex align-items-center">
            <svg className="me-1" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Back to all cars</span>
          </a>
        </div>

        <div className="row g-4">
          {/* Left Section - Car Details */}
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4 border-0 rounded-3">
              <div className="card-body p-3">
                <img
                  src={BMWM4}
                  alt="BMW M4 Competition"
                  className="img-fluid rounded-lg mb-3"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x450/e0e0e0/ffffff?text=Image+Error"; }}
                />
                <h1 className="h3 fw-bold mb-2">BMW M4 COMPETITION</h1>
                <p className="text-muted mb-4">2022 &bull; SUV</p>

                {/* Features Grid */}
                <div className="row row-cols-2 row-cols-sm-4 g-3 mb-4">
                  <div className="col text-center">
                    <div className="bg-light p-3 rounded-lg shadow-sm">
                      <svg className="mb-2 text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-10a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2zM9 11h6M9 15h6M7 7h10"></path></svg>
                      <small className="fw-medium">5 Seats</small>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="bg-light p-3 rounded-lg shadow-sm">
                      <svg className="mb-2 text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10l8-4"></path></svg>
                      <small className="fw-medium">Gasoline</small>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="bg-light p-3 rounded-lg shadow-sm">
                      <svg className="mb-2 text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100 4m0-4a2 2 0 110 4m0 0V4m0 4h6m6 4a2 2 0 100 4m0-4a2 2 0 110 4m0 0V4m0 4h6"></path></svg>
                      <small className="fw-medium">Automatic</small>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="bg-light p-3 rounded-lg shadow-sm">
                      <svg className="mb-2 text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <small className="fw-medium">Los Angeles</small>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <h2 className="h5 fw-bold mb-3">Description</h2>
                <p className="text-secondary lh-base mb-4">
                  The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.
                </p>

                {/* Features List */}
                <h2 className="h5 fw-bold mb-3">Features</h2>
                <div className="row row-cols-1 row-cols-sm-2 g-2">
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked readOnly id="leatherSeats" />
                      <label className="form-check-label text-secondary" htmlFor="leatherSeats">
                        Leather Seats
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked readOnly id="panoramicSunroof" />
                      <label className="form-check-label text-secondary" htmlFor="panoramicSunroof">
                        Panoramic Sunroof
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked readOnly id="wirelessCharging" />
                      <label className="form-check-label text-secondary" htmlFor="wirelessCharging">
                        Wireless Charging
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked readOnly id="camera360" />
                      <label className="form-check-label text-secondary" htmlFor="camera360">
                        360 Camera
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Booking Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                  <span className="h2 fw-bold mb-0">$299</span>
                  <span className="text-muted">per day</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="pickupDate" className="form-label fw-medium">Pickup Date</label>
                  <input
                    type="date"
                    id="pickupDate"
                    className="form-control"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="returnDate" className="form-label fw-medium">Return Date</label>
                  <input
                    type="date"
                    id="returnDate"
                    className="form-control"
                  />
                </div>

                <button className="btn btn-primary w-100 py-3 fw-bold fs-5 shadow-sm">
                  Book Now
                </button>
                <p className="text-center text-muted small mt-3 mb-0">
                  No credit card required to reserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetails;
