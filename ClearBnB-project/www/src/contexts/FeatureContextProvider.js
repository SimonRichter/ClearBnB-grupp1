import React, { useState, useEffect, createContext } from 'react';

export const FeatureContext = createContext();

export const FeatureProvider = (props) => {

  const [features, setFeatures] = useState(null);

  const fetchFeatures = async () => {
    let data = await fetch('/rest/features');
    data = await data.json();
    setFeatures([...data]);
  }
  
  const getSpecificFeature = (residenceFeatureId) => {
    const filteredFeature = features.filter(f => f._id === residenceFeatureId)
    return filteredFeature;
  };

  const values = {
    features,
    setFeatures,
    getSpecificFeature
  }

  useEffect(() => {
    fetchFeatures();
  },[])

  return (
    <FeatureContext.Provider value={values}>
      {props.children}
    </FeatureContext.Provider>
  );
}