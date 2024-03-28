import React from 'react'
import './css/FormsLogin.css'
import videoBackgrond from '../../assets/video.mp4'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const FormsLogin = () => {

  const navigate = useNavigate(); 
  const goToMenu = () => {
    navigate("/"); 
  };

  const goToRegister = () => {
    navigate('/register')
  }
  const goToDashboard = () => {
    navigate('/dashboard')
  }

  const sendOnlineUser = async () =>{
    const url = 'http://localhost:8080/OnlinePost'
    const user = localStorage.getItem("currentUser")
    const data ={
      username: user
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) 
    });

    // if(!response.status.ok) throw console.error('There was an error sending a new online user'); 
  }

  let users = [];
  const getUsers = async () => {
    const URL = 'http://localhost:8080/GetAllUsers';
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('The connection with the db failed somehow');
      }
      const data = await response.json();
      users = data;

      return data;
    } catch (error) {
      console.error("We got this error", error);
    }
  };
  
  const isDataCorrect = () => {
    console.log("Users: ", users);
    const  userName = document.getElementById('Username').value;
    const  Passw = document.getElementById('Passw').value;
    const  span = document.getElementById('WrongUser');
    const user = users.filter(item => item.username === userName && item.password === Passw);
    const userR = users.find(user => user.username === userName);

    if(user.length === 0){
      console.log('That user does not exits')         
      setTimeout(() => {
        span.style.display = "none";
      }, 2000);
      span.style.display = "block"; 
    } else{
      span.style.display = "none";
      
      localStorage.setItem('currentUser', userName)
      localStorage.setItem('privilage', JSON.stringify(userR.is_admin))
      const priv = localStorage.getItem('privilage');        

      sendOnlineUser();
      goToDashboard();
      console.log('Acces  granted!');  
      localStorage.setItem('Logged', true);
    
    }

  };

  useEffect(() => {
    document.getElementById( "submitlogin" ).addEventListener('click', async function(e){
      e.preventDefault();
      await getUsers(); 
      isDataCorrect();

    })
  })

  return (
    <div className='LoginBox'>
        <div className='VideoBackground'>
        <video autoPlay loop muted playsInline  src={videoBackgrond}></video>
        </div>
        <div className='loginForm'>          
        <h1>Sign in for current users</h1>
        <form action="">
          <span className='WrongUser' id='WrongUser' style={{display: 'none'}}>Your  username or password is incorrect</span>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Username' id='Username'/>
            <label htmlFor="">Passowrd</label>
            <input type="Password" placeholder='Password' id='Passw'/>

            <div className='formsbuttons'>
            <input type='submit' id='submitlogin'/>
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