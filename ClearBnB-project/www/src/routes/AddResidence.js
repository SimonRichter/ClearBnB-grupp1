import React, { useState }from 'react';
import '../style/AddResidenceStyle.css';



const AddResidence = () => {

  const [guests, setGuests] = useState(1);

  const incGuestHandler = () => {
      setGuests(guests + 1); 
  }

  const decGuestHanlder = () => {
    if (guests <= 1) {
      setGuests(1);
    } else {
      setGuests(guests-1);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="addResWrapper">
      <form onSubmit={submitHandler}>
      <h3>What type of recidense would you like to host?</h3>
      <select className="optionBar">
      <option value="" disabled="disabled" selected="selected">Choose</option>
        <option value="1">House</option>
        <option value="2">Apartment</option>
        <option value="3">Cabin</option>
        <option value="4">Tent</option>
        <option value="5">Mansion</option>
        <option value="6">Igloo</option>
      </select>
     
      
        <div className="guestDiv">
        <button className="incGuests" onClick={incGuestHandler}>＋</button>
        <span className="numberOfGuests">Guests: {guests}</span>
        <button className="decGuests" onClick={decGuestHanlder}>－</button>
        </div>

      </form>
    </div>
  )
}


export default AddResidence;