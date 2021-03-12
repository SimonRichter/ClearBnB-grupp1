import React, { useState, createContext, useEffect } from 'react'

export const ResidenceContext = createContext();

export const ResidenceProvider = (props) => {

  const [residences, setResidences] = useState([]);

  
  const fetchResidences = async() => {
    let data = await fetch('/rest/residences')
    data = await data.json();
    setResidences([...data]);
    return data;
  }

  const updateResidence = async (id, residence) => {
     let res = await fetch('/rest/residences/' + id, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(residence)
     })
    
    res = await res.json()
  }

  useEffect(() => {
    fetchResidences();
  }, []);

  useEffect(() => {
    fetchResidences();
  }, [updateResidence]);
  
  const values = {
    residences,
    setResidences,
    updateResidence,
    fetchResidences
  }

  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>
  );
}