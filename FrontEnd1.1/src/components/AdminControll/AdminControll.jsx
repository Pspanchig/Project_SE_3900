import React from 'react'
import AdminPage from './AdminPage'
import './Css/AdminControll.css'
import NavBarDashboard from '../Dashboard/NavBarDashboard'

const AdminControll = () => {
  return (
    
    <div className='AdminControll'>
      <NavBarDashboard/>
      <AdminPage/>
    </div>
    
  )
}

export default AdminControll