import React, { useState, useContext, useEffect } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { useParams, useHistory } from 'react-router-dom'
import '../style/MyRentalDetail.css'

const MyRentalDetailPage = () => {

  const { id } = useParams();
  const { residences } = useContext(ResidenceContext);
  let residence = residences.find(r => r._id === id);
  const [percentOfBookings, setPercentOfBookings] = useState(null);

  useEffect(() => {
    if (residence) {
      setPercentOfBookings((residence.amountOfBookings / residence.views) * 100);
    }
  },[residences])

  const styleView = {
    height: residence.views + "%",
    maxHeight: "100%"
  }

   const styleBookedDays = {
    height: residence.bookedDays + "%",
    maxHeight: "100%"
  }

  return (
    <div className="myRentalDetailPage">
      {residence && <div className="images">
        {residence.imageURLs.map((img) => {
          return (<img key={img} src={img} alt="" />)
        })}
      </div>}
      {residence && <div className="inner">
        <div className="information">
          <div className="infoWrapper">
            <div className="desc">
              <p className="resTitle">{residence.title}</p>
              <p><span>Country: </span>{residence.country}</p>
              <p><span>City: </span>{residence.city}</p>
              <p><span>Address: </span>{residence.address}</p>
              <p><span>Type: </span>{residence.type}</p>
              <p><span>Price per night: </span>{residence.price}€</p>
              <p><span>Residence limit: </span>{residence.residenceLimit}</p>
              <p><span>Description: </span>{residence.description}</p>
            </div>
          </div>
        </div>
        <div className="statistics">
          <div className="statInfo">
          <p className="statisticsTitle">statistics</p>
          <p><span>Total booked days: </span>{residence.bookedDays.length}</p>
          <p><span>Pageviews: </span>{residence.views}</p>
          <p><span>Amount of bookings: </span>{residence.amountOfBookings}</p>
          <p><span>Total earnings: </span>{residence.earned}</p>
          {percentOfBookings && <p><span>Bookings procentage by pageviews: </span>{percentOfBookings.toFixed(2)}%</p>}
          </div>
          <div className="stats">
            <div style={styleView} className="statViews"></div>
            <div style={styleBookedDays} className="statBooked"></div>
        </div>
        </div>
      </div>}
    </div>
  );
}


export default MyRentalDetailPage;