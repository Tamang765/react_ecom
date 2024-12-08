import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminnav from '../Adminnav'

const Adminlayout = () => {
  return (
    <>
     <div className="">
     <Adminnav/>
    <div className="ml-52">
    <Outlet/>
    </div>
      
     </div>
    
   
   
    
    </>
  )
}

export default Adminlayout