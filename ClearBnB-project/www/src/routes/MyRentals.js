import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider'

const MyRentals = () => {

  const { whoAmI } = useContext(UserContext);
  const { residences } = useContext(ResidenceContext);

  const [rentals, setRentals] = useState(null);

  useEffect(() => {
    const myRentals = residences.filter(r => r.userId === whoAmI._id);
    console.log('id', whoAmI._id);
    console.log('correct',myRentals);
  },[])

  return (
    <div className="myRentals">
      <h1>My rentals</h1>
    </div>
  );
}

export default MyRentals;