import React, { useState, useContext, useEffect, useRef } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import { UserContext } from '../contexts/UserContextProvider'
import { useParams, useHistory } from 'react-router-dom'
import '../style/MyRentalDetail.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { makeStyles } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';

const MyRentalDetailPage = () => {

  const history = useHistory();
  const passwordRef = useRef(null);
  const editCountryRef = useRef(null);
  const editTitleRef = useRef(null);
  const editCityRef = useRef(null);
  const editPriceRef = useRef(null);
  const editDescRef = useRef(null);
  const editTypeRef = useRef(null);
  const editAddressRef = useRef(null);
  const editLimitRef = useRef(null);
  const { id } = useParams();
  const { whoAmI } = useContext(UserContext);
  const { residences,confirmDelete,deleteResidence,updateResidence } = useContext(ResidenceContext);
  let residence = residences.find(r => r._id === id);
  const [percentOfBookings, setPercentOfBookings] = useState(null);
  const [styleView, setStyleView] = useState(null)
  const [styleBookedDays, setStyleBookedDays] = useState(null)
  const [styleBookings, setStyleBookings] = useState(null)
  const [stylePercent, setStylePercent] = useState(null)
  const [open, setOpen] = useState(false);
  const [showWrongPassword, setShowWrongPassword] = useState(false);
  const [editCountry, setEditCountry] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [editCity, setEditCity] = useState(false);
  const [editPrice, setEditPrice] = useState(false);
  const [editDesc, setEditDesc] = useState(false);
  const [editType, setEditType] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editLimit, setEditLimit] = useState(false);

  useEffect(() => {
    if (residence) {
      if (!residence.amountOfBookings) {
        setPercentOfBookings(null);
      } else {
        setPercentOfBookings((residence.amountOfBookings / residence.views) * 100);
      }

      setStyleView({
        height: residence.views ? residence.views + "%" : 1,
        maxHeight: "100%"
      });

      setStyleBookedDays({
        height: residence.bookedDays ? residence.bookedDays + "%" : 1,
        maxHeight: "100%"
      });

      setStyleBookings({
        height: residence.amountOfBookings ? residence.amountOfBookings + "%" : 1,
        maxHeight: "100%"
      });

      setStylePercent({
        height: percentOfBookings ? percentOfBookings + "%" : 1,
        maxHeight: "100%"
      })
    }
  }, [residences,percentOfBookings])
  
  const LightTooltip = withStyles((theme) => ({
      tooltip: {
        backgroundColor: "#f50057",
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 15,
      },
  }))(Tooltip);

    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
    outline: 'none'
  },
}));
  
  const deleteRes = async () => {
    const userObj = {
      email: whoAmI.email,
      password: passwordRef.current.value
    }

    const res = await confirmDelete(userObj);
    
    if (res.success === "true") {
      deleteResidence(residence._id);
      history.push("/myRentals");
    } else {
      setShowWrongPassword(true);
    }
  }

const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseRoundedIcon onClick={handleClose} />
      <p className="deleteConfitmTitle">Delete confirmation</p>
      <input className="deleteConfitmInput" ref={passwordRef} type="password" placeholder="Enter your password" />
      {showWrongPassword && <p className="deleteConfitmDeleteMsg">Wrong password..</p>}
      <button className="deleteConfitmButton" onClick={deleteRes}>Confirm</button>
    </div>
  );

  const editField = (setEdit, edit) => {
    setEdit(!edit);
  }

  const undoEdit = (setEdit) => {
    setEdit(false);
  }

  const confirmEdit = (ref, objType, setBack) => {
    const newEdit = ref.current.value;

    const residenceObj = {
    [objType]: newEdit
    };

    updateResidence(residence._id, residenceObj);
    setBack(false);
  }


  return (
    <div className="myRentalDetailPage">
      {residence && <div className="images">
        {residence.imageURLs.map((img) => {
          return (<img key={img} src={img} alt="" />)
        })}
      </div>}
      {residence && <div className="inner">
        <div className="information">
          <div className="infoWrapper">
            <div className="desc">

              <p className="resTitle"><span>{editTitle && <span onClick={() => confirmEdit(editTitleRef, 'title', setEditTitle)}>✅</span>}
                {editTitle && <span onClick={() => undoEdit(setEditTitle)}>↩️</span>}
                </span>
                {!editTitle && residence.title}
                <span>{editTitle && <input ref={editTitleRef} type="text" placeholder={residence.title} />}</span>
                <span className="editInfo" onClick={() => editField(setEditTitle, editTitle)}>{!editTitle && <span> ✏️</span>}</span>
              </p>

              <p><span>{editCountry && <span onClick={() => confirmEdit(editCountryRef, 'country', setEditCountry)}>✅</span>}
                {editCountry && <span onClick={() => undoEdit(setEditCountry)}>↩️</span>}
                Country: </span>
                {!editCountry && residence.country}
                <span>{editCountry && <input ref={editCountryRef} type="text" placeholder={residence.country} />}</span>
                <span className="editInfo" onClick={() => editField(setEditCountry, editCountry)}>{!editCountry && <span> ✏️</span>}</span>
              </p>
                            
              <p><span>{editCity && <span onClick={() => confirmEdit(editCityRef, 'city', setEditCity)}>✅</span>}
                {editCity && <span onClick={() => undoEdit(setEditCity)}>↩️</span>}
                City: </span>
                {!editCity && residence.city}
                <span>{editCity && <input ref={editCityRef} type="text" placeholder={residence.city} />}</span>
                <span className="editInfo" onClick={() => editField(setEditCity, editCity)}>{!editCity && <span> ✏️</span>}</span>
              </p>


              <p><span>{editAddress && <span onClick={() => confirmEdit(editAddressRef, 'address', setEditAddress)}>✅</span>}
                {editAddress && <span onClick={() => undoEdit(setEditAddress)}>↩️</span>}
                Address: </span>
                {!editAddress && residence.address}
                <span>{editAddress && <input ref={editAddressRef} type="text" placeholder={residence.address} />}</span>
                <span className="editInfo" onClick={() => editField(setEditAddress, editAddress)}>{!editAddress && <span> ✏️</span>}</span>
              </p>


              <p><span>{editType && <span onClick={() => confirmEdit(editTypeRef, 'type', setEditType)}>✅</span>}
                {editType && <span onClick={() => undoEdit(setEditType)}>↩️</span>}
                Type: </span>
                {!editType && residence.type}
                <span>{editType && <input ref={editTypeRef} type="text" placeholder={residence.type} />}</span>
                <span className="editInfo" onClick={() => editField(setEditType, editType)}>{!editType && <span> ✏️</span>}</span>
              </p>

              <p><span>{editPrice && <span onClick={() => confirmEdit(editPriceRef, 'price', setEditPrice)}>✅</span>}
                {editPrice && <span onClick={() => undoEdit(setEditPrice)}>↩️</span>}
                Price: </span>
                {!editPrice && residence.price}
                <span>{editPrice && <input ref={editPriceRef} type="text" placeholder={residence.price} />}</span>
                <span className="editInfo" onClick={() => editField(setEditPrice, editPrice)}>{!editPrice && <span> ✏️</span>}</span>
              </p>

              <p><span>{editLimit && <span onClick={() => confirmEdit(editLimitRef, 'residenceLimit', setEditLimit)}>✅</span>}
                {editLimit && <span onClick={() => undoEdit(setEditLimit)}>↩️</span>}
                Residence Limit: </span>
                {!editLimit && residence.residenceLimit}
                <span>{editLimit && <input ref={editLimitRef} type="text" placeholder={residence.residenceLimit} />}</span>
                <span className="editInfo" onClick={() => editField(setEditLimit, editLimit)}>{!editLimit && <span> ✏️</span>}</span>
              </p>

              <p><span>{editDesc && <span onClick={() => confirmEdit(editDescRef, 'description', setEditDesc)}>✅</span>}
                {editDesc && <span onClick={() => undoEdit(setEditDesc)}>↩️</span>}
                Description: </span>
                {!editDesc && residence.description}
                <span>{editDesc && <textarea ref={editDescRef} type="text" placeholder={residence.description} />}</span>
                <span className="editInfo" onClick={() => editField(setEditDesc, editDesc)}>{!editDesc && <span> ✏️</span>}</span>
              </p>

            </div>
          </div>
        </div>
        <div className="statistics">
          <div className="statInfo">
          <p className="statisticsTitle">statistics <EqualizerIcon size="large"/></p>
          <p><span>Total booked days: </span>{residence.bookedDays ? residence.bookedDays.length : 0}</p>
          <p><span>Pageviews: </span>{residence.views ? residence.views : 0}</p>
          <p><span>Amount of bookings: </span>{residence.amountOfBookings ? residence.amountOfBookings : 0}</p>
          <p><span>Total earnings: </span>{residence.earned ? residence.earned : 0} €</p>
            {percentOfBookings ? <p><span>Bookings procentage by pageviews: </span>{percentOfBookings.toFixed(2)}%</p> : 
          <p><span>Bookings procentage by pageviews: </span>0%</p> }
          </div>
          <div className="stats">
                 
            <LightTooltip title={residence.views ? "Pageviews: " + residence.views :"Pageviews: " +  0}>
            <div style={styleView} className="statViews"></div>
            </LightTooltip>

            {residence.bookedDays && <LightTooltip title={"Days booked: " + residence.bookedDays.length}>
              <div style={styleBookedDays} className="statBooked"></div>
            </LightTooltip>}
              

            {!residence.bookedDays && <LightTooltip title={"Days booked: " + 0}>
              <div style={styleBookedDays} className="statBooked"></div>
            </LightTooltip>}
            
            <LightTooltip title={residence.amountOfBookings ? "Amount of bookings: " + residence.amountOfBookings :"Amount of bookings: " +  0}>
            <div style={styleBookings} className="statBookings"></div>
            </LightTooltip>
          
            {percentOfBookings !== null && <LightTooltip title={"Percent of bookings/views: " + percentOfBookings.toFixed(2) + "%"}>
              <div style={stylePercent} className="statPercent"></div>
            </LightTooltip>}

            {!percentOfBookings === null && <LightTooltip title={"Percent of bookings/views: " + "0 %"}>
              <div style={stylePercent} className="statPercent"></div>
            </LightTooltip>}
        </div>
        </div>
        <div className="delete">
          <button onClick={handleOpen}>Delete residence</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </div>}
    </div>
  );
}


export default MyRentalDetailPage;