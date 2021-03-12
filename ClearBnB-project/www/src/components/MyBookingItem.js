import React, { useEffect, useContext, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import '../style/MyBookingItem.css'

const MyBookingItem = ({ booked }) => {

  const { residences } = useContext(ResidenceContext);
  const [myBooking, setMyBooking] = useState(null);
  
  useEffect(() => {
    const booke = residences.filter(r => r._id === booked.residenceId)
    setMyBooking( ...booke );
  },[])

  return (
    <div className="myBookingItem">
      {myBooking && <div className="wrapper">
        <h2>{myBooking.title}</h2>
      </div>}
    </div>
  );
}

export default MyBookingItem;