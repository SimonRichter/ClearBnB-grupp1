import React, { useState, createContext, useEffect } from 'react'

export const BookingContext = createContext();

export const BookingProvider = (props) => {
  
  const [bookings, setBookings] = useState(null);
  
  const fetchBookings = async () => {
    let data = await fetch('rest/bookings');
    data = await data.json();
    setBookings([...data]);
  }

  const addBooking = (obj) => {
    
  }
  
  const values = {
    bookings,
    setBookings,
    addBooking
  }

  useEffect(() => {
  fetchBookings();
  }, [])
  
  return (
    <BookingContext.Provider value={values}>
      {props.children}
  </BookingContext.Provider>
  );
}