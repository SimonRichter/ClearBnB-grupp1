import React, { useState, useContext, useEffect } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { useParams, useHistory } from 'react-router-dom'
import '../style/MyRentalDetail.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const MyRentalDetailPage = () => {

  const { id } = useParams();
  const { residences } = useContext(ResidenceContext);
  let residence = residences.find(r => r._id === id);
  const [percentOfBookings, setPercentOfBookings] = useState(null);
  const [styleView, setStyleView] = useState(null)
  const [styleBookedDays, setStyleBookedDays] = useState(null)
  const [styleBookings, setStyleBookings] = useState(null)
  const [stylePercent, setStylePercent] = useState(null)

  useEffect(() => {
    if (residence) {
      if (residence.amountOfBookings === null) {
        setPercentOfBookings(null);
      } else {
        setPercentOfBookings((residence.amountOfBookings / residence.views) * 100);
      }

      setStyleView({
        height: residence.views ? residence.views + "%" : 1,
        maxHeight: "100%"
      });

      setStyleBookedDays({
        height: residence.bookedDays ? residence.bookedDays + "%" : 1,
        maxHeight: "100%"
      });

      setStyleBookings({
        height: residence.amountOfBookings ? residence.amountOfBookings + "%" : 1,
        maxHeight: "100%"
      });

      setStylePercent({
        height: percentOfBookings ? percentOfBookings + "%" : 1,
        maxHeight: "100%"
      })
    }
  }, [residences,percentOfBookings])
  
  const LightTooltip = withStyles((theme) => ({
      tooltip: {
        backgroundColor: "#f50057",
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 15,
      },
  }))(Tooltip);


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
          <p className="statisticsTitle">statistics <EqualizerIcon size="large"/></p>
          <p><span>Total booked days: </span>{residence.bookedDays ? residence.bookedDays.length : 0}</p>
          <p><span>Pageviews: </span>{residence.views ? residence.views : 0}</p>
          <p><span>Amount of bookings: </span>{residence.amountOfBookings ? residence.amountOfBookings : 0}</p>
          <p><span>Total earnings: </span>{residence.earned ? residence.earned : 0} €</p>
            {percentOfBookings ? <p><span>Bookings procentage by pageviews: </span>{percentOfBookings.toFixed(2)}%</p> : 
          <p><span>Bookings procentage by pageviews: </span>0%</p> }
          </div>
          <div className="stats">
                 
            <LightTooltip title={residence.views ? "Pageviews: " + residence.views :"Pageviews: " +  0}>
            <div style={styleView} className="statViews"></div>
            </LightTooltip>

            <LightTooltip title={residence.bookedDays.length ? "Days booked: " + residence.bookedDays.length :"Days booked: " +  0}>
            <div style={styleBookedDays} className="statBooked"></div>
            </LightTooltip>
            
            <LightTooltip title={residence.amountOfBookings ? "Amount of bookings: " + residence.amountOfBookings :"Amount of bookings: " +  0}>
            <div style={styleBookings} className="statBookings"></div>
            </LightTooltip>

            {percentOfBookings && <LightTooltip title={"Percent of bookings/views: " + percentOfBookings.toFixed(2) + "%"}>
              <div style={stylePercent} className="statPercent"></div>
            </LightTooltip>}

            {!percentOfBookings && <LightTooltip title={"Percent of bookings/views: " + "0 %"}>
              <div style={stylePercent} className="statPercent"></div>
            </LightTooltip>}

        </div>
        </div>
      </div>}
    </div>
  );
}


export default MyRentalDetailPage;