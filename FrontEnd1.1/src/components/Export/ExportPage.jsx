import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './css/ExportPage.css'
import dowloadIcom from '../../assets/dowload.svg'
import { useEffect, useState } from 'react';
const ExportPage = () => {

  const [url, setUrl] = useState(null);
  const [fileName, setFileName] = useState();
  const [permissions, setPermissions] = useState();
  
  const exportData = async () => {
    try {      
      
      if(url === null || url === '') displaySpan();

      const respuesta = await fetch(url);
      const datos = await respuesta.json();
  
      const datosConFechaFormateada = datos.map(d => ({
        ...d,
        date: d.date ? new Date(d.date).toLocaleDateString() : ''
      }));
  
      const sheet = XLSX.utils.json_to_sheet(datosConFechaFormateada);
  
      const book = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(book, sheet, "Datos");
  
      const libroOut = XLSX.write(book, {bookType: 'xlsx', type: 'binary'});
  
      function s2ab(s) {
          const buf = new ArrayBuffer(s.length);
          const view = new Uint8Array(buf);
          for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
      }
  
      const blob = new Blob([s2ab(libroOut)], {type: "application/octet-stream"});
      saveAs(blob, `${fileName}.xlsx`);
    } catch (error) {
        console.error("Error: ", error);
    }
  };
  const changeToAllData = () =>{
    setUrl('http://localhost:8080/GetAllIPs');
    setFileName("All_IP")

    const item1 = document.getElementById('changeToAllData');
    const item2 = document.getElementById('changeToWhiteList');
    const item3 = document.getElementById('changeToServers');
    const item4 = document.getElementById('changeToUsers');

    item2.style.backgroundColor = 'white'
    item1.style.backgroundColor = 'gray'
    item3.style.backgroundColor = 'white'
    item4.style.backgroundColor = 'white'
    item2.style.color = 'black'
    item1.style.color = 'white'
    item3.style.color = 'black'
    item4.style.color = 'black'
  }
  const changeToWhiteList = () =>{
    setUrl('http://localhost:8080/GetWhiteList');
    setFileName("All_WhiteList_IP")
    const item1 = document.getElementById('changeToAllData');
    const item2 = document.getElementById('changeToWhiteList');
    const item3 = document.getElementById('changeToServers');
    const item4 = document.getElementById('changeToUsers');

    item2.style.backgroundColor = 'gray'
    item1.style.backgroundColor = 'white'
    item3.style.backgroundColor = 'white'
    item4.style.backgroundColor = 'white'
    item2.style.color = 'white'
    item1.style.color = 'black'
    item3.style.color = 'black'
    item4.style.color = 'black'
  }
  const changeToServers = () =>{
    setUrl('http://localhost:8080/GetAllServers')
    setFileName("All_Servers")

    const item1 = document.getElementById('changeToAllData');
    const item2 = document.getElementById('changeToWhiteList');
    const item3 = document.getElementById('changeToServers');
    const item4 = document.getElementById('changeToUsers');

    item2.style.backgroundColor = 'white'
    item1.style.backgroundColor = 'white'
    item3.style.backgroundColor = 'gray'
    item4.style.backgroundColor = 'white'
    item2.style.color = 'black'
    item1.style.color = 'black'
    item3.style.color = 'white'
    item4.style.color = 'black'
  }
  const changeToUsers = () =>{
    setUrl('http://localhost:8080/GetAllUsers')
    setFileName("All_Users ")

    const item1 = document.getElementById('changeToAllData');
    const item2 = document.getElementById('changeToWhiteList');
    const item3 = document.getElementById('changeToServers');
    const item4 = document.getElementById('changeToUsers');

    item2.style.backgroundColor = 'white'
    item1.style.backgroundColor = 'white'
    
    item3.style.backgroundColor = 'white'
    item4.style.backgroundColor = 'gray'
    item2.style.color = 'black'
    item1.style.color = 'black'
    item3.style.color = 'black'
    item4.style.color = 'white'
  }
  const displaySpan = () =>{
    const span = document.getElementById('span-export');
    span.style.display = 'block';

    setTimeout(() => {
      span.style.display = 'none';
    }, 1000);
  }
  const CheckAdminPrivilege = () => {
    const privilege = localStorage.getItem('privilage');
    setPermissions(privilege)
  }

  useEffect(() =>{
    CheckAdminPrivilege();
  })

  return (
    <div className='ExportPage'>
        <section className='export-container'>
          <div className='ExportTitle'>
            <h1>Export</h1>
          </div>

          <div className='Excontainer'>
            <div className='ExportDiv'>
              <div className="ExportContent">
                <div className='leftEx'>
                  <div className='selecDataTitle'>
                    Select data to export
                  </div>
                    <button onClick={changeToAllData} id='changeToAllData'>Export All IPs and data</button>
                    <button onClick={changeToWhiteList} id='changeToWhiteList'>Export white listed IPs and data</button>
                    {
                      permissions === `"Admin"`&& (
                        <>
                          <button onClick={changeToServers} id='changeToServers'>Export servers information</button>
                          <button onClick={changeToUsers} id='changeToUsers'>Export users information</button>
                        </>
                      )
                    }
                </div>
                <div className='leftEx'>
                    <span className='span-export' style={{display: "none"}} id='span-export'>Please select an export option</span>
                    <button onClick={exportData} id='dowloadExcel'>Generate Excel File <img src={dowloadIcom} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ExportPage