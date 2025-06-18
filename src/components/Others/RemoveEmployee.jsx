import React, { useState } from 'react';

const RemoveEmployee = () => {
  const [email, setEmail] = useState('');

  const handleRemove = async () => {
    try {
      const response = await axios.delete;
      alert('Employee removed successfully!');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Error removing employee');
    }
  };

  return (
    <div className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="text-purple-500 text-2xl mr-2">➖</span> Remove Employee
      </h2>
      <input
        type="email"
        placeholder="Enter employee email"
        className="w-full p-3 mb-4 rounded bg-zinc-800 border border-zinc-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        onClick={handleRemove}
      >
        Remove Employee
      </button>
    </div>
  );
};

export default RemoveEmployee;
