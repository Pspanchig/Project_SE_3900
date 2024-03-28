import React from 'react'
import "./css/Menu.css"
import FirstSectionMenu from './FirstSectionMenu'
import SecondSectionMenu from './SecondSectionMenu'
import ThirdSectionMenu from './ThirdSectionMenu'
import { useEffect, useRef  } from 'react'

const Menu = () => {

  const ipList = useRef(new Set());

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

//   const sendIP = async () => {
// const URL = 'http://localhost:8080/PostIP';
//     const IP = await getIP(); // Make sure getIP is defined to get the IP address
//     const server = "server-1";
//     const port = 8080;
//     const appID = 'ECU';
//     const date = new Date();


//     let data = {
//       ip: IP,
//       date: date.toISOString(), // Format the date to an ISO string
//       server: server,
//       port: port,
//       applicationID: appID
//     };

//     // Check if IP is already in the Set
//     if (!ipList.current.has(IP)) {
//       await fetch(URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       ipList.current.add(IP); // Add IP to the Set
//     }
//   };
  
  // useEffect(() => {
  //   sendIP();

  // }, []);


  return (
    <div  className="menu">      
          <FirstSectionMenu/>              
          <SecondSectionMenu/>
          <ThirdSectionMenu/>
    </div>
  )
}

export default Menu