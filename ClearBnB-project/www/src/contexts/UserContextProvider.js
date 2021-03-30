import React, { useState, createContext, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([]);
  const [whoAmI, setWhoAmI] = useState(null);
  const [loginToast, setLoginToast] = useState(false);
  const [logoutToast, setLogoutToast] = useState(false);
  
  const fetchUsers = async() => {
    let data = await fetch('/rest/users')
    data = await data.json();
    setUsers([...data]);
  }

  useEffect(() => {
    fetchUsers();
    whoIsOnline();
  }, []);

  const addUser = async user => {
    let res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json();
    if (res.success) {
      setUsers([...users, user])

      const userToLogin = {
        email: user.email,
        password: user.password
      };

      await login(userToLogin)
      whoIsOnline();
      return true;

    } else {
      return false;
    }
  }

  const login = async user => {
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json();
    if (!res) {
      setLoginToast(false);
    } else {
      setLoginToast(true);
      return res;
    }
    
  }

  const logOut = async () => {
    let res = await fetch('/api/login', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json();
    setWhoAmI(null);
    setLogoutToast(true);
    
  }

  const whoIsOnline = async() => {
    let data = await fetch('/api/login')
    data = await data.json();
    if (!data) {
      setWhoAmI(null);
      return null;
    } else {
      setWhoAmI({ ...data });
      return data;
    }
  }

  const values = {
    users,
    setUsers,
    addUser,
    login,
    whoIsOnline,
    whoAmI,
    logOut,
    setLoginToast,
    loginToast,
    logoutToast,
    setLogoutToast,
    fetchUsers
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}