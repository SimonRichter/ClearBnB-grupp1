import React, { useState, useRef, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import '../style/AddResidenceStyle.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from '../contexts/UserContextProvider'
import { FeatureContext } from '../contexts/FeatureContextProvider';
import { ResidenceContext } from '../contexts/ResidenceContextProvider'
import Modal from '@material-ui/core/Modal';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


const AddResidence = () => {

  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
          history.push("/")
        }
  });
  },[]);

  const history = useHistory();
  const { addFeature } = useContext(FeatureContext)
  const { addResidence } = useContext(ResidenceContext)
  const { whoAmI, whoIsOnline } = useContext(UserContext);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [open, setOpen] = useState(false);

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
  const priceRef = useRef(20);

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  
    const feature1 = useRef();
    const feature2 = useRef();
    const feature3 = useRef();
    const feature4 = useRef();
    const feature5= useRef();
    const feature6 = useRef();
    const feature7 = useRef();
    const feature8 = useRef();
    const feature9 = useRef();
    const feature10 = useRef();
    const feature11 = useRef();
    const feature12 = useRef();
    const feature13 = useRef();
    const feature14 = useRef();

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const submitHandler = async(e) => {
     e.preventDefault();
    let optTyp = optType.current.value;
    const theTitle = adTitle.current.value;
    const theCountry = countryRef.current.value;
    const theCity = cityRef.current.value;
    const theAdress = adressRef.current.value;
    const theDescription = descriptionRef.current.value;
    const theStartDate = Math.floor(selectedStartDate / 1000);
    const theEndDate = Math.floor(selectedEndDate / 1000);
    const thePrice = priceRef.current.value;
    const images =
    [imageRef1.current.value,
    imageRef2.current.value,
    imageRef3.current.value,
    imageRef4.current.value,
    imageRef5.current.value];

    const features = {
      firstAidKit: feature1.current.value === "true" ? true : false,
      shower: feature2.current.value === "true" ? true : false,
      parking: feature3.current.value === "true" ? true : false,
      stove: feature4.current.value === "true" ? true : false,
      oven: feature5.current.value === "true" ? true : false,
      microwave: feature6.current.value === "true" ? true : false,
      tv: feature7.current.value === "true" ? true : false,
      coffeeMaker: feature8.current.value === "true" ? true : false,
      wifi: feature9.current.value === "true" ? true : false,
      balcony: feature10.current.value === "true" ? true : false,
      iron: feature11.current.value === "true" ? true : false,
      pool: feature12.current.value === "true" ? true : false,
      fridge: feature13.current.value === "true" ? true : false,
      dishwasher: feature14.current.value === "true" ? true : false,
    }
    const featureObj = await addFeature(features);
    
    const residence = {
      title: theTitle,
      price: +thePrice,
      country: theCountry,
      city: theCity,
      address: theAdress,
      type: optTyp,
      description: theDescription,
      startDate: theStartDate,
      endDate: theEndDate,
      imageURLs: images,
      featuresId: featureObj._id,
      userId: whoAmI._id,
      residenceLimit: guests,
      bookedDays: null,
      earned: null,
      views: null
    }
    addResidence(residence)
    console.log(residence);
    history.push('/myRentals');
    
  
  }

  const addFeatureHandler = ()=> {isChecked === false ? setIsChecked(true) : setIsChecked(false)}

  const addFeatureHandler2 = ()=> {isChecked2 === false ? setIsChecked2(true) : setIsChecked2(false)}

  const addFeatureHandler3 = ()=> {isChecked3 === false ? setIsChecked3(true) : setIsChecked3(false)}
  
  const addFeatureHandler4 = ()=> {isChecked4 === false ? setIsChecked4(true) : setIsChecked4(false)}
  
  const addFeatureHandler5 = ()=> {isChecked5 === false ? setIsChecked5(true) : setIsChecked5(false)}
  
  const addFeatureHandler6 = ()=> {isChecked6 === false ? setIsChecked6(true) : setIsChecked6(false)}
  
  const addFeatureHandler7 = ()=> {isChecked7 === false ? setIsChecked7(true) : setIsChecked7(false)}

  const addFeatureHandler8 = ()=> {isChecked8 === false ? setIsChecked8(true) : setIsChecked8(false)}
  
  const addFeatureHandler9 = ()=> {isChecked9 === false ? setIsChecked9(true) : setIsChecked9(false)}
  
  const addFeatureHandler10 = ()=> {isChecked10 === false ? setIsChecked10(true) : setIsChecked10(false)}

  const addFeatureHandler11 = ()=> {isChecked11 === false ? setIsChecked11(true) : setIsChecked11(false) }
   
  const addFeatureHandler12 = ()=> {isChecked12 === false ? setIsChecked12(true) : setIsChecked12(false)}
  
  const addFeatureHandler13 = ()=> {isChecked13 === false ? setIsChecked13(true) : setIsChecked13(false) }

  const addFeatureHandler14 = ()=> {isChecked14 === false ? setIsChecked14(true) : setIsChecked14(false)}

// Modal --------------------
  function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline:'none' // Tar bort modal-outline
  },
}));
  
const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseRoundedIcon onClick={handleClose} />
      <h2 id="simple-modal-title">Terms and Conditions</h2><hr/>
      <ul id="simple-modal-description">
       <li> §1. ClearBnB has the right to remove the account if they suspect any ilegal behavior.</li>
      <li>§2. If you host a residence you are allowed to remove it if needed.</li>
        <li>§3. ClearBnB don't tolerates any type of spamming a residence.</li>
        <li>§4. A user is allowed to host more then one residence at the time.</li>
      </ul>
 
    </div>
  );

  // End of Modal ---------------
  return (
    <div className="addResWrapper">
      <form onSubmit={submitHandler}>
        <img className="logoHost" src="https://i.postimg.cc/020TTsWC/logo-transparent-2.png" alt=""/>
        <hr/>
      <h3>What type of recidense would you like to host?</h3>
        <select required className="optionBar">
        <option className="optValue" value="" disabled="disabled" selected="selected">Type of residence</option>
        <option ref={optType}>House</option>
        <option ref={optType}>Apartment</option>
        <option ref={optType}>Cabin</option>
        <option ref={optType}>Tent</option>
        <option ref={optType}>Mansion</option>
          <option ref={optType}>Trailer</option>
        </select>
        
     
      
        <div className="guestDiv">
         <button className="decGuests" onClick={decGuestHanlder}>－</button>
           <span className="numberOfGuests">Guests: {guests}</span>
         <button className="incGuests" onClick={incGuestHandler}>＋</button>
        </div>

        <p className="advTitle">Advertisment title</p>
        <input required ref={adTitle} className="inputTitle" type="text" placeholder="exmaple: 'Luxuary Cabin with jazuzzi'" />

      
     
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
        <input required ref={countryRef} className="inputTitle" type="text" placeholder="Country" />
        <input required ref={cityRef} className="inputTitle" type="text" placeholder="City" />
        <input required ref={adressRef} className="inputTitle" type="text" placeholder="Adress" />

         <p>Upload image-links</p> 
        <input required ref={imageRef1} className="inputTitle" type="text" placeholder="image 1" />
        <input ref={imageRef2} className="inputTitle" type="text" placeholder="image 2 (optional)" />
        <input ref={imageRef3} className="inputTitle" type="text" placeholder="image 3 (optional)" />
        <input ref={imageRef4} className="inputTitle" type="text" placeholder="image 4 (optional)" />
        <input ref={imageRef5} className="inputTitle" type="text" placeholder="image 5 (optional)" />

        <p>Description</p> 
        <textarea required ref={descriptionRef} className="textBox" placeholder="Describe your residence..." name="w3review" rows="4" cols="50"></textarea>
        
        <p>Price per night</p>
        <input ref={priceRef} className="inputPrice" required type="number" min="20" placeholder="MIN 20" /><span>€</span>

        <div className="datePickerDiv">
          <p>Select hosting date</p>
          <DatePicker className="startDate"
            required
            placeholderText={'Start Date'}
            selected={selectedStartDate}
            onChange={date => setSelectedStartDate(date)}
            minDate={new Date()}
            isClearable
          />
          <DatePicker className="endDate"
            required
            placeholderText={'End Date'}
            selected={selectedEndDate}
            onChange={date => setSelectedEndDate(date)}
            minDate={selectedStartDate}
            isClearable     
          />    
        </div>

        <div className="termsDiv">
          <label>
            <input type="checkbox" required value="" /><i className="helper" ></i>Terms & Conditions. 
        </label><InfoIcon fontSize="small" color="disabled" onClick={handleOpen}/>
        </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        
        <button className="createBtn">Host Residence</button>
      </form>
    </div>
  )
}


export default AddResidence;