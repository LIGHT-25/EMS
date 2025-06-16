import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import Header from "./components/Others/Header";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import Sidebar from "./components/sidebar/sidebar";
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser",'');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setLoggedInUserData(userData.data)
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@mail.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data:employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };


   

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <Sidebar changeUser ={setUser}/>}
      {user === "admin" && <AdminDashBoard changeUser={setUser}/>}
      {user === "employee" && <EmployeeDashBoard data={loggedInUserData} changeUser={setUser} />}
    </>
  );
}

export default App;
