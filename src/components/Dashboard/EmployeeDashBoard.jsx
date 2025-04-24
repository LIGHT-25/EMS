import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashBoard() {
  return (
    <div  className='p-5 sm:p-10 bg-[#1c1c1c] min-h-screen w-full overflow-y-auto overflow-x-hidden'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashBoard
