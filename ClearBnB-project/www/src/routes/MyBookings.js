import React, { useContext, useEffect, useState } from 'react'
import MyBookingItem from '../components/MyBookingItem';
import { BookingContext } from '../contexts/BookingContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import { useHistory } from 'react-router-dom'
import '../style/MyBookings.css';

const MyBookings = () => {

  const { fetchBookings } = useContext(BookingContext);
  const { whoIsOnline } = useContext(UserContext);
  const currentDate = new Date().getTime();
  const [myResidences, setMyResidences] = useState(null);
  const history = useHistory();

  const start = async () => {

    const fetched = await fetchBookings();
    const user = await whoIsOnline();


    const booked = fetched.filter(b => b.userId === user._id);
    if (booked) {
      setMyResidences([...booked]);
      console.log(myResidences);
    } 

    

  }

  // useEffect(() => {
  //   if (bookings) {
  //     const booked = bookings.filter(b => b.userId === whoAmI._id);
  //     setMyResidences([...booked]);
  //   } 
  // }, [bookings, whoAmI])
  

  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
          history.push("/login")
      } else {
        start(); 
      }
    });
    
  },[])

  return (
    <div className="myBookings">
      {myResidences && <div className="wrapper">
        <div className="future">
          <p>FUTURE BOOKINGS</p>
          {myResidences.map(r => {
            if (r.startDate * 1000 > currentDate) {
            return( <div key={r._id} className="futureBookings"><MyBookingItem key={r._id} booked={r} /></div>)
            }
          })}
        </div>  
        <div className="passed">
          <p>BOOKING HISTORY</p>
          {myResidences.map(r => {
            if (r.startDate * 1000 < currentDate) {
            return( <div key={r._id} className="passedBookings"><MyBookingItem key={r._id} booked={r} /></div>)
            }
          })}
       </div>   
      </div>}
    </div>
  );
}

export default MyBookings;