import React from 'react'
import Sidebar from './partials/Sidebar'
import Header from './partials/Header'
import './admin.css'

const Adminnav = () => {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <Header/>
    </div>
  
    </>
  )
}

export default Adminnav