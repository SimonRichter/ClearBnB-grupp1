import React, { useContext } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';

const ResidenceList = () => {

  const { residences } = useContext(ResidenceContext);

  return (
    <h1>{residences[0].title}</h1>
  );
}

export default ResidenceList;