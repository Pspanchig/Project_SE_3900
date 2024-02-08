import { useState } from 'react'
import React from 'react'
import './BrandText.css'
import Arrow from '../assets/rightArrow.svg'
const BrandText = () => {

  const changePage = () => {
    window.location.href = './Login.html';
  }
  return (
    <>
        <div className='TextContinaer'>
            <h4>Pablo Panchig's desing</h4>
            <h1>The world's leading IP-Tracker cybersecurity platform</h1>
            <div className='Button'>
                <button onClick={changePage}>
                <div className='RedBoxContainer'>
                    <div className='RedBox'>
                    </div>
                        <p>Start Now!</p>
                        <img src={Arrow} alt="" />
                </div>
                </button>
            </div>
        </div>
    </>
  )
}

export default BrandText