import React from 'react'
import { useState } from 'react'

function Header() {
  // const [username, setUsername] = useState("")

  // if(!data) {
  //   setUsername("Admin")
  // } else{
  //   setUsername(data.name)
  // }

  const logOut=()=>{
    localStorage.setItem('loggedInUser',"")
    window.location.reload()
  }


  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>userName 👋</span> </h1>
        <button className='bg-red-600 text-lg font-medium px-6 py-2 rounded' onClick={logOut}  >Log out</button>
    </div>
  )
}

export default Header
