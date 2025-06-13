import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';


function AdminDashBoard(props) {
  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      


      {/* Main Content */}
      <div className="flex-1 pt-16 sm:pt-0 sm:ml-64 p-5 sm:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-4 sm:p-6">
            <Header changeUser={props.changeUser} />
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-4 sm:p-6">
            <CreateTask />
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-md p-4 sm:p-6">
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
