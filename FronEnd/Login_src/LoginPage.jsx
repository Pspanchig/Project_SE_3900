import React from 'react'
import './LoginPage.css'
import videoBackgrond from './assets/pexels-tima-miroshnichenko-6498240 (2160p).mp4'
const LoginPage = () => {
  return (
    <div className='LoginBox'>

      <div className='VideoBackground'>
        <video autoPlay loop muted playsInline  src={videoBackgrond}></video>
      </div>
      <div className='loginForm'>
        <h1>Sign in for current users</h1>
      <form action="test.html">
        <label htmlFor="">Username</label>
        <input type="text" placeholder='Username'/>
        <label htmlFor="">Passowrd</label>
        <input type="Password" placeholder='Password'/>
        <div className='formsbuttons'>
          <input type='submit'/>
        </div>        
      </form> 
      <div>
          <ul>
            <li>
              <a href="">Create New account</a>
            </li>
            <li>
              <a href="">Go Back</a>
            </li>
            
          </ul>
      </div>
      </div>      
    </div>
  )
}

export default LoginPage