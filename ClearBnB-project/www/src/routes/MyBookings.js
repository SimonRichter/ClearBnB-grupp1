import React, { useContext, useEffect, useState } from 'react'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'

const MyBookings = () => {

  const { residences } = useContext(ResidenceContext);
  const { bookings } = useContext(BookingContext);
  const { whoAmI } = useContext(UserContext);

  const [myResidences, setMyResidences] = useState(null);


  useEffect(() => {
    if (bookings) {
      const booked = bookings.filter(b => b.userId === whoAmI._id);
      setMyResidences([...booked]);
      console.log(myResidences);
    } 
  },[bookings])

  return (
    <div className="myBookings">
      <h1>My bookings..</h1>
    </div>
  );
}

export default MyBookings;