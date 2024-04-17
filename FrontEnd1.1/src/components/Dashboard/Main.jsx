import React from 'react'
import {Routes, Route}  from "react-router-dom";
import Dashboard from './Dashboard';
import ManageData from '../ManageData/ManageData'
import ModifyData from '../ModifyData/ModifyData';
import Export from '../Export/Export';
import AdminControll from '../AdminControll/AdminControll';
const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/manage" element={<ManageData/>}/>
        <Route path="/modify" element={<ModifyData/>}/>
        <Route path="/export" element={<Export/>}/>
        <Route path="/admin" element={<AdminControll/>}/>
      <Route />
    </Routes>      
  )
}

export default Main