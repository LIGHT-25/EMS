import React from 'react'
import{ AuthContext} from '../../context/AuthProvider'
import { useContext } from 'react'
function AllTask({elem}) {

  const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className="mt-10 px-2">
  <div className="bg-black py-3 px-4 rounded-lg flex flex-wrap sm:flex-nowrap justify-between gap-3 shadow-md mb-4">
    <h2 className="font-semibold text-white text-sm sm:text-base">Employee Name</h2>
    <h3 className="font-semibold text-white text-sm sm:text-base">NewTask</h3>
    <h3 className="font-semibold text-white text-sm sm:text-base">Active Task</h3>
    <h3 className="font-semibold text-white text-sm sm:text-base">Completed</h3>
    <h3 className="font-semibold text-white text-sm sm:text-base">Failed</h3>
  </div>

  <div id="alltask" className="h-48 overflow-auto space-y-4">
    {userData.map((elem, idx) => (
      <div
        key={idx}
        className="bg-[#2c2c2e] py-3 px-4 rounded-lg flex flex-wrap sm:flex-nowrap justify-between gap-3 shadow-md"
      >
        <h2 className="font-semibold text-white text-sm sm:text-base">{elem.name}</h2>
        <h3 className="text-blue-300 text-sm sm:text-base">{elem.taskStats.newTask}</h3>
        <h3 className="text-orange-300 text-sm sm:text-base">{elem.taskStats.active}</h3>
        <h3 className="text-green-300 text-sm sm:text-base">{elem.taskStats.completed}</h3>
        <h3 className="text-red-300 text-sm sm:text-base">{elem.taskStats.failed}</h3>
      </div>
    ))}
  </div>
</div>

  )
}

export default AllTask
