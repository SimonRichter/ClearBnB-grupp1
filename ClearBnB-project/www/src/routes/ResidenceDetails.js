import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import '../style/ResidenceDetails.css'

const ResidenceDetails = () => {
  const { id } = useParams()
  const { residences } = useContext(ResidenceContext);
  const residence = residences.find(r => r._id === id);

  return (
    <div className="residenceDetail">
      <div className="images">
      {residence.imageURLs.map((img) => {
        return (<img key={img} src={img} alt=""/>)
      })}
      </div>
      <h1>{residence.title}</h1>
      <p><span>City: </span>{residence.city}</p>
      <p><span>Country: </span>{residence.country}</p>
      <p><span>Adress: </span>{residence.adress}</p>
      <p><span>Type: </span>{residence.type}</p>
      <p><span>Description: </span>{residence.description}</p>
    </div>
  );
}

export default ResidenceDetails;