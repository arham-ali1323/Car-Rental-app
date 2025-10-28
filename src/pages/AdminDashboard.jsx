import React from 'react';
import { useBooking } from '../contexts/BookingContext';
import { vehicles } from '../Data/vehicles';

function AdminDashboard() {
  const { bookings } = useBooking();

  // Mock data for demonstration - in a real app, this would come from an API
  const stats = {
    totalCars: vehicles.length,
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    completedBookings: bookings.filter(b => b.status === 'confirmed').length,
  };

  // Mock recent bookings data
  const recentBookings = bookings.slice(0, 5).map(booking => ({
    car: booking.carName,
    date: new Date(booking.pickupDate).toLocaleDateString(),
    price: `$${booking.totalPrice}`,
    status: booking.status === 'confirmed' ? 'Completed' : 'Pending',
    statusClass: booking.status === 'confirmed' ? 'success' : 'warning'
  }));

  // If no bookings, show sample data
  const displayBookings = recentBookings.length > 0 ? recentBookings : [
    { car: 'BMW X5', date: '2024-01-15', price: '$300', status: 'Completed', statusClass: 'success' },
    { car: 'Toyota Corolla', date: '2024-01-14', price: '$130', status: 'Pending', statusClass: 'warning' },
    { car: 'BMW M4', date: '2024-01-13', price: '$299', status: 'Completed', statusClass: 'success' },
    { car: 'Audi Q7', date: '2024-01-12', price: '$350', status: 'Pending', statusClass: 'warning' },
    { car: 'Mercedes C-Class', date: '2024-01-11', price: '$250', status: 'Completed', statusClass: 'success' },
  ];

  const monthlyRevenue = displayBookings
    .filter(b => b.status === 'Completed')
    .reduce((sum, booking) => sum + parseInt(booking.price.replace('$', '')), 0);

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="row">
        <div className="col-12">
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
                          {displayBookings.map((booking, index) => (
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
      </div>
    </div>
  );
}

export default AdminDashboard;
