import React from 'react'
import '../style/ResidenceItem.css';

const ResidenceItem = ({residence}) => {
  return (
    <div className="residenceItem">
      <img src={residence.imageURLs[0]} alt="" />
      <h4>{ residence.title }</h4>
    </div>
  )
}

export default ResidenceItem;