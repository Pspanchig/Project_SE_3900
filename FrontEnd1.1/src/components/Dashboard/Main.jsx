import React from 'react'
import {Routes, Route}  from "react-router-dom";
import Dashboard from './Dashboard';
import ManageData from '../ManageData/ManageData'
const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/manage" element={<ManageData/>}/>
      <Route />
    </Routes>      
  )
}

export default Main