import React from 'react'
import { useHistory } from 'react-router-dom'

import '../style/ResidenceItem.css';

const ResidenceItem = ({ residence }) => {
  const history = useHistory()

  const goToDetailPage = () => {
    history.push('/residence/' + residence._id)
  }

  return (
    <div className="flip-card" onClick={goToDetailPage}>
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src={residence.imageURLs[0]} alt="" />
          <p>{residence.title}</p>
      </div>
        <div class="flip-card-back">
        <p><span>Country: </span>{residence.country}</p>
        <p><span>City: </span>{residence.city}</p>
        <p><span>Address: </span>{residence.address}</p>
        <p><span>Price per night: </span>{residence.price}€</p>
        </div>
    </div>
  </div>
  )
}

export default ResidenceItem;