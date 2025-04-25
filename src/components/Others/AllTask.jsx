import React from 'react'
import{ AuthContext} from '../../context/AuthProvider'
import { useContext } from 'react'
function AllTask() {

  const authData = useContext(AuthContext)



  return (
    <div  className='mt-10 '>
        <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md mb-4">
          <h2 className="font-semibold text-white">Employee Name</h2>
          <h3 className="font-semibold text-white">NewTask</h3>
          <h3 className="font-semibold text-white">Active Task</h3>
          <h3 className="font-semibold text-white">Completed</h3>
          <h3 className="font-semibold text-white">Failed</h3>
          
        </div>

      <div id='alltask' className=" h-48 overflow-auto space-y-4">
      {authData.employees.map((elem)=>{
          return <div className="bg-[#2c2c2e] py-3 px-5 rounded-lg flex flex-col sm:flex-row justify-between gap-3 shadow-md">
          <h2 className="font-semibold text-white">{elem.name}</h2>
          <h3 className="text-blue-300">gfds</h3>
          <h3 className="text-orange-300">gfds</h3>
          <h3 className="text-green-300">gfds</h3>
          <h3 className="text-red-300">gfds</h3>
         
        </div>
      })}
        
      </div>
    </div>
  )
}

export default AllTask
