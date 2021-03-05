import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';

const ResidenceDetails = () => {
  const { id } = useParams()
  const { residences } = useContext(ResidenceContext);
  const residence = residences.find(r => r._id === id);

  return (
    <h1>{residence.title}</h1>
  );
}

export default ResidenceDetails;