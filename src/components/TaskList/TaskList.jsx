import React from 'react'

function TaskList({data}) {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] flex items-start gap-4 mt-10 py-5 px-1 w-full'>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-red-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-green-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-blue-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-orange-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-red-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
        <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-green-400 rounded-xl p-5">
          <div className='flex justify-between items-center'>
            <h2 className="bg-red-600 px-3 py-1 rounded">High</h2>
            <h3 className='text-sm'>25 April 2025</h3>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum, dolor sit amet consectetur </h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus dignissimos eligendi recusandae molestiae distinctio.</p>
        </div>
       
    </div>
  )
}

export default TaskList
