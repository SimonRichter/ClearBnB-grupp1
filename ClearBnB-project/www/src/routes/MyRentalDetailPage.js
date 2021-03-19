import React, { useState, useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { useParams,useHistory } from 'react-router-dom'

const MyRentalDetailPage = () => {

  const { id } = useParams();
  const { residences, updateResidence } = useContext(ResidenceContext);
  let residence = residences.find(r => r._id === id);

  return (
    <div className="myRentalDetailPage">
      <h1>Rental detail {residence.title}</h1>
    </div>
  );
}

export default MyRentalDetailPage;