import React, {useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { BookingContext } from '../contexts/BookingContextProvider'
import { FeatureContext } from '../contexts/FeatureContextProvider'
import { UserContext } from '../contexts/UserContextProvider'
import DatePicker from 'react-datepicker'
import '../style/ResidenceDetails.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Lightbox } from "react-modal-image";
import { set } from 'mongoose';
 

const ResidenceDetails = () => {

  const history = useHistory();
  const { id } = useParams();
  const { residences, updateResidence } = useContext(ResidenceContext);
  const { whoAmI } = useContext(UserContext);
  const { addBooking } = useContext(BookingContext);
  const { getSpecificFeature,fetchFeatures } = useContext(FeatureContext);
  let residence = residences.find(r => r._id === id);

  const [features, setFeatures] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [unFilledFields, setunFilledFields] = useState(null);
  const [showConfirmPage, setShowConfirmPage] = useState(false);
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState(null);

  const bookResidence = () => {

    const startDateInMillis = Math.round(new Date(startDate).getTime() / 1000);
    const endDateInMillis = Math.round(new Date(endDate).getTime() / 1000);
    const oneDayInMillis = 86400000 / 1000;
    const allTheDaysBooked = [];

    if (startDate === null && endDate === null) {
      setunFilledFields(true);
      return;
    }
    
    setunFilledFields(false);
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setTotalPrice(differenceInDays * residence.price);

    for (let i = startDateInMillis; i <= endDateInMillis; i += oneDayInMillis){
      allTheDaysBooked.push(i);
    }

    const bookedDaysObj = {
      bookedDays: allTheDaysBooked
    }

    updateResidence(residence._id, bookedDaysObj);
    
    const bookingObj = {
      startDate: startDateInMillis,
      endDate: endDateInMillis,
      userId: whoAmI._id,
      residenceId: id,
      price: totalPrice
    }

    addBooking(bookingObj)

    setShowConfirmPage(true);
  }

  const filterForStartDate = date => {
    if (endDate === null) {
      if (residence.bookedDays !== null) {
        const day = Math.round(new Date(date).getTime() / 1000);
        return !residence.bookedDays.includes(day);
      }
      else {
        return true;
      }
    }
    if (residence.bookedDays !== null) {
      const day = Math.round(new Date(date).getTime() / 1000);
      const departureDate = Math.round(new Date(endDate).getTime() / 1000)
      return departureDate > day && !residence.bookedDays.includes(day)
    } else {
      const day = Math.round(new Date(date).getTime() / 1000);
      const departureDate = Math.round(new Date(endDate).getTime() / 1000)
      return departureDate > day;
    }  
  }

  const filterForEndDate = date => {
    if (residence.bookedDays !== null) {
      const day = Math.round(new Date(date).getTime() / 1000);
      const arrivalDate = Math.round(new Date(startDate).getTime() / 1000)
      return arrivalDate < day && !residence.bookedDays.includes(day)
    } else {
      const day = Math.round(new Date(date).getTime() / 1000);
      const arrivalDate = Math.round(new Date(startDate).getTime() / 1000)
      return arrivalDate < day;
    }  
  }


  useEffect(() => { 
    const startDateInMillis = Math.round(new Date(startDate).getTime() / 1000);
    const endDateInMillis = Math.round(new Date(endDate).getTime() / 1000);
    const oneDayInMillis = 86400000 / 1000;
    if (startDate !== null && endDate !== null) {
      setunFilledFields(false);
      let differenceInDays = 0;
      for (let i = startDateInMillis; i < endDateInMillis; i += oneDayInMillis){
        differenceInDays++;
      }
      
      if (residence.bookedDays) {
        let checkDoubles = [];
        let howManyDaysBooked = 0;
        residence.bookedDays.forEach(r => {
          if (r > startDateInMillis && r < endDateInMillis) {
            if (!checkDoubles.includes(r)) {
              howManyDaysBooked++;
              checkDoubles.push(r);
            }
          }
        });
        differenceInDays = differenceInDays - howManyDaysBooked;
      }
      setTotalPrice(differenceInDays * residence.price);
    } else {
      setTotalPrice(null);
    }
  }, [startDate, endDate])
  
  useEffect(() => {
    if (residence) {
        fetchFeatures().then((r) => {
          console.log('here', r);
          setFeatures(...getSpecificFeature(r,residence.featuresId));
        })
        //setFeatures(...getSpecificFeature(residence.featuresId));
    };    
  }, [residence])

  const closeLightbox = () => {
    setOpen(false);
  };
  
  const openLightbox = (img) => {
    setPicture(img.img);
    setOpen(true);
    console.log(img.img);
    console.log('här', open);
  }



  return (
    <div className="residenceDetail">

      {open && <Lightbox
        medium={picture}
        large="large"
        onClose={closeLightbox}
        hideDownload={false}
        showRotate={true}
        hideZoom={true}
      />}
      

      <button onClick={openLightbox} >Open Image</button>

      {!showConfirmPage && residence && <div className="inner">
        <div className="images">
          {residence.imageURLs.map((img) => {
      
            return (<img key={img} src={img} alt="" onClick={() => openLightbox({img})} />)
          })}
        </div>
        <div className="infoWrapper">
          <div className="desc">
            <p className="resTitle">{residence.title}</p>
            <p><span>Country: </span>{residence.country}</p>
            <p><span>City: </span>{residence.city}</p>
            <p><span>Address: </span>{residence.address}</p>
            <p><span>Type: </span>{residence.type}</p>
            <p><span>Price per night: </span>{residence.price}€</p>
            <p><span>Description: </span>{residence.description}</p>
          </div>
          {features && <div className="features">
            <p className={features.shower ? '' : 'dontExist'}><i className="material-icons">shower</i> Shower</p>
            <p className={features.firstAidKit ? '' : 'dontExist'}><i className="material-icons">healing</i> first aid kit</p>
            <p className={features.parking ? '' : 'dontExist'}><i className="material-icons">local_parking</i> parking</p>
            <p className={features.stove ? '' : 'dontExist'}><i className="material-icons">kitchen</i> stove</p>
            <p className={features.oven ? '' : 'dontExist'}><i className="material-icons">kitchen</i> oven</p>
            <p className={features.microwave ? '' : 'dontExist'}><i className="material-icons">kitchen</i> microwave</p>
            <p className={features.tv ? '' : 'dontExist'}><i className="material-icons">tv</i> TV</p>
            <p className={features.coffeeMaker ? '' : 'dontExist'}><i className="material-icons">free_breakfast</i> Coffee maker</p>
            <p className={features.wifi ? '' : 'dontExist'}><i className="material-icons">wifi</i> WiFi</p>
            <p className={features.balcony ? '' : 'dontExist'}><i className="material-icons">straighten</i> Balcony</p>
            <p className={features.iron ? '' : 'dontExist'}><i className="material-icons">scanner</i> Iron</p>
            <p className={features.pool ? '' : 'dontExist'}><i className="material-icons">pool</i> Pool</p>
            <p className={features.fridge ? '' : 'dontExist'}><i className="material-icons">kitchen</i> Fridge</p>
            <p className={features.dishwasher ? '' : 'dontExist'}><i className="material-icons">kitchen</i> Dishwasher</p>
          </div>}
        </div>
        {whoAmI && <div className="dates">
          <DatePicker className="startDate"
            placeholderText="Arrival.."
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={residence.startDate * 1000}
            maxDate={residence.endDate * 1000}
            filterDate={filterForStartDate}
            isClearable
          />
          <DatePicker className="endDate"
            placeholderText="Departure.."
            selected={endDate}
            onChange={date => setEndDate(date)}
            minDate={residence.startDate * 1000}
            maxDate={residence.endDate * 1000}
            filterDate={filterForEndDate}
            isClearable
          />
        </div>}
        {totalPrice && <p><span>Total price: </span>{totalPrice} €</p>}
        {unFilledFields && <p className="valCheck">You have to pick a start date and a end date to continue..</p>}
        {whoAmI && <button onClick={bookResidence} className="book-btn">Book</button>}
        {!whoAmI && <button className="book-btn" onClick={() => history.push("/login")}>Login to book</button>}
      </div>}
      {showConfirmPage && <div className="confirm">
        <h1>Thank you.</h1>
        <h4>Your booked residence was completed succsessfully.</h4>
        <img src={residence.imageURLs[0]} alt="" />
        <p><span>Address: </span>{ residence.address }</p>
        <p><span>Start date: </span>{new Date(startDate).toString().substr(0,15)}</p>
        <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
        <p><span>Total price: </span>{totalPrice} €</p>
        <div className="btns">
          <button onClick={() => history.push("/")}>Homepage</button>
          <button onClick={() => history.push("/myBookings")}>My bookings</button>
        </div>  
      </div>}
    </div>
  );
}

export default ResidenceDetails;