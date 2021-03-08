import React, { useState, useEffect, createContext } from 'react';

export const FeatureContext = createContext();

export const FeatureProvider = (props) => {

  const [features, setFeatures] = useState(null);

  const fetchFeatures = async () => {
    let data = await fetch('/rest/features');
    data = await data.json();
    setFeatures([...data]);
  } 

  useEffect(() => {
    fetchFeatures();
  },[])

  return (
    <FeatureContext.Provider>
      {props.children}
    </FeatureContext.Provider>
  );
}