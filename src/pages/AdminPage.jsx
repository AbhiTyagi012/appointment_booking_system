import React, { useEffect, useState } from 'react';
import '../styles/AdminPage.css';
import { all_bookings } from '../api/userApi';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await all_bookings();
        setBookings(response);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">All Bookings</h1>

      {loading && <p className="admin-loading">Loading bookings...</p>}
      {error && <p className="admin-error">{error}</p>}

      {!loading && bookings.length === 0 && (
        <p className="admin-no-bookings">No bookings found.</p>
      )}

      {!loading && bookings.length > 0 && (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Time Slot</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.timeSlot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
