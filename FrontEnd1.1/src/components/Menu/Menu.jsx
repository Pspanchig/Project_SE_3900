import React from 'react'
import "./css/Menu.css"
import FirstSectionMenu from './FirstSectionMenu'
import SecondSectionMenu from './SecondSectionMenu'
import ThirdSectionMenu from './ThirdSectionMenu'
import { useEffect } from 'react'

const Menu = () => {

  useEffect(() =>{
    
    const getIP = async () => {
      const URL = 'https://api.ipify.org?format=json';
      const response = await fetch(URL);
      const data = await response.json();
      return data.ip;
    }       

    const sendIP = async() =>{
      const URL = 'http://localhost:8080/GetAllIPs'
      const response = await fetch(URL)
      const data = await response.json();

      const IPs = new Set();
      // const IP = await getIP();
      // const Data[{
      //   ip: await IP,

      // }]


    }
  })

  return (
    <div  className="menu">      
          <FirstSectionMenu/>              
          <SecondSectionMenu/>
          <ThirdSectionMenu/>
    </div>
  )
}

export default Menu