import React from 'react'
import "./css/Dashboard.css"
import NavBarDashboard from './NavBarDashboard'
import { useState, useEffect } from 'react';
import DashboardMenu from './DashboardMenu';

const Dashboard = () => {

  const [savedValue, setSaveValue] = useState(false);  

  const ChangeValue  = () =>{
    setSaveValue(!savedValue);
    // const bool = localStorage.setItem('Logged', true);
    localStorage.setItem('Logged', false)
  }
  // useEffect(() => {  

    // const IsLogged = () => {
    //   const Loged = localStorage.getItem('Logged');
    //   if (Loged === true){
    //     savedValue = true;        
    //   }
    //   if(savedValue === true) localStorage.setItem('Logged', true);
    // }    
    // document.addEventListener( 'DOMContentLoaded', IsLogged );
  // })


  return (
    <div className='dashboard'>
      <NavBarDashboard />
      <DashboardMenu/>
      {/* <h2 onClick={ChangeValue}>Are you logged? {savedValue.toString()}</h2> */}

    </div>
  )
}

export default Dashboard