import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarRentalDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const bookings = [
    { car: 'BMW 3 Series', date: '24 Oct 21', price: '$375', status: 'Confirmed', statusClass: 'success' },
    { car: 'Ford Explorer', date: '22 Oct 21', price: '$435', status: 'Completed', statusClass: 'secondary' },
    { car: 'Toyota Corolla', date: '20 Oct 21', price: '$225', status: 'Pending', statusClass: 'warning' },
    { car: 'Tesla Model 3', date: '18 Oct 21', price: '$390', status: 'Confirmed', statusClass: 'success' }
  ];

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <div className="bg-white border-end" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="text-primary fw-bold fs-5">
              <span className="me-2">🚗</span>
              CarRental
            </div>
          </div>

          <div className="text-center mb-4 pb-4 border-bottom">
            <img
              src="https://ui-avatars.com/api/?name=Richard+Scott&background=4F46E5&color=fff&size=80"
              alt="Profile"
              className="rounded-circle mb-2"
              style={{ width: '60px', height: '60px' }}
            />
            <div className="fw-semibold">Richard Scott</div>
            <small className="text-muted">Admin</small>
          </div>

          <nav className="nav flex-column">
            <a
              href="#"
              className={`nav-link d-flex align-items-center py-2 px-3 rounded ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'text-dark'}`}
              onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
            >
              <span className="me-2">📊</span>
              Dashboard
            </a>
            <a
              href="#"
              className={`nav-link d-flex align-items-center py-2 px-3 rounded ${activeTab === 'addcar' ? 'bg-primary text-white' : 'text-dark'}`}
              onClick={(e) => { e.preventDefault(); setActiveTab('addcar'); }}
            >
              <span className="me-2">➕</span>
              Add Car
            </a>
            <a
              href="#"
              className={`nav-link d-flex align-items-center py-2 px-3 rounded ${activeTab === 'cars' ? 'bg-primary text-white' : 'text-dark'}`}
              onClick={(e) => { e.preventDefault(); setActiveTab('cars'); }}
            >
              <span className="me-2">🚙</span>
              Manage Cars
            </a>
            <a
              href="#"
              className={`nav-link d-flex align-items-center py-2 px-3 rounded ${activeTab === 'bookings' ? 'bg-primary text-white' : 'text-dark'}`}
              onClick={(e) => { e.preventDefault(); setActiveTab('bookings'); }}
            >
              <span className="me-2">📋</span>
              Manage Bookings
            </a>
          </nav>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h3 className="mb-1">Admin Dashboard</h3>
          <p className="text-muted">Monitor overall platform performance including total cars, bookings, inquiries, and repeat customers</p>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-muted small mb-1">Total Cars</div>
                    <h3 className="mb-0">8</h3>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-2 rounded">
                    <span style={{ fontSize: '24px' }}>🚗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-muted small mb-1">Total Bookings</div>
                    <h3 className="mb-0">8</h3>
                  </div>
                  <div className="bg-info bg-opacity-10 p-2 rounded">
                    <span style={{ fontSize: '24px' }}>📅</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-muted small mb-1">Pending Bookings</div>
                    <h3 className="mb-0">8</h3>
                  </div>
                  <div className="bg-warning bg-opacity-10 p-2 rounded">
                    <span style={{ fontSize: '24px' }}>⚠️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-muted small mb-1">Completed Bookings</div>
                    <h3 className="mb-0">8</h3>
                  </div>
                  <div className="bg-success bg-opacity-10 p-2 rounded">
                    <span style={{ fontSize: '24px' }}>✅</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings and Monthly Revenue */}
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">Recent Bookings</h5>
                <p className="text-muted small mb-3">Latest customer bookings</p>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index}>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                                <span style={{ fontSize: '20px' }}>🚗</span>
                              </div>
                              <div>
                                <div className="fw-semibold">{booking.car}</div>
                                <small className="text-muted">{booking.date}</small>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-end">
                            <div className="fw-semibold">{booking.price}</div>
                          </td>
                          <td className="align-middle text-end">
                            <span className={`badge bg-${booking.statusClass}`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">Monthly Revenue</h5>
                <p className="text-muted small mb-4">Revenue for current month</p>

                <div className="text-center">
                  <h1 className="text-primary mb-4" style={{ fontSize: '3rem' }}>$1060</h1>
                  <div className="progress" style={{ height: '8px' }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: '65%' }}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">65% of monthly goal</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
