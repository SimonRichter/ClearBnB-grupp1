// import React, { useState, createContext } from 'react'

// export const AddResidenceContext = createContext();

// export const AddResidenceProvider = (props) => {

//   const [residence, setResidence] = useState(
//     {
//       imageURLs: [null],
//       title: null,
//       country: null,
//       city: null,
//       adress: null,
//       type: null,
//       description: null,
//       startDate: null,
//       endDate: null,
//       featuresId: null,
//       userId: null,
//       residenceLimit: 1,
//       bookedDays: null
//     }
//   );

//   const addResidence = async (residenceObject) => {
//     let res = await fetch('/rest/addResidence', {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(residenceObject)
//     });
//     res = await res.json(); 
//   }
  
  
//   const values = {
//   residence,
//   addResidence
// }
  
  
// return (
//     <AddResidenceContext.Provider value={values}>
//       {props.children}
//   </AddResidenceContext.Provider>
//   );
// }