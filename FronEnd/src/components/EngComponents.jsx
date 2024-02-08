import React, { useState, useEffect } from 'react';
import './EngComponents.css';

const EngComponents = () => {
  const [changeBorder, setChangeBorder] = useState('0em');
  const [changeOpacity, setChangeOpacity] = useState('1');

  useEffect(() => {
    const handleScroll = () => {
      const calculateWindow = window.scrollY > 20;
      setChangeBorder(calculateWindow ? "3em" : "0em");
    };
    
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const handleOpcaity = () => {
      const calculateWindow = window.scrollY > 800;
      setChangeOpacity(calculateWindow ? 0 : 1);
    }

    window.addEventListener('scroll', handleOpcaity);   
  });

  return (
    <div className='Components'>
        <nav className='Componentsbox' id='BoxComp' style={{ borderBottomLeftRadius: changeBorder , borderBottomRightRadius: changeBorder, transition: "1s" , opacity: changeOpacity}}>
            <ul className='BoxContianer'>
              <li className='BoxItem'>
                <h1>MySQL</h1>
                <p>Offers robust and efficient data management, essential for handling and querying the large volumes of data typical in IP tracking.</p>
              </li>
            </ul>
            <ul className='BoxContianer'>
              <li className='BoxItem'>
                <h1>React + Vite</h1>
                <p>Enables a responsive and dynamic user interface, with Vite enhancing React's performance for real-time, interactive data presentation.</p>
              </li>
            </ul>
            <ul className='BoxContianer'>
              <li className='BoxItem'>
                <h1>Spring Boot</h1>
                <p>Provides a secure and scalable backend framework, ensuring reliable handling of IP data with ease of application development and deployment.</p>
              </li>
            </ul>
        </nav>
    </div>
  );
};

export default EngComponents;
