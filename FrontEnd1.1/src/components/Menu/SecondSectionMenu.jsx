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
            <p>We use sql</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>MySQL</h1>
            <p>We use sql</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>Java</h1>
            <p>We use sql</p>
          </div>
        </div>
        <div className='FeaturesBox'>          
          <img src={cube} alt="cube" />
          <div>
            <h1>Spring boot</h1>
            <p>We use sql</p>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default SecondSectionMenu