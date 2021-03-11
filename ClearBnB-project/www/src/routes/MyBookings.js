import React, { useContext } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'

const MyBookings = () => {

  const { residences } = useContext(ResidenceContext);
  const { bookings } = useContext(BookingContext);
  const { whoAmI } = useContext(UserContext);

  return (
    <div className="myBookings">
      <h1>My bookings..</h1>
    </div>
  );
}

export default MyBookings;