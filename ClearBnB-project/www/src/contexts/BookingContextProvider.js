import React, { useState, createContext, useEffect } from 'react'

export const BookingContext = createContext();

export const BookingProvider = (props) => {
  
  const [bookings, setBookings] = useState(null);
  
  const fetchBookings = async () => {
    let data = await fetch('rest/bookings');
    data = await data.json();
    setBookings([...data]);
    return data;
  }

  const addBooking = async (bookingObj) => {
    let res = await fetch('/rest/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bookingObj)
    });

    res = await res.json();
    if (bookings !== null) {
      setBookings([...bookings, bookingObj]);
    } else {
      setBookings([bookingObj]);
    }
  }

  useEffect(() => {
  fetchBookings();
  }, [])
  
  const values = {
    bookings,
    setBookings,
    addBooking,
    fetchBookings
  }

  
  return (
    <BookingContext.Provider value={values}>
      {props.children}
  </BookingContext.Provider>
  );
}