import React, { useState } from 'react';
import { booking } from '../api/userApi';
import '../styles/BookingForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ selectedSlot, onBookingConfirmed }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const combinedTimeSlot = `${selectedSlot.day}, ${selectedSlot.date} at ${selectedSlot.time}`;
    const bookingData = { name, email, timeSlot: combinedTimeSlot };

    try {
      const response = await booking(bookingData);

      if (response.message == "Booking successful") {
        toast.success(response.message || 'Booking confirmed! Thank you.');
        onBookingConfirmed();
      } else {
        toast.error(response.message || 'Booking failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      const errorMsg =
        err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2 className="booking-form-title">
        Slot: {selectedSlot.day}, {selectedSlot.date} at {selectedSlot.time}
      </h2>

      <label htmlFor="name" className="booking-label">Name:</label>
      <input
        id="name"
        type="text"
        className="booking-input"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email" className="booking-label">Email:</label>
      <input
        id="email"
        type="email"
        className="booking-input"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button
        type="submit"
        className="booking-button"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Confirm Booking'}
      </button>
    </form>
  );
};

export default BookingForm;
