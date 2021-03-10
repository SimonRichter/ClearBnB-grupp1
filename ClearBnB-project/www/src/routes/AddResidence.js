import React, { useState, useRef }from 'react';
import '../style/AddResidenceStyle.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const AddResidence = () => {

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [guests, setGuests] = useState(1);



  const optType = useRef(null);
  const adTitle = useRef(null);
  const checkboxes = useRef([]);

  const incGuestHandler = (e) => {
    e.preventDefault();
      setGuests(guests + 1); 
  }

  const decGuestHanlder = (e) => {
    e.preventDefault();
    if (guests <= 1) {
      setGuests(1);
    } else {
      setGuests(guests-1);
    }
  }


  const submitHandler = (e) => {
     e.preventDefault();
    let optTyp = optType.current.value;
    const theTitle = adTitle.current.value;
    const checkboxe = checkboxes.current.value; 

    const residence = {
      type: optTyp,
      residenceLimit: guests,
      title: theTitle,
      features: checkboxe
    }
    console.log('här', checkboxes.current.value );
    console.log(residence);
  }

  return (
    <div className="addResWrapper">
      <form onSubmit={submitHandler}>
      <h3>What type of recidense would you like to host?</h3>
        <select className="optionBar">
        <option class="optValue" value="" disabled="disabled" selected="selected">Choose</option>
        <option ref={optType}>House</option>
        <option ref={optType}>Apartment</option>
        <option ref={optType}>Cabin</option>
        <option ref={optType}>Tent</option>
        <option ref={optType}>Mansion</option>
        <option ref={optType}>Iglo</option>
        <option ref={optType}>Trailer</option>
      </select>
     
      
        <div className="guestDiv">
        <button className="incGuests" onClick={incGuestHandler}>＋</button>
        <span className="numberOfGuests">Guests: {guests}</span>
        <button className="decGuests" onClick={decGuestHanlder}>－</button>
        </div>

        <p className="advTitle">Advertisment title</p>
        <input ref={adTitle} className="inputTitle" type="text" placeholder="exmaple: 'Luxuary Cabin with jazuzzi'" />

      <div className="checkbox">
        <label ref={checkboxes} value="firstAidKit">
            <input type="checkbox" /><i className="helper"></i>First-Aid Kit
        </label>
          <label ref={checkboxes}>
            <input type="checkbox" /><i className="helper"></i>Shower
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Parking
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Stove
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Oven
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Microwave
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Tv
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Coffee maker
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>WIFI
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Balcony
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Iron
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Pool
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Fridge
        </label>
          <label>
            <input type="checkbox" /><i className="helper"></i>Dishwasher
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

        <div className="datePickerDiv">
          <p>Select hosting date</p>
          <DatePicker
            placeholderText={'Start Date'}
            selected={selectedStartDate}
            onChange={date => setSelectedStartDate(date)}
            minDate={new Date()}
            isClearable
          />
          <DatePicker
            placeholderText={'End Date'}
            selected={selectedEndDate}
            onChange={date => setSelectedEndDate(date)}
            minDate={selectedStartDate}
            isClearable
            
          />
        </div>
        
        <button className="createBtn">Create Residence</button>
      </form>
    </div>
  )
}


export default AddResidence;