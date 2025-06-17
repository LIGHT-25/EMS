import React, { useEffect, useState } from "react";


function AssignLeave() {
  const [employees, setEmployees] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [leaveCount, setLeaveCount] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(stored);
  }, []);

  const handleAssign = () => {
    if (!selectedId || !leaveCount) return;

    const updatedEmployees = employees.map(emp =>
      emp.id === parseInt(selectedId)
        ? { ...emp, leaves: parseInt(leaveCount) }
        : emp
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setLeaveCount("");
    setSelectedId("");
    alert("Leaves assigned successfully!");
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10">
      <h3 className="text-xl font-medium mb-4">📆 Assign Leaves</h3>
      <div className="space-y-4">
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="w-full p-2 bg-white/10 rounded text-white"
        >
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Number of Leaves"
          value={leaveCount}
          onChange={(e) => setLeaveCount(e.target.value)}
          className="w-full p-2 bg-white/10 rounded text-white"
        />
        <button
          onClick={handleAssign}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Assign
        </button>
      </div>
    </div>
  );
}

export default AssignLeave;
