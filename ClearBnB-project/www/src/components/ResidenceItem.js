import React from 'react'
import { useHistory } from 'react-router-dom'

import '../style/ResidenceItem.css';

const ResidenceItem = ({ residence }) => {
  const history = useHistory()

  const goToDetailPage = () => {
    history.push('/residence/' + residence._id)
  }

  return (
    <div className="residenceItem" onClick={goToDetailPage}>
      <img src={residence.imageURLs[0]} alt="" />
      <h4>{ residence.title }</h4>
    </div>
  )
}

export default ResidenceItem;