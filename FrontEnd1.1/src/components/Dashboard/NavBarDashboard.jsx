import React from 'react'
import { useState, useEffect } from 'react';
import './css/NavBardDasboard.css'

const NavBarDashboard = () => {

  const Loged = localStorage.getItem('Logged');

  return (
    <nav className='NavBarDash'>
        <div className='NavItem'>
          <img src="" alt="" />
            <a href=""></a>
        </div>
    </nav>
  )
}

export default NavBarDashboard