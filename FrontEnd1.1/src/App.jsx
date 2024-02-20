import React from 'react'
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAcount/CreateAccount';

import "./components/css/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<CreateAccount/>}/>
        <Route />
      </Routes>      
    </BrowserRouter>
  )
}

export default App