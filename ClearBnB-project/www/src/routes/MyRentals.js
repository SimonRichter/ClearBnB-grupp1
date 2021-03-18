import React, { useContext, useEffect, useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider';
import MyRentalItem from '../components/MyRentalItem';
import { useHistory } from 'react-router-dom'
import '../style/MyRental.css'

const MyRentals = () => {

  const { whoAmI, whoIsOnline } = useContext(UserContext);
  const { residences,fetchResidences } = useContext(ResidenceContext);
  const history = useHistory();
  const [rentals, setRentals] = useState(null);

  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
          history.push("/")
      }
      fetchResidences().then(() => {
      const myRentals = residences.filter(r => r.userId === whoAmI._id);
      setRentals([...myRentals]);
    });
  });
    
  }, [])
  
  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
          history.push("/login")
      } else {
        const myRentals = residences.filter(r => r.userId === whoAmI._id);
        setRentals([...myRentals]);
        }
  });
    

  },[residences])

  return (
    <div className="myRentals">
      {rentals && rentals.map(r => (<MyRentalItem key={r._id} rental={r}/>))}
    </div>
  );
}

export default MyRentals;