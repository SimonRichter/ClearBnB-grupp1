import React, {useContext} from 'react';
import '../style/MyRentalItem.css'
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { useHistory } from 'react-router-dom'
import EqualizerIcon from '@material-ui/icons/Equalizer';

const MyRentalItem = ({ rental }) => {

  const { deleteResidence } = useContext(ResidenceContext);
  const history = useHistory();
  const startDate = rental.startDate * 1000;
  const endDate = rental.endDate * 1000;

  const deleteResidences = () => {
    deleteResidence(rental._id)
  }


  return (
    <div className="myRentalItem" onClick={() => history.push("/myRentalDetailPage/" + rental._id)}>
      <div className="img">
        <img src={rental.imageURLs[0]} alt=""/>
      </div>
      <div className="info">
        <p><span>Title: </span>{rental.title}</p>
        <p><span>Start date: </span>{new Date(startDate).toString().substr(0, 15)}</p>
        <p><span>End date: </span>{new Date(endDate).toString().substr(0, 15)}</p>
        <p><span>Price/night: </span>{ rental.price }€</p>
      </div>
      <div className="stats">
        <EqualizerIcon fontSize="large" className="statsSymbol" />
      </div>
    </div>
  );
}

export default MyRentalItem;