import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[250px] sm:w-[300px] bg-green-400 rounded-xl p-5">
    <div className="flex justify-between items-center">
      <h2 className="bg-red-600 px-3 py-1 rounded">{data.category}</h2>
      <h3 className="text-sm">{data.date}</h3>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">
      {data.title}
    </h2>
    <p className="text-sm mt-2">
     {data.description}
    </p>
     <div className="mt-4">
        <button className='w-full bg-green-600 rounded'>Complete</button>
     </div>
  </div>
  )
}

export default CompleteTask