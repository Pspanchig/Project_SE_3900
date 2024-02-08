import './menuNavBar.css';
import React from 'react'

const NavBar = () => {
  return (
    <nav className='Navbar'>
        <ul className='NavList'>
            <li className='NavItem'><a href="./login.html">About us</a></li>
        </ul>
        <ul className='NavList'>
            <li className='NavItem'><a href="">Engineering tools</a></li>
        </ul>
        <ul className='NavList'>
            <li className='NavItem'><a href="">Log in</a></li>
        </ul>
        <ul className='NavList'>
            <li className='NavItem'><a href="">Create Account</a></li>
        </ul>
    </nav>
  )
}

export default NavBar