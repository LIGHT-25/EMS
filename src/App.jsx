import React, { useState, useEffect } from 'react';
import Login from './components/Auth/login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import Header from './components/Others/Header'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
function App() {
  const [user, setUser] = useState(null)
  const handleLogin =(email,password)=>{
     if(email=="admin@mail.com" && password=="123"){
      setUser("admin")
     } else if (email=="employee@mail.com"&& password=="123"){
      setUser("employee")

     } else{
      alert("Invalid Credentials")
     }
  }
 

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // })

  return (
   <>
   {!user? <Login handleLogin={handleLogin}/> :""}
  {user=="admin"? <AdminDashBoard/>:<EmployeeDashBoard/>}
   
   </>
  )
}

export default App