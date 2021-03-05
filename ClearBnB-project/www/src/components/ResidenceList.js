import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import ResidenceItem from './ResidenceItem';
import '../style/RecidenceList.css'

const ResidenceList = () => {

  const { residences } = useContext(ResidenceContext);

  return (
    <div className="residenceList">
      {residences.map(residence => (
        <ResidenceItem key={residence.id} residence={residence}/>
      ))}
    </div>
  );
}

export default ResidenceList;