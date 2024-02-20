import React from 'react'
import './css/FormsLogin.css'
import videoBackgrond from '../../assets/video.mp4'
import { useNavigate } from 'react-router-dom'

const FormsLogin = () => {

  const navigate = useNavigate(); 
  const goToMenu = () => {
    navigate("/"); 
  };

  const goToRegister = () => {
    navigate('/register')
  }

  return (
    <div className='LoginBox'>
        <div className='VideoBackground'>
        <video autoPlay loop muted playsInline  src={videoBackgrond}></video>
        </div>
        <div className='loginForm'>
        <h1>Sign in for current users</h1>
        <form action="">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Username'/>
            <label htmlFor="">Passowrd</label>
            <input type="Password" placeholder='Password'/>
            <select name="" id="selector">
              <option value="">Normal User</option>
              <option value="">Administrator</option>
            </select>

            <div className='formsbuttons'>
            <input type='submit'/>
            </div>        
        </form> 
        <div>
            <ul>
                <li>
                <a onClick={goToRegister} href="">Create New account</a>
                </li>
                <li>
                <a href="" onClick={goToMenu}>Go Back</a>
                </li>            
            </ul>
        </div>
        </div>      
    </div>
  )
}

export default FormsLogin