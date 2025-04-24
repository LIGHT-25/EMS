import React from 'react'

function AllTask() {
  return (
    <div  className='mt-10 '>
      <h1 className='text-2xl font-bold mb-4'>All Tasks</h1>

      <div id='alltask' className=" h-48 overflow-auto space-y-4">
        {/* Task Item */}
        <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md">
          <h2 className="font-semibold text-white">User1</h2>
          <h3 className="text-gray-300">Do this Task asap</h3>
          <h5 className="text-sm text-blue-400 font-medium">Pending</h5>
        </div>

        <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md">
          <h2 className="font-semibold text-white">User2</h2>
          <h3 className="text-gray-300">Finish design updates</h3>
          <h5 className="text-sm text-green-400 font-medium">Completed</h5>
        </div>
        <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md">
          <h2 className="font-semibold text-white">User2</h2>
          <h3 className="text-gray-300">Finish design updates</h3>
          <h5 className="text-sm text-green-400 font-medium">Completed</h5>
        </div>
        <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md">
          <h2 className="font-semibold text-white">User2</h2>
          <h3 className="text-gray-300">Finish design updates</h3>
          <h5 className="text-sm text-green-400 font-medium">Completed</h5>
        </div>

        {/* Add more tasks here */}
      </div>
    </div>
  )
}

export default AllTask
