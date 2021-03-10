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
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const adressRef = useRef(null);
  const descriptionRef = useRef(null);

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);

  

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
    const theCountry = countryRef.current.value;
    const theCity = cityRef.current.value;
    const theAdress = adressRef.current.value;
    const theDescription = descriptionRef.current.value;
    const images =
    [imageRef1.current.value,
    imageRef2.current.value,
    imageRef3.current.value,
    imageRef4.current.value,
    imageRef5.current.value];

    const residence = {
      type: optTyp,
      residenceLimit: guests,
      title: theTitle,
      country: theCountry,
      city: theCity,
      adress: theAdress,
      imageURLs: [images],
      description: theDescription
    }

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
        <label>
            <input type="checkbox"  /><i className="helper"></i>First-Aid Kit
        </label>
          <label>
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
        <input ref={countryRef} className="inputTitle" type="text" placeholder="Country" />
        <input ref={cityRef} className="inputTitle" type="text" placeholder="City" />
        <input ref={adressRef} className="inputTitle" type="text" placeholder="Adress" />

         <p>Upload image-links</p> 
        <input ref={imageRef1} className="inputTitle" type="text" placeholder="image 1" />
        <input ref={imageRef2} className="inputTitle" type="text" placeholder="image 2" />
        <input ref={imageRef3} className="inputTitle" type="text" placeholder="image 3" />
        <input ref={imageRef4} className="inputTitle" type="text" placeholder="image 4" />
        <input ref={imageRef5} className="inputTitle" type="text" placeholder="image 5" />

        <p>Description</p> 
        <textarea ref={descriptionRef} className="textBox" placeholder="Describe your residence..." name="w3review" rows="4" cols="50"></textarea>
        
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