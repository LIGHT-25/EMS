import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {setLocalStorage, getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([null]);

// localStorage.clear()
  useEffect(()=>{
    setLocalStorage()
  // getLocalStorage()
   })


  useEffect(() => {
    const {employees } = getLocalStorage();
    setUserData(employees);
  },[]);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
