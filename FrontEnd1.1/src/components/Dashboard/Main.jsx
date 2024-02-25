import React from 'react'
import {Routes, Route}  from "react-router-dom";
import Dashboard from './Dashboard';
import ManageDB from '../ManageDB/ManageDB'
const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/db" element={<ManageDB/>}/>
      <Route />
    </Routes>      
  )
}

export default Main