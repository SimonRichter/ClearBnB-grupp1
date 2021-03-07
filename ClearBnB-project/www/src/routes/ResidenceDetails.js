import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import DatePicker from 'react-datepicker'
import '../style/ResidenceDetails.css'
import 'react-datepicker/dist/react-datepicker.css'

const ResidenceDetails = () => {

  const { id } = useParams()
  const { residences } = useContext(ResidenceContext);
  const residence = residences.find(r => r._id === id);
  const pricePerNight = residences.price

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const bookResidence = () => {

    const DifferenceInTime = endDate.getTime() - startDate.getTime();
    const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

    

  }

  const booked = date => { 
    const day = Math.round(new Date(date).getTime() / 1000);
    return day !== 1614639600
  }

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
      <p><span>Address: </span>{residence.adress}</p>
      <p><span>Type: </span>{residence.type}</p>
      <p><span>Price per night: </span>{pricePerNight}</p>
      <p><span>Description: </span>{residence.description}</p>
      <div className="dates">
        <DatePicker className="startDate"
          placeholderText="Arrival.."
          selected={startDate}
          onChange={date => setStartDate(date)}
          minDate={residence.startDate * 1000}
          maxDate={residence.endDate * 1000}
          filterDate={booked}
        />
        <DatePicker className="endDate"
          placeholderText="Departure.."
          selected={endDate}
          onChange={date => setEndDate(date)}
          minDate={residence.startDate * 1000}
          maxDate={residence.endDate * 1000}
          filterDate={booked}
          />
      </div>
      <button onClick={bookResidence} class="book-btn">Book</button>
    </div>
  );
}

export default ResidenceDetails;