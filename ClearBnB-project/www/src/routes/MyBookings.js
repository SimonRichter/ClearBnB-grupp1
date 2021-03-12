import React, { useContext, useEffect, useState } from 'react'
import MyBookingItem from '../components/MyBookingItem';
import { BookingContext } from '../contexts/BookingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'

const MyBookings = () => {

  const { bookings } = useContext(BookingContext);
  const { whoAmI } = useContext(UserContext);

  const [myResidences, setMyResidences] = useState(null);


  useEffect(() => {
    if (bookings) {
      const booked = bookings.filter(b => b.userId === whoAmI._id);
      setMyResidences([...booked]);
    } 
  },[bookings,whoAmI])

  return (
    <div className="myBookings">
      {myResidences && <div className="wrapper">
        {myResidences.map(r => (<MyBookingItem key={r._id} booked={r} />))}
      </div>}
    </div>
  );
}

export default MyBookings;