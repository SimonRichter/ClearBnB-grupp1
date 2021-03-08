import React from 'react';
import AddResidenceStyle from '../style/AddResidenceStyle.css';

const AddResidence = () => {
  return (
    <div className="addResWrapper">
      <h3>What type of recidense would you like to host?</h3>
      <select>
      <option className="optionBar" value="" disabled="disabled" selected="selected">Choose</option>
        <option value="1">House</option>
        <option value="2">Apartment</option>
        <option value="3">Cabin</option>
        <option value="4">Tent</option>
        <option value="5">Mansion</option>
        <option value="6">Igloo</option>
      </select>
      <form>
      <label></label>

      </form>
    </div>
  )
}


export default AddResidence;