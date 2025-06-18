import React, { useEffect, useState } from "react";
import CreateEmployee from "../Others/CreateEmployee";
import RemoveEmployee from "../Others/RemoveEmployee";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import AssignLeave from "../Others/AssignLeave";

function AdminDashBoard(props) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Dashboard data
  const totalEmployees = employees.length;
  const totalSalary = employees.reduce(
    (acc, emp) => acc + (emp.salary || 0),
    0
  );

  // Corrected totalLeaves calculation
  const totalLeaves = employees.reduce((acc, emp) => acc + (emp.leaves || 0), 0);

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <div className="flex-1 pt-16 sm:pt-0 sm:ml-64 p-5 sm:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-6 border border-white/10">
            <Header changeUser={props.changeUser} />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-purple-700 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium">👥 Total Employees</h3>
              <p className="text-2xl font-bold">{totalEmployees}</p>
            </div>
            <div className="bg-yellow-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium">🏖️ Total Leaves</h3>
              <p className="text-2xl font-bold">{totalLeaves}</p> {/* Use the correctly calculated totalLeaves here */}
            </div>
            <div className="bg-green-600 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium">💰 Total Salary</h3>
              <p className="text-2xl font-bold">₹12,00,000{totalSalary}</p>
            </div>
          </div>

          {/* Assign Leaves Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10">
            <AssignLeave />
          </div>

          {/* Add Employee Section */}
          <CreateEmployee onEmployeeAdded={fetchEmployees} />

          {/* Remove Employee Section */}
          <RemoveEmployee onEmployeeRemove={fetchEmployees} />

          {/* Existing Sections */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-6 border border-white/10">
            <CreateTask />
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-6 border border-white/10">
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
