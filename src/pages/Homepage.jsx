import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // 👈 Add this for navigation
import SlotList from '../components/SlotList';
import BookingForm from '../components/BookingForm';
import Modal from '../components/Modal';
import '../styles/HomePage.css'; // Import the CSS file

const generateSlots = () => {
  const days = [];
  const now = new Date();

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date();
    dayDate.setDate(now.getDate() + i);

    const daySlots = [];
    const times = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

    times.forEach((time) => {
      daySlots.push({
        date: dayDate.toDateString(),
        day: dayDate.toLocaleDateString('en-US', { weekday: 'long' }),
        time,
        id: `${dayDate.toDateString()}-${time}`,
      });
    });

    days.push({
      date: dayDate.toDateString(),
      day: dayDate.toLocaleDateString('en-US', { weekday: 'long' }),
      slots: daySlots,
    });
  }

  return days;
};

const HomePage = () => {
  const navigate = useNavigate(); 
  const [slotsData, setSlotsData] = useState([]);
  const [expandedDay, setExpandedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);  // 👈 state to track mode

  useEffect(() => {
    const generatedSlots = generateSlots();
    setSlotsData(generatedSlots);
  }, []);

  const handleDayClick = (date) => {
    setExpandedDay((prev) => (prev === date ? null : date));
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleBookingConfirmed = () => {
    setBookingConfirmed(true);
    setShowModal(false);
  };

  const handleModeToggle = () => {
    navigate('/admin');
  };

  return (
    <div className="homepage-container">
      <div className="header">
        <h1 className="homepage-title">Available Time Slots (Next 7 Days)</h1>
        <button className="mode-toggle-button" onClick={handleModeToggle}>
          Switch to Admin
        </button>
      </div>

      <div className="day-list">
        {slotsData.map((day) => (
          <div key={day.date} className="day-card">
            <button
              onClick={() => handleDayClick(day.date)}
              className={`day-button ${expandedDay === day.date ? 'expanded' : ''}`}
            >
              <span className="day-label">
                {day.day}, {day.date}
              </span>
              <span className="day-icon">
                {expandedDay === day.date ? '▲' : '▼'}
              </span>
            </button>
            {expandedDay === day.date && (
              <div className="slot-list-container">
                <SlotList slots={day.slots} onSlotSelect={handleSlotSelect} />
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && selectedSlot && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingForm
            selectedSlot={selectedSlot}
            onBookingConfirmed={handleBookingConfirmed}
          />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
