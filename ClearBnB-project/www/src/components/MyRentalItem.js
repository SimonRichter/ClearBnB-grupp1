import React from 'react';
import '../style/MyRentalItem.css'

const MyRentalItem = ({ rental }) => {
  
  const startDate = rental.startDate * 1000;
  const endDate = rental.endDate * 1000;


  return (
    <div className="myRentalItem">
      <div className="img">
        <img src={rental.imageURLs[0]} alt=""/>
      </div>
      <div className="info">
        <p><span>Title: </span>{rental.title}</p>
        <p><span>Start date: </span>{new Date(startDate).toString().substr(0, 15)}</p>
        <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
        <p><span>Price/night: </span>{ rental.price }</p>
      </div>
    </div>
  );
}

export default MyRentalItem;