import React from 'react'
import './css/SeconSectionMenu.css'
import cube from '../../assets/cube.svg'

const SecondSectionMenu = () => {
  return (
    <section className='SecondSectionMenu' id='SecondSectionMenu'>
      <div className='textcontainerMenu'>
        <h2>FEATURES</h2>
        <h1>Engineering most proffesional IP Tracker</h1>
        <h3>Using the potential of engineering advanced tools</h3>
      </div>

      <div className='BoxContainer'>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>React + Vite </h1>
            <p>The dynamic duo for ultra-fast web development. React crafts your UI with precision, while Vite supercharges your build speed. Together, they're your ticket to cutting-edge web projects.</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>MySQL</h1>
            <p>Your go-to for efficient, scalable data management. Perfect for web development, it's the fast, reliable database solution you need.</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>Java</h1>
            <p>Powerhouse programming language designed to supercharge your application development across any platform. Versatile, robust, and universally compatible</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>Spring boot</h1>
            <p>The game-changer for effortless, rapid application development. Dive into seamless, scalable backend solutions with minimal configuration. Your fast track to enterprise-grade applications.</p>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default SecondSectionMenu