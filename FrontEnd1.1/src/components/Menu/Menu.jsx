import React from 'react'
import "./css/Menu.css"
import FirstSectionMenu from './FirstSectionMenu'
import SecondSectionMenu from './SecondSectionMenu'
import ThirdSectionMenu from './ThirdSectionMenu'

const Menu = () => {
  return (
    <div  className="menu">      
          <FirstSectionMenu/>              
          <SecondSectionMenu/>
          <ThirdSectionMenu/>
    </div>
  )
}

export default Menu