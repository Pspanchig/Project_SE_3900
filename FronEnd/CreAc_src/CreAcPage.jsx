import { useState, useEffect } from 'react'
import React from 'react'
import './CreAcPage.css'
import videoBackgrond from './assets/pexels-tima-miroshnichenko-6498240 (2160p).mp4'

const CreAcPage = () => {

  const [goback] = ("index.html")
  return (
    <div className='LoginBox'>

      <div className='VideoBackground'>
        <video autoPlay loop muted playsInline  src={videoBackgrond}></video>
      </div>
      <div className='loginForm'>
        <h1>Create Account</h1>
        <form action="test.html">
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Username'/>
          <label htmlFor="">Passowrd</label>
          <input type="Password" placeholder='Password'/>
          <label htmlFor="">Confirm your passowrd</label>
          <input type="Password" placeholder='Password'/>

          <select name="slector" id="">
            <option value="null">null</option>
            <option value="user">user</option>
            <option value="Admin">Admin</option>
          </select>
          <div className='formsbuttons'>
          <input type='submit'/>
          </div>        
      </form> 
        <div>
            <ul>
              <li>
                <a href="./Login.html">Login in here</a>
              </li>
              <li>
                <a href={goback}>Go Back</a>
              </li>            
            </ul>
        </div>
      </div>      
    </div>
  )
}

export default CreAcPage