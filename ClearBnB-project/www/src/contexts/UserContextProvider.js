import React, { useState, createContext, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([]);

  
  const fetchUsers = async() => {
    let data = await fetch('/rest/users')
    data = await data.json();
    setUsers([...data]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  // -------------
  const addUser = async user => {
    let res = await fetch('/rest/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json();
    user.id = res.id;
    setUsers([...users, user])
  }
// --------------
  const values = {
    users,
    setUsers
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}