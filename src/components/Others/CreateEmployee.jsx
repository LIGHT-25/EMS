import React, { useState } from 'react';

function CreateEmployee({ onEmployeeAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(), // Simple unique ID
      name,
      email,
      password,
      salary: parseFloat(salary),
      taskStats: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: [],
    };

    const existing = JSON.parse(localStorage.getItem('employees')) || [];
    const updated = [...existing, newEmployee];
    localStorage.setItem('employees', JSON.stringify(updated));
    onEmployeeAdded(); // Notify parent
    setName('');
    setEmail('');
    setPassword('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-white">➕ Add New Employee</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded bg-white/10 text-white"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 rounded bg-white/10 text-white"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 rounded bg-white/10 text-white"
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full p-2 rounded bg-white/10 text-white"
        required
      />
      <button type="submit" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
        Add Employee
      </button>
    </form>
  );
}

export default CreateEmployee;
