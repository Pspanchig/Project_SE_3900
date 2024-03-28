import React from 'react'
import './css/ModifyDataPage.css'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ModifyDataPage = () => {

  const [removeIP, setRemoveIP] = useState([]);
  const [changeIP, setchangeIP] = useState([]);
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
    const changableIPs = new Set(data.map(element => element));
    setRemoveIP([...addedIPs]);       
    setchangeIP([...changableIPs])
  };   
  const submitNewIP = async() =>{
    const ipInput = document.getElementById('ip-input').value;
    const serverInput = document.getElementById('server-input').value
    const applicationID = document.getElementById('application_info').value;
    const port = document.getElementById('port-number').value;
    const currentUser = localStorage.getItem('currentUser');
    const date = new Date();

    const data = {
      ip: ipInput,
      server: serverInput,
      date: date,
      applicationID: applicationID,
      port: port,
      createdBy: currentUser,
      modifyBy: currentUser
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
    const applicationID = document.getElementById('application_info');
    const port = document.getElementById('port-number');

    if(ipInput.value.trim() !== "" && serverInput.value.trim() !== ""){
      submitNewIP();
      ipInput.value="";
      serverInput.value="";
      port.value= '';
      applicationID.selectedIndex = 0;
      console.log(applicationID + 'Here')

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
  const UpdateFromDB = async (e)=> {
    const url ='http://localhost:8080/updateByIp/' + e.id
    const ip = document.getElementById('ip-input-modify');
    const server = document.getElementById('server-input-modify');
    const port = document.getElementById('port-input-modify');
    const applicationID = document.getElementById('application-id-modify');    
    const currentUser = localStorage.getItem('currentUser');

    const date = new Date().toISOString();     

    const data = {
      ip: ip.value,
      server: applicationID.value,
      date: date,
      applicationID: server.value,
      port: port.value,
      createdBy: e.createdBy,
      modifyBy: currentUser
      
    }
    
    if(ip.value === '') {
      alert("Empty")
    }    
    else {
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
  
      ip.value = '';
      server.value = '';
      port.value = ''; 
      applicationID.selectedIndex = 0;
    }

    
  }
  const UpdateFromList = (e) =>{
    const ipSelected = changeIP.find(ip => e ===  ip.ip);
    const submitButton = document.getElementById('change')
    const ipOptions = document.getElementById('DisplayInfo-Modify');
    const goToExport = document.getElementById('GoToExportPage-Modify')
    const selector = document.getElementById('SelectorModify');

    const changeIPs = document.getElementById('DI-Item-ip')
    const changePort = document.getElementById('DI-Item-port')
    const changeAppID = document.getElementById('DI-Item-appid')
    const changeServer = document.getElementById('DI-Item-server')

    changeIPs.innerHTML = ipSelected.ip
    changePort.innerHTML = ipSelected.port
    changeAppID.innerHTML = ipSelected.applicationID
    changeServer.innerHTML = ipSelected.server;

    selector.addEventListener('change', function() {
      if(this.selectedIndex === 0) {
        ipOptions.style.display='none'
        goToExport.style.display='block';  
      } else{
        ipOptions.style.display='block'
        goToExport.style.display='none';  
      }
    });
    
    submitButton.addEventListener("click", ()=>{UpdateFromDB(ipSelected);  selector.selectedIndex = 0;})      

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
                      <label htmlFor="">PORT</label>
                      <input type="number" placeholder='PORT' id='port-number'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Application ID</label>                      
                      <select name="" id="application_info" className='application_info_CLASS'>
                        <option value="null">none</option>
                        <option value="MID">Middleware</option>
                        <option value="PUP">Puppet</option>
                        <option value="INF">Infrastructure</option>
                        <option value="INF">Teller</option>
                        <option value="TCS">Message Queuing Service</option>
                      </select>
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
              <select name="" id="SelectorModify">
              <option value="null">no IP selected</option>
                  {
                    removeIP.map((IP, index) => (
                      <option key={index} value={IP} onClick={() => UpdateFromList(IP)}>
                      {IP}
                      </option>
                   ))
                  }
              </select>
              <button id='change'>Change</button>
            </div>
            <div className='InputGroup' id='InGroup'>
                <div className='SubInput'>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change IP</label>
                      <input type="text" placeholder='IP' id='ip-input-modify'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change PORT</label>
                      <input type="number" placeholder='PORT' id='port-input-modify'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Application ID</label>                      
                      <select name="" id="application-id-modify" className='application_info_CLASS'>
                        <option value="null">none</option>
                        <option value="MID">Middleware</option>
                        <option value="PUP">Puppet</option>
                        <option value="INF">Infrastructure</option>
                        <option value="INF">Teller</option>
                        <option value="TCS">Message Queuing Service</option>
                      </select>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change Server ID</label>
                      <input type="text" placeholder='Server ID' id='server-input-modify' />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='RemovIPDiv' id='GoToExportPage-Modify'>
          <div >
            <h2 id='Exportb'>Go to export page</h2>  
            <div className='GoToExportInfo'>
              <p>Click in the button below to export your IPs as an excel file</p>
              <button id='GO' onClick={goToExport}>Export file</button>
            </div>
          </div>
        </div>
        <div className='changeItem1' id='DisplayInfo-Modify'>
          <div className='DisplayInfo-changeItem1'>
            <h2 id='Exportb'>Selected IP data</h2>  
            <div className='DI-Item'>
              <h4>IP: </h4> <p id='DI-Item-ip'>---</p>
            </div>            
            <div className='DI-Item'>
              <h4>PORT: </h4> <p id='DI-Item-port'>---</p>
            </div>            
            <div className='DI-Item'>
              <h4>Server ID: </h4> <p id='DI-Item-appid'>---</p>
            </div>            
            <div className='DI-Item'>
              <h4>Application ID: </h4> <p id='DI-Item-server'>---</p>
            </div>            
            <div className='DI-Item'>
              <h4>Date: </h4> <p id='DI-Item-date'>---</p>
            </div>            
          </div>
        </div>
        </section>
    </div>
  )
}

export default ModifyDataPage