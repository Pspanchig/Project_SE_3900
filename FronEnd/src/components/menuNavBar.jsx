import React from 'react'
import duckDuckGoIconURL from '../assets/LogoPlaceHolder.svg';
import './menuNavBar.css';
import NavBar from './NavBar';

const MenuNavBar = () => {
  return (
    <div className='MenuNavBar'>
        <div className='Title'>
            <h2>IP Insight Security</h2>
            <img src={duckDuckGoIconURL} alt="logo" />
        </div>
        <NavBar />
    </div>
  )
}

export default MenuNavBar