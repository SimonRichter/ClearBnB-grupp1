import React, { useState, createContext, useEffect } from 'react'

export const AddResidenceContext = createContext();

export const AddResidenceProvider = (props) => {

  const [residence, setResidence] = useState(
     {
      type: null,
      residenceLimit: 1,
      title: null,
      country: null,
      city: null,
      adress: null,
      imageURLs: [null],
      description: null,
      startDate: null,
      endDate: null
    }
  );

  const addResidence = async (residenceObject) => {
    let res = await fetch('/rest/addResidence', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(residenceObject)
    });

    res = await res.json();
    if (residence !== null) {
      setResidence([...residence, residenceObject]);
    } else {
      setResidence([residenceObject]);
    }
      
  }
  
  
const values = {
  addResidence
}
  
  
return (
    <AddResidenceContext.Provider value={values}>
      {props.children}
  </AddResidenceContext.Provider>
  );
}