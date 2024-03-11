import React from 'react'
import { useState, useEffect } from 'react';
import './css/NavBardDasboard.css'
import dashboardItem from '../../assets/dashboardItem.svg'
import useritem from '../../assets/accountItem.svg'
import modify from '../../assets/modifyItem.svg'
import { Link } from 'react-router-dom';
import excel from '../../assets/excelItem.svg'
import db from  '../../assets/dbItem.svg'
import exit from '../../assets/goBackItem.svg'
const NavBarDashboard = () => {

  const removeOnlineUser = async () =>{
    const user = localStorage.getItem("currentUser")
    const url = 'http://localhost:8080/deleteByUsername/' + user;
    await fetch(url,{method: 'DELETE'})
  }

  const logOut = (e) => {
    removeOnlineUser();
    localStorage.setItem('Logged', false)
    console.log(localStorage.getItem( "logged" ));
  };
  
  return (
    
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><Link to="/"><img src={useritem} alt="dashboardItem" /> <p>Home</p></Link></li>
        <li className="nav-item"><Link to="/dashboard"><img src={dashboardItem} alt="dashboardItem" /><p>Dashboard</p></Link></li>
        <li className="nav-item"><Link to="/dashboard/manage"><img src={db} alt="dashboardItem" /><p>Manage</p></Link></li>
        <li className="nav-item"><Link to="/dashboard/modify"><img src={modify} alt="dashboardItem" /><p>Modify</p></Link></li>
        <li className="nav-item"><Link to="/dashboard/export"><img src={excel} alt="dashboardItem" /><p>Export</p></Link></li>
        <li  className="nav-item"><Link to="/" onClick={logOut}><img src={exit} alt="dashboardItem" /><p>Exit</p></Link></li>
        {/* <li onClick={logOut}>LogOut</li> */}
      </ul>
    </nav>
  )
}

export default NavBarDashboard