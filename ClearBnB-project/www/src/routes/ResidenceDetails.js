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

  const [selectedDate, setSelectedDate] = useState(residence.startDate * 1000);

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
      <p><span>Description: </span>{residence.description}</p>
      <DatePicker selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        minDate={residence.startDate * 1000}
        maxDate={residence.endDate * 1000}
      />
    </div>
  );
}

export default ResidenceDetails;