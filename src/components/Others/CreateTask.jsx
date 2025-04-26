import React, { useState } from "react";
import{ AuthContext} from '../../context/AuthProvider'
import { useContext } from 'react'
function CreateTask() {

    const [userData,setUserData] = useContext(AuthContext)
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const [newTask, setNewTask] = useState({});

  let submitHandler = (e) => {
    e.preventDefault();
  
    const newTask = {
      title,
      description,
      date,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: true,
      completed: false,
    };
  
    // Correct way: Create a new array instead of mutating directly
    const updatedData = userData.map((elem) => {
      if (assignTo === elem.name) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskStats: {
            ...elem.taskStats,
            newTask: elem.taskStats.newTask + 1,
          },
        };
      }
      return elem;
    });
  
    setUserData(updatedData);
  
    // Optional: Clear the form after submission
    setTitle("");
    setDescription("");
    setDate("");
    setCategory("");
    setAssignTo("");
  };
  
  return (
    <div className="mt-10 bg-[#2c2c2e] p-6 sm:p-10 rounded-xl shadow-md max-w-3xl mx-auto">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-6"
      >
        <div>
          <h3 className="font-semibold text-lg mb-1">Task Title</h3>
          <input
            type="text"
            placeholder="Enter task title"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Description</h3>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter task description"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Date</h3>
          <input
            type="date"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Assign To</h3>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Category</h3>
          <input
            type="text"
            placeholder="e.g. dev / design"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
