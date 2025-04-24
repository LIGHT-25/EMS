import React from 'react'

function CreateTask() {
  return (
    <div className='mt-10 bg-[#2c2c2e] p-6 sm:p-10 rounded-xl shadow-md max-w-3xl mx-auto'>
        <form className='flex flex-col gap-6'>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Task Title</h3>
            <input
              type="text"
              placeholder='Enter task title'
              className='w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Description</h3>
            <textarea
              cols="30"
              rows="5"
              placeholder='Enter task description'
              className='w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Date</h3>
            <input
              type="date"
              className='w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Assign To</h3>
            <input
              type="text"
              placeholder='Employee name'
              className='w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Category</h3>
            <input
              type="text"
              placeholder='e.g. dev / design'
              className='w-full px-4 py-2 bg-[#1c1c1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
            />
          </div>

          <div>
            <button
              type="submit"
              className='w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200'
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask