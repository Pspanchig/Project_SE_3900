import React from 'react'
import './css/FirstSectionMenu.css'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/rightArrow.svg'
const FirstSectionMenu = () => {
  
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <section className='menuSection1'>
      <nav className='MenuTitle'>
        <h1>IP web Tracking</h1>                
        <div className='NavButtons'>
          <ul>
            <a  href="" onClick={goToDashboard}>
              <li>
                Home
              </li>
            </a>
            <a href="#SecondSectionMenu">
              <li>
                Resources
              </li>
            </a>
            <a href="#faq-container">
              <li>
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className='NavLog_Reg'>          
        <a href=""onClick={goToLogin}>Login</a>          
          <button onClick={goToRegister} id='RegisterBM'>Register</button>
        </div>
      </nav>

      <div className='PablosDesing'>
        <div className='Subdivdesing'>
          <p>Pablo Panchig's desing</p>
        </div>
      </div>

      <div className="content1">
        <h1 id='MainTitleText'>Engineering most proffesional IP Tracker</h1>
        <h3>Empowering companies with innovative solutions</h3>

        <div className='StartButtons'>
            <button onClick={goToLogin} id='getStarted'>Get Started!</button>
            <a href="#faq-container" id='aHolder'>
              <button id='learnMore'>Learn more</button>
              <img src={arrow} alt="" />
            </a>
        </div>
      </div>
    </section>
  )
}

export default FirstSectionMenu