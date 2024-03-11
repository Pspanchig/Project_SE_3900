import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './css/ExportPage.css'
import dowloadIcom from '../../assets/dowload.svg'
import { useEffect, useState } from 'react';
const ExportPage = () => {

  const [url, setUrl] = useState(null);

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
      saveAs(blob, "IPs.xlsx");
    } catch (error) {
        console.error("Error: ", error);
    }
  };
  const changeToAllData = () =>{
    setUrl('http://localhost:8080/GetAllIPs');
  }
  const changeToWhiteList = () =>{
    setUrl('http://localhost:8080/GetWhiteList');
  }
  const displaySpan = () =>{
    const span = document.getElementById('span-export');
    span.style.display = 'block';

    setTimeout(() => {
      span.style.display = 'none';
    }, 1000);
  }


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
                    <button onClick={changeToAllData}>Export All IPs and data</button>
                    <button onClick={changeToWhiteList}>Export white listed IPs and data</button>
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