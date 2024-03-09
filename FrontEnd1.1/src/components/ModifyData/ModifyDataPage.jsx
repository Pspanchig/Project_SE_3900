import React from 'react'
import './css/ModifyDataPage.css'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ModifyDataPage = () => {

  const [removeIP, setRemoveIP] = useState([]);
  const navigator  = useNavigate();

  const goToExport = () =>{
    navigator('/dashboard/export')
  }
  const removeIPfromDB = async(e) =>{
    const url = 'http://localhost:8080/deleteByIp/' + e
    const respone = await fetch(url, {method:'DELETE'})
    if (!respone.ok) throw  new Error('HTTP-Error: '+ respone.status)
  }
  const getIP = async () => {
    const URL = 'http://localhost:8080/GetAllIPs';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  const placeIPs = async () => {
    const data = await getIP();
    const addedIPs = new Set(data.map(element => element.ip));
    setRemoveIP([...addedIPs]);       
  };   

  const submitNewIP = async() =>{
    const ipInput = document.getElementById('ip-input').value;
    const serverInput = document.getElementById('server-input').value
    const date = new Date();

    const data = {
      ip: ipInput,
      server: serverInput,
      date: date
    }

    const url =  'http://localhost:8080/PostIP'
    const response = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data)
    })
    
    if(response.ok) console.log("Successfully added IP address")
    else  throw new Error("Failed to add IP address");
    
  }  
  const sendNewIP = () =>{
    const ipInput = document.getElementById('ip-input');
    const serverInput = document.getElementById('server-input')
    if(ipInput.value.trim() !== "" && serverInput.value.trim() !== ""){
      submitNewIP();
      ipInput.value="";
      serverInput.value="";
    } else{
      alert('Please fill out all fields before submitting.')
    }
  }  
  const  removeFromList = (e) =>{
    console.log(e,'it has been removed')
    const button = document.getElementById('RemoveIPButton')

    button.addEventListener('click', function(){
      removeIPfromDB(e)
      alert("IP has been removed")

    })
  }

  useEffect(() =>{  
    placeIPs()  
  })

  return (    
    <div className='ModifyDataPage'>
        <div className='MoDTitle'>
            <h1>Modify Data</h1>
        </div>

        <section>
          <div className='RemovIPDiv'>
            <div>
              <h2>Remove IP</h2>
              <div>
                <select name="" id="">
                  <option value="null">no IP selected</option>
                  {
                    removeIP.map((IP, index) => (
                      <option key={index} value={IP} onClick={() => removeFromList(IP)}>
                      {IP}
                      </option>
                   ))
                  }
                </select>
                <button id='RemoveIPButton' >Remove <img src="" alt="" /></button>
              </div>
            </div>
          </div>

          <div className='AddIPDiv'>
            <div className='AddIPDiv-Container'>
              <h2>Add IP</h2>
              <div className='InputGroup'>
                <div className='SubInput'>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add IP</label>
                      <input type="text" placeholder='Add IP' id='ip-input'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add Server ID</label>
                      <input type="text" placeholder='Server ID' id='server-input' />
                  </div>
                </div>
              </div>
              <div className='AddIPDivButtonDiv'>
                <button onClick={sendNewIP}>Add</button>
              </div>
            </div>
          </div>
        </section>

        <div className='MoDSubTitle'>
            <h3>Modify specific data</h3>
        </div>

        <section>
        <div className='AddIPDiv'>
          <div className='ModContainer'>
            <div className='SelectorOptions'>
              <select name="" id=""></select>
              <button id='change'>Change</button>
            </div>
            <div className='ModifyOptions'>
              <div className='ModifyOptions-Item'>
                  <label htmlFor="">Change IP:</label>
                  <input type="text" placeholder='ChangeIP'/>
              </div>
              <div className='ModifyOptions-Item'>
                  <label htmlFor="">Change server:</label>
                  <input type="text" placeholder='ChangeIP'/>
              </div>
            </div>
          </div>
        </div>
        <div className='RemovIPDiv'>
          <div>
            <h2 id='Exportb'>Go to export page</h2>  
            <div className='GoToExportInfo'>
              <p>Click in the button below to export your IPs as an excel file</p>
              <button id='GO' onClick={goToExport}>Export file</button>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default ModifyDataPage