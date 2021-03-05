import React, { useState, createContext, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

  
  const fetchUsers = async() => {
    let data = await fetch('/rest/users')
    data = await data.json();
    console.log(data);
  }


  useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <UserContext.Provider value>
      {props.children}
    </UserContext.Provider>
  );
}