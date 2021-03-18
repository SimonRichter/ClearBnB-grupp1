import React from 'react';
import '../style/MyRentalItem.css'
import { useHistory } from 'react-router-dom'

const MyRentalItem = ({ rental }) => {
  
  const history = useHistory();
  const startDate = rental.startDate * 1000;
  const endDate = rental.endDate * 1000;


  return (
    <div className="myRentalItem" onClick={() => history.push("/residence/" + rental._id)}>
      <div className="img">
        <img src={rental.imageURLs[0]} alt=""/>
      </div>
      <div className="info">
        <p><span>Title: </span>{rental.title}</p>
        <p><span>Start date: </span>{new Date(startDate).toString().substr(0, 15)}</p>
        <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
        <p><span>Price/night: </span>{ rental.price }</p>
      </div>
      <div className="delete">
        <p className="deleteRes">❌</p>
      </div>
    </div>
  );
}

export default MyRentalItem;