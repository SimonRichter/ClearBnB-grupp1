import React, { useEffect, useContext, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import '../style/MyBookingItem.css'

const MyBookingItem = ({ booked }) => {

  const startDate = booked.startDate * 1000;
  const endDate = booked.endDate * 1000;
  const currentDate = new Date().getTime();
  const { residences } = useContext(ResidenceContext);
  const [myBooking, setMyBooking] = useState(null);
  
  useEffect(() => {
    const booke = residences.filter(r => r._id === booked.residenceId)
    setMyBooking( ...booke );
  },[])

  return (
    <div className="myBookingItems">
      {myBooking && <div className="wrapperInItem">
          <div className="wrap">
          <img src={myBooking.imageURLs[0]} alt="" />
          <div className="info">
          <p><span>Title: </span>{myBooking.title}</p>
          <p><span>Start date: </span>{new Date(startDate).toString().substr(0, 15)}</p>
          <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
          <p><span>Total price: </span>{booked.price} €</p>
          </div>  
          </div>
      </div>}
    </div>
  );
}

export default MyBookingItem;