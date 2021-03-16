import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import '../style/MyBookingItem.css'

const MyBookingItem = ({ booked }) => {

  const history = useHistory();
  const startDate = booked.startDate * 1000;
  const endDate = booked.endDate * 1000;
  const { residences } = useContext(ResidenceContext);
  const [myBooking, setMyBooking] = useState(null);

  const toDetailPage = () => {
    history.push('/residence/' + myBooking._id);
  }
  
  useEffect(() => {
    const booke = residences.filter(r => r._id === booked.residenceId)
    setMyBooking( ...booke );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="myBookingItems">
      {myBooking && <div onClick={toDetailPage} className="wrapperInItem">
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