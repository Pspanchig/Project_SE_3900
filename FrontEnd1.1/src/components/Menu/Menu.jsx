import React from 'react'
import "./css/Menu.css"
import FirstSectionMenu from './FirstSectionMenu'
import SecondSectionMenu from './SecondSectionMenu'
import ThirdSectionMenu from './ThirdSectionMenu'
import { useEffect } from 'react'

const Menu = () => {

  useEffect(() => {
    const getIP = async () => {
      const URL = 'https://api.ipify.org?format=json';
      
      const response = await fetch(URL);
      const data = await response.json();
      return data.ip;      
    };

    const getIPsFromDB = async () => {
      const URL = 'http://localhost:8080/GetAllIPs';
      try {
        const response = await fetch(URL);
        const data = await response.json();
        return data; 
      } catch (error) {
        console.error('Error fetching IPs from DB:', error);
      }
    };

    const sendIP = async () => {
      const URL = 'http://localhost:8080/PostIP';
      const IP = await getIP();
      const server = "server-1";
      const date = new Date();      

      let Data = {
        ip: IP,
        date: date,
        server: server
      };

        
        await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Data)            
        });

    };

    sendIP();
  }, []);


  return (
    <div  className="menu">      
          <FirstSectionMenu/>              
          <SecondSectionMenu/>
          <ThirdSectionMenu/>
    </div>
  )
}

export default Menu