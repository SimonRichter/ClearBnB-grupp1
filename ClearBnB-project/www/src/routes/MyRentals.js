import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import MyRentalItem from '../components/MyRentalItem';
import '../style/MyRental.css'

const MyRentals = () => {

  const { whoAmI } = useContext(UserContext);
  const { residences } = useContext(ResidenceContext);

  const [rentals, setRentals] = useState(null);

  useEffect(() => {
    const myRentals = residences.filter(r => r.userId === whoAmI._id);
    setRentals([...myRentals]);
    console.log(rentals);
  },[])

  return (
    <div className="myRentals">
      {rentals && rentals.map(r => (<MyRentalItem key={r._id} rental={r}/>))}
    </div>
  );
}

export default MyRentals;