import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function BookingCalendar({ isOpen, onToggle }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSprayed, setIsSprayed] = useState(false);
  const [usesPeePad, setUsesPeePad] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [isBookingVisible, setIsBookingVisible] = useState(false);

  const handleBookingToggle = () => {
    onToggle()
    // setIsBookingVisible(!isBookingVisible);
    setStartDate(null);
    setEndDate(null);
    setIsSprayed(false);
    setUsesPeePad(false);
    setTotalPrice(0);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSprayedChange = () => {
    setIsSprayed(!isSprayed);
  };

  const handlePeePadChange = () => {
    setUsesPeePad(!usesPeePad);
  };

  const calculateTotalPrice = () => {
    if (startDate && endDate) {
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      let price = days * 60;

      if (!isSprayed) {
        price += days * 10;
      }

      if (usesPeePad) {
        price += days * 10;
      }

      setTotalPrice(price);
    }
  };

  const handleClose = () => {
    onToggle()
  };

  return (
    <div>
      <Link to="/booking" className="navbar__link" onClick={handleBookingToggle}>
        Booking
      </Link>
      {isOpen && (
        <div className="booking-form">
          <h2>Booking Calendar</h2>
          <div>
            <label htmlFor="start-date">Start Date:</label>
            <DatePicker
              id="start-date"
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date"
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date:</label>
            <DatePicker
              id="end-date"
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date"
            />
          </div>
          <div>
            <label htmlFor="sprayed">Is your dog spayed? </label>
            <div>
              <label>
                <input
                  type="radio"
                  id="sprayed-yes"
                  name="sprayed"
                  value="yes"
                  checked={isSprayed}
                  onChange={handleSprayedChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="sprayed-no"
                  name="sprayed"
                  value="no"
                  checked={!isSprayed}
                  onChange={handleSprayedChange}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="pee-pad">Does the dog use pee pad indoor?</label>
            <div>
              <label>
                <input
                  type="radio"
                  id="pee-pad-yes"
                  name="pee-pad"
                  value="yes"
                  checked={usesPeePad}
                  onChange={handlePeePadChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="pee-pad-no"
                  name="pee-pad"
                  value="no"
                  checked={!usesPeePad}
                  onChange={handlePeePadChange}
                />
                No
              </label>
            </div>
          </div>
          <button onClick={calculateTotalPrice}>Calculate</button>
          {totalPrice > 0 && <p>Total Price: ${totalPrice}</p>}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default BookingCalendar;
