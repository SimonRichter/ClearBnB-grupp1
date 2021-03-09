import React, { useState }from 'react';
import '../style/AddResidenceStyle.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const AddResidence = () => {

  const [selectedDate, setSelectedDate] = useState(null);
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
      <option class="optValue" value="" disabled="disabled" selected="selected">Choose</option>
        <option value="1">House</option>
        <option value="2">Apartment</option>
        <option value="3">Cabin</option>
        <option value="4">Tent</option>
        <option value="5">Mansion</option>
          <option value="6">Igloo</option>
          <option value="7">Trailer</option>
          <option value="8">Unique/Other</option>
      </select>
     
      
        <div className="guestDiv">
        <button className="incGuests" onClick={incGuestHandler}>＋</button>
        <span className="numberOfGuests">Guests: {guests}</span>
        <button className="decGuests" onClick={decGuestHanlder}>－</button>
        </div>

        <p className="advTitle">Advertisment title</p>
        <input className="inputTitle" type="text" placeholder="exmaple: 'Luxuary Cabin with jazuzzi'" />

      <div class="checkbox">
        <label>
            <input type="checkbox" /><i class="helper"></i>First-Aid Kit
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Shower
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Parking
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Stove
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Oven
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Microwave
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Tv
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Coffee maker
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>WIFI
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Balcony
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Iron
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Pool
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Fridge
        </label>
          <label>
            <input type="checkbox" /><i class="helper"></i>Dishwasher
        </label>
        </div>
        
        <p>Location information</p>
        <input className="inputTitle" type="text" placeholder="Country" />

        <input className="inputTitle" type="text" placeholder="City" />

        <input className="inputTitle" type="text" placeholder="Adress" />

         <p>Upload image-links</p> 
        <input className="inputTitle" type="text" placeholder="image 1" />

        <input className="inputTitle" type="text" placeholder="image 2" />

        <input className="inputTitle" type="text" placeholder="image 3" />

        <input className="inputTitle" type="text" placeholder="image 4" />

        <input className="inputTitle" type="text" placeholder="image 5" />

        <p>Description</p> 
        <textarea className="textBox" placeholder="Describe your residence..." name="w3review" rows="4" cols="50"></textarea>
        
        <p>Price per night</p>
        <span>€</span><input className="inputPrice" type="number" step="20" placeholder="Price per night" />

        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        
        <button className="createBtn">Create Residence</button>
      </form>
    </div>
  )
}


export default AddResidence;