import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashBoard() {
  return (
    <div className='min-h-screen w-full p-5 sm:p-10 bg-[#1c1c1c] text-white overflow-y-auto'>
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashBoard
