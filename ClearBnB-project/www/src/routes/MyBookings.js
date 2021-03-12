import React, { useContext, useEffect, useState } from 'react'
import MyBookingItem from '../components/MyBookingItem';
import { BookingContext } from '../contexts/BookingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/MyBookings.css';

const MyBookings = () => {

  const { bookings } = useContext(BookingContext);
  const { whoAmI } = useContext(UserContext);
  const currentDate = new Date().getTime();
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
        <div className="future">
          <h1>Future bookings</h1>
          {myResidences.map(r => {
            if (r.startDate * 1000 > currentDate) {
            return( <div className="futureBookings"><MyBookingItem key={r._id} booked={r} /></div>)
            }
          })}
        </div>  
        <div className="passed">
          <h1>Passed bookings</h1>
          {myResidences.map(r => {
            if (r.startDate * 1000 < currentDate) {
            return( <div className="passedBookings"><MyBookingItem key={r._id} booked={r} /></div>)
            }
          })}
       </div>   
      </div>}
    </div>
  );
}

export default MyBookings;