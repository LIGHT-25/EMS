import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import Header from "./components/Others/Header";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@mail.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // useEffect(()=>{
  //   // setLocalStorage()
  //   // getLocalStorage()
  // })

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashBoard />}
      {user === "employee" && <EmployeeDashBoard data={loggedInUserData} />}
    </>
  );
}

export default App;
