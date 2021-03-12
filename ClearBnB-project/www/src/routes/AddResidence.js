import React, { useState, useRef, useEffect }from 'react';
import '../style/AddResidenceStyle.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Login from './Login';



const AddResidence = () => {


  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);
  const [isChecked13, setIsChecked13] = useState(false);
  const [isChecked14, setIsChecked14] = useState(false);

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
  
    const feature1 = useRef(false);
    const feature2 = useRef(false);
    const feature3 = useRef(false);
    const feature4 = useRef(false);
    const feature5= useRef(false);
    const feature6 = useRef(false);
    const feature7 = useRef(false);
    const feature8 = useRef(false);
    const feature9 = useRef(false);
    const feature10 = useRef(false);
    const feature11 = useRef(false);
    const feature12 = useRef(false);
    const feature13 = useRef(false);
    const feature14 = useRef(false);

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
    const theStartDate = Math.floor(selectedStartDate / 1000);
    const theEndDate = Math.floor(selectedEndDate / 1000);

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
      description: theDescription,
      startDate: theStartDate,
      endDate: theEndDate
    }
  
   
    console.log(residence);

    const features = {
      firstAidKit: feature1.current.value,
      shower: feature2.current.value,
      parking: feature3.current.value,
      stove: feature4.current.value,
      oven: feature5.current.value,
      microwave: feature6.current.value,
      tv: feature7.current.value,
      coffeeMaker: feature8.current.value,
      wifi: feature9.current.value,
      balcony: feature10.current.value,
      iron: feature11.current.value,
      pool: feature12.current.value,
      fridge: feature13.current.value,
      dishwasher: feature14.current.value
    }
    console.log("object", features);
  }

  const addFeatureHandler = () => {
   if (isChecked === false) {
      setIsChecked(true)
    } 
    if (isChecked === true) {
      setIsChecked(false);
    }
  }

  const addFeatureHandler2 = () => {
    if (isChecked2 === false) {
      setIsChecked2(true)
    } 
    if (isChecked2 === true) {
      setIsChecked2(false);
  }
  }

   const addFeatureHandler3 = () => {
    if (isChecked3 === false) {
      setIsChecked3(true)
    } 
    if (isChecked3 === true) {
      setIsChecked3(false);
  }
   }
  
    const addFeatureHandler4 = () => {
    if (isChecked4 === false) {
      setIsChecked4(true)
    } 
    if (isChecked4 === true) {
      setIsChecked4(false);
  }
    }
  
     const addFeatureHandler5 = () => {
    if (isChecked5 === false) {
      setIsChecked5(true)
    } 
    if (isChecked5 === true) {
      setIsChecked5(false);
  }
     }
  
  const addFeatureHandler6 = () => {
    if (isChecked6 === false) {
      setIsChecked6(true)
    } 
    if (isChecked6 === true) {
      setIsChecked6(false);
  }
  }
  
  const addFeatureHandler7 = () => {
    if (isChecked7 === false) {
      setIsChecked7(true)
    }
    if (isChecked7 === true) {
      setIsChecked7(false);
    }
  }

   const addFeatureHandler8 = () => {
    if (isChecked8 === false) {
      setIsChecked8(true)
    }
    if (isChecked8 === true) {
      setIsChecked8(false);
    }
   }
  
   const addFeatureHandler9 = () => {
    if (isChecked9 === false) {
      setIsChecked9(true)
    }
    if (isChecked9 === true) {
      setIsChecked9(false);
    }
   }
  
  const addFeatureHandler10 = () => {
    if (isChecked10 === false) {
      setIsChecked10(true)
    }
    if (isChecked10 === true) {
      setIsChecked10(false);
    }
  }

   const addFeatureHandler11 = () => {
    if (isChecked11 === false) {
      setIsChecked11(true)
    }
    if (isChecked11 === true) {
      setIsChecked11(false);
    }
   }
   const addFeatureHandler12 = () => {
    if (isChecked12 === false) {
      setIsChecked12(true)
    }
    if (isChecked12 === true) {
      setIsChecked12(false);
    }
   }
   const addFeatureHandler13 = () => {
    if (isChecked13 === false) {
      setIsChecked13(true)
    }
    if (isChecked13 === true) {
      setIsChecked13(false);
    }
   }

   const addFeatureHandler14 = () => {
    if (isChecked14 === false) {
      setIsChecked14(true)
    }
    if (isChecked14 === true) {
      setIsChecked14(false);
    }
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
            <input type="checkbox" onClick={addFeatureHandler} ref={feature1} value={isChecked}  /><i className="helper" ></i>First-Aid Kit
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler2} ref={feature2} value={isChecked2} /><i className="helper" ></i>Shower
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler3} ref={feature3} value={isChecked3} /><i className="helper" ></i>Parking
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler4} ref={feature4} value={isChecked4} /><i className="helper"></i>Stove
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler5} ref={feature5} value={isChecked5} /><i className="helper"></i>Oven
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler6} ref={feature6} value={isChecked6} /><i className="helper"></i>Microwave
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler7} ref={feature7} value={isChecked7} /><i className="helper"></i>Tv
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler8} ref={feature8} value={isChecked8} /><i className="helper"></i>Coffee maker
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler9} ref={feature9} value={isChecked9} /><i className="helper"></i>WIFI
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler10} ref={feature10} value={isChecked10} /><i className="helper"></i>Balcony
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler11} ref={feature11} value={isChecked11} /><i className="helper"></i>Iron
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler12} ref={feature12} value={isChecked12} /><i className="helper"></i>Pool
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler13} ref={feature13} value={isChecked13} /><i className="helper"></i>Fridge
        </label>
          <label>
            <input type="checkbox" onClick={addFeatureHandler14} ref={feature14} value={isChecked14} /><i className="helper"></i>Dishwasher
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
        <span>€</span><input className="inputPrice" type="number" step="20" min="20" placeholder="Price (min 20€)" />

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