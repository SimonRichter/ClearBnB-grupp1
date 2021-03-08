import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import DatePicker from 'react-datepicker'
import '../style/ResidenceDetails.css'
import 'react-datepicker/dist/react-datepicker.css'

const ResidenceDetails = () => {

  const { id } = useParams()
  const { residences } = useContext(ResidenceContext);
  const residence = residences.find(r => r._id === id);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [unFilledFields, setunFilledFields] = useState(null);

  const bookResidence = () => {

    if (startDate === null && endDate === null) {
      setunFilledFields(true);
      return;
    }    
    setunFilledFields(false);
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setTotalPrice(differenceInDays * residence.price);

    const bookingObj = {
      startDate: startDate,
      endDate: endDate,
      price: totalPrice,
      userId: null,
      residenceId: id,
    }
    
  }

  const filterForStartDate = date => {
    if (endDate === null) {
      return true;
    }
    const day = Math.round(new Date(date).getTime() / 1000);
    const departureDate = Math.round(new Date(endDate).getTime() / 1000)
    return departureDate > day
  }

  const filterForEndDate = date => {
    const day = Math.round(new Date(date).getTime() / 1000);
    const arrivalDate = Math.round(new Date(startDate).getTime() / 1000)
    return arrivalDate < day
  }


  useEffect(() => {    
    if (startDate !== null && endDate !== null) {
      setunFilledFields(false);
      const differenceInTime = endDate.getTime() - startDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setTotalPrice(differenceInDays * residence.price);
    } else {
      setTotalPrice(null);
    }


  },[startDate,endDate])

  return (
    <div className="residenceDetail">
      <div className="images">
      {residence.imageURLs.map((img) => {
        return (<img key={img} src={img} alt=""/>)
      })}
      </div>
      <h1>{residence.title}</h1>
      <p><span>Country: </span>{residence.country}</p>
      <p><span>City: </span>{residence.city}</p>
      <p><span>Address: </span>{residence.address}</p>
      <p><span>Type: </span>{residence.type}</p>
      <p><span>Price per night: </span>{residence.price}€</p>
      <p><span>Description: </span>{residence.description}</p>
      <div className="dates">
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
      </div>
      {totalPrice && <p><span>Total price: </span>{totalPrice} €</p>}
      {unFilledFields && <p className="valCheck">You have to pick a start date and a end date to continue..</p>}
      <button onClick={bookResidence} class="book-btn">Book</button>
    </div>
  );
}

export default ResidenceDetails;