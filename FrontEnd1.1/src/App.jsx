import React, { useState } from 'react'
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAcount/CreateAccount';
import Protected from './components/Protected/Protected';
import Main from './components/Dashboard/Main'
import Verify from './components/Protected/Verify';

import { useEffect } from 'react';
import "./components/css/App.css"

const App = () => {

  if (localStorage.getItem('Logged') === null) {
    localStorage.setItem('Logged', false)
  }
  // console.log("Is logged?" + localStorage.getItem('Logged'))

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/dashboard/*" element={<Protected Component={Main}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<CreateAccount/>}/>
          <Route path="/verify" element={<Verify/>}/>

        <Route />
      </Routes>      
    </BrowserRouter>
  )
}

export default App