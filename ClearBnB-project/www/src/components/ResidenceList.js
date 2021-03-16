import React from 'react';
import ResidenceItem from './ResidenceItem';
import '../style/RecidenceList.css'

const ResidenceList = ({residences}) => {

  return (
    <div className="residenceList">
      {residences.map(residence => (
        <ResidenceItem key={residence._id} residence={residence}/>
      ))}
    </div>
  );
}

export default ResidenceList;