import React, { useState } from "react";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const [task, setTask] = useState([])

  let submitHandler = (e) => {
    e.preventDefault();
    setTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:true,completed:false})

    setAssignTo("")
    setCategory("")
    setDate("")
    setTitle('')
    setDescription("")

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
            value={taskTitle}
            onChange={setTaskTitle(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Description</h3>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter task description"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={taskDescription}
            onChange={settTaskDescription(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Date</h3>
          <input
            type="date"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={taskDate}
            onChange={setTaskDate(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Assign To</h3>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={assignTo}
            onChange={setAssignTo(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Category</h3>
          <input
            type="text"
            placeholder="e.g. dev / design"
            className="w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            value={category}
            onChange={setCategory(e.target.value)}
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
