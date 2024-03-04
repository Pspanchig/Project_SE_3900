import React from 'react'
import NavBarDashboard from '../Dashboard/NavBarDashboard'
import './css/ManageData.css'
import ManageData_Menu from './ManageData_Menu.jsx'

const ManageData = () => {
  return (
    <div className='ManageData'>
      <NavBarDashboard />
      <ManageData_Menu />
    </div>
  )
}

export default ManageData