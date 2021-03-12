import React, { useState, createContext, useEffect } from 'react'

export const AddResidenceContext = createContext();

export const addResidenceProvider = (props) => {

const [residence, setResidence] = useState(null);


  
  
const values = {
  
}
  
  
return (
    <AddResidenceContext.Provider value={values}>
      {props.children}
  </AddResidenceContext.Provider>
  );
}