import React from 'react'
import './css/ModifyDataPage.css'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ModifyDataPage = () => {

  const [spanMessage, setSpanMessage] = useState();
  const [removeIP, setRemoveIP] = useState([]);
  const [removeServer, setRemoveServer] = useState([]);
  const [changeIP, setchangeIP] = useState([]);
  
  const navigator  = useNavigate();

  const getAllPeopleFromDB = async () =>{
    const url = 'http://localhost:8080/GetAllUsers'
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  const ipFilterByAppId = async () => {
    const data = await getAllPeopleFromDB();
    const IPs = await getIP();
    const currentUser = localStorage.getItem('currentUser');
    const userCurrentInfo = data.find(user => currentUser === user.username);
  
    if (!userCurrentInfo) {
      console.error('Current user information could not be found.');
      return;
    }
  
    const options = document.querySelectorAll('.removeOption');
    options.forEach(option => {
      let displayOption = false;
        const currentIP = IPs.find(ip => option.value === ip.ip);
      if (currentIP) {
        if ((userCurrentInfo.canAccesINF && currentIP.applicationID === "INF") ||
            (userCurrentInfo.canAccesMID && currentIP.applicationID === "MID") ||
            (userCurrentInfo.canAccesPup && currentIP.applicationID === "PUP") ||
            (userCurrentInfo.canAccesTCS && currentIP.applicationID === "TCS") ||
            (userCurrentInfo.canAccesMQS && currentIP.applicationID === "MQS")) {
          displayOption = true;
        }
      }
       option.style.display = displayOption ? 'block' : 'none';
    });
  };
  const placeAppsID = async() =>{
    const data = await getAllPeopleFromDB();
    const currentUser = localStorage.getItem('currentUser');
    const userCurrentInfo = data.find(user => currentUser === user.username);
    (userCurrentInfo.canAccesINF === true) ? document.querySelectorAll('.optionINF').forEach((appid) =>{appid.style.display='block'}) : document.querySelectorAll('.optionINF').forEach((appid) =>{appid.style.display='none'});
    (userCurrentInfo.canAccesMID === true) ? document.querySelectorAll('.optionMID').forEach((appid) =>{appid.style.display='block'}) : document.querySelectorAll('.optionMID').forEach((appid) =>{appid.style.display='none'});
    (userCurrentInfo.canAccesPup === true) ? document.querySelectorAll('.optionPup').forEach((appid) =>{appid.style.display='block'}) : document.querySelectorAll('.optionPup').forEach((appid) =>{appid.style.display='none'});
    (userCurrentInfo.canAccesTCS === true) ? document.querySelectorAll('.optionTCS').forEach((appid) =>{appid.style.display='block'}) : document.querySelectorAll('.optionTCS').forEach((appid) =>{appid.style.display='none'});
    (userCurrentInfo.canAccesMQS === true) ? document.querySelectorAll('.optionMQS').forEach((appid) =>{appid.style.display='block'}) : document.querySelectorAll('.optionMQS').forEach((appid) =>{appid.style.display='none'});   
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
    const servers = await getServersFromDB();
    
    const addedIPs = new Set(data.map(element => element.ip));
    const changableIPs = new Set(data.map(element => element));    
    const addedServers = new Set(servers.map(element => element.hostname));    

    setRemoveIP([...addedIPs]);       
    setchangeIP([...changableIPs])
    setRemoveServer([...addedServers])
  };  
  const getServersFromDB = async () =>{
    const url = 'http://localhost:8080/GetAllServers'
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
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
    const validIP = ipInput.value.split("")
    const span = document.getElementById('spanModify');
    const span1 = document.getElementById('spanModify1');


    validIP.forEach(element =>{      
       if(!element.includes(".") && validIP.length <= 7){
        span.style.display = 'flex'
        setTimeout(() => {
          span.style.display = 'none'
        }, 2000);
      } else{
          if(ipInput.value.trim() !== "" && serverInput.value.trim() !== "" && serverInput.selectedIndex != 0 && applicationID.selectedIndex != 0){
            submitNewIP();
            ipInput.value="";
            serverInput.selectedIndex = 0;
            port.value= '';
            applicationID.selectedIndex = 0;
            console.log(applicationID + 'Here')
            
          } else{        
            span1.style.display = 'flex'
            setTimeout(() => {
              span1.style.display = 'none'
            }, 2000);
        }
      } 

    })
  }  
  const removeFromList = (e) =>{
    console.log(e,'it has been removed')
    const ipSelected = changeIP.find(ip => ip.ip === e);
    const button = document.getElementById('RemoveIPButton')

    const changeIPs = document.getElementById('DI-Item-ip')
    const changePort = document.getElementById('DI-Item-port')
    const changeAppID = document.getElementById('DI-Item-appid')
    const changeServer = document.getElementById('DI-Item-server')
    const changeDate = document.getElementById('DI-Item-date')

    changeIPs.innerHTML = ipSelected.ip
    changePort.innerHTML = ipSelected.port
    changeAppID.innerHTML = ipSelected.applicationID
    changeServer.innerHTML = ipSelected.server;
    changeDate.innerHTML = ipSelected.date.substring(0,10);

    button.addEventListener('click', function(){
      removeIPfromDB(e)
      alert("IP has been removed")

    })
  }
  const UpdateFromDB = async (e)=> {
    const url ='http://localhost:8080/updateByIp/' + e.id
    const ip = document.getElementById('ip-input-modify');
    const port = document.getElementById('port-input-modify');
    const server = document.getElementById('server-input-modify');
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
    
    
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    ip.value = '';
    server.selectedIndex = 0;
    port.value = ''; 
    applicationID.selectedIndex = 0;    

    
  }
  const UpdateFromList = (e) =>{
    const ipSelected = changeIP.find(ip => e ===  ip.ip);
    const submitButton = document.getElementById('change')

    const selector = document.getElementById('SelectorModify');

    const changeIPs = document.getElementById('DI-Item-ip')
    const changePort = document.getElementById('DI-Item-port')
    const changeAppID = document.getElementById('DI-Item-appid')
    const changeServer = document.getElementById('DI-Item-server')
    const changeDate = document.getElementById('DI-Item-date')

    const ip = document.getElementById('ip-input-modify');
    const port = document.getElementById('port-input-modify');      
    
    ip.value=ipSelected.ip;
    port.value=ipSelected.port;

    changeIPs.innerHTML = ipSelected.ip
    changePort.innerHTML = ipSelected.port
    changeAppID.innerHTML = ipSelected.applicationID
    changeServer.innerHTML = ipSelected.server;
    changeDate.innerHTML = ipSelected.date.substring(0,10);

    if(ip.value.trim() !== "" && port != ''){
      submitButton.addEventListener("click", ()=>{UpdateFromDB(ipSelected);  selector.selectedIndex = 0;})      
    }else{
      console.error("Error de subnoraml")
    }

  }
  const CheckAdminPrivilege = () => {
    const privilege = localStorage.getItem('privilage');
    const buttons = document.querySelectorAll(".MBO");    

    if (privilege === `"Admin"`) { 
      buttons.forEach(button => {
        button.style.display = 'inline'; 
      })
    } else {
      buttons.forEach(button => {
        button.style.display = 'none'; 
      })
    }
  }
  const ipModifySelected = () =>{
    const modifyIP = document.getElementById('ModifyIpByClick')
    const modifyServer = document.getElementById('ModifyServerByClick');
    const RemoveIpDiv = document.getElementById('RemoveIPDiv');
    const AddIPDiv = document.getElementById('AddIPDiv');
    const ChangeIPDiv = document.getElementById('ModifyIPDiv');
    const RemoveServerDiv = document.getElementById('RemoveServerDiv');
    const AddServerDiv = document.getElementById('AddServerDiv');
    const ChangeServerDiv = document.getElementById('ModifyServerDiv');
    const ChangeDataIP = document.getElementById('DisplayInfo-Modify')
    const ChangeDataServer = document.getElementById('DisplayInfo-Modify1')

    modifyIP.style.backgroundColor= "rgb(80, 74, 106)";
    modifyServer.style.backgroundColor = "#7163BA";

    ChangeServerDiv.style.display = 'none'
    AddServerDiv.style.display = 'none'
    RemoveServerDiv.style.display = 'none'
    ChangeDataIP.style.display='block'
    ChangeDataServer.style.display='none'
    RemoveIpDiv.style.display = 'block'
    AddIPDiv.style.display = 'flex'
    ChangeIPDiv.style.display = 'flex'
  }
  const serverModifySelected = () =>{
    const modifyIP = document.getElementById('ModifyIpByClick')
    const modifyServer = document.getElementById('ModifyServerByClick');

    const RemoveServerDiv = document.getElementById('RemoveServerDiv');
    const RemoveIpDiv = document.getElementById('RemoveIPDiv');
    const AddIPDiv = document.getElementById('AddIPDiv');
    const AddServerDiv = document.getElementById('AddServerDiv');
    const ChangeIPDiv = document.getElementById('ModifyIPDiv');
    const ChangeServerDiv = document.getElementById('ModifyServerDiv');
    const ChangeDataIP = document.getElementById('DisplayInfo-Modify')
    const ChangeDataServer = document.getElementById('DisplayInfo-Modify1')
    
    ChangeDataIP.style.display='none'
    ChangeDataServer.style.display='block'
    ChangeServerDiv.style.display = 'flex'
    AddServerDiv.style.display = 'flex'
    RemoveServerDiv.style.display = 'block'
    RemoveIpDiv.style.display = 'none'
    AddIPDiv.style.display = 'none'
    ChangeIPDiv.style.display = 'none'

    modifyServer.style.backgroundColor= "rgb(80, 74, 106)";
    modifyIP.style.backgroundColor = "#7163BA";
  }
  const removeServerFromDB = async (e) =>{
    await fetch(e, {method: 'DELETE'})
  }
  const removeServerFromList = async (e) =>{
    const url = 'http://localhost:8080/deleteServer/' + e
    const button = document.getElementById('RemoveServerButton');
    button.addEventListener('click', function async(){
      alert("Server has been removed")
      removeServerFromDB(url);
    })

  }
  const editServerFromDataBase = async (url, data) =>{    

    alert("Server succesfully edited")
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })     
  }
  const editServerinList = async (e) =>{

    const servers = await getServersFromDB()
    const serverSelected = servers.find(server => e === server.hostname)
    const url = 'http://localhost:8080/updateServerById/' + serverSelected.id;
    const hostname = document.getElementById('server-hostname-modify');
    const DestAddress = document.getElementById('server-DestAddress-input-modify');
    const Port = document.getElementById('server-DestinationPort-modify');
    const currentUser = localStorage.getItem('currentUser');
    const date = new Date();
    const button = document.getElementById('changeServer');

    const data = {
      hostname: hostname.value,
      destinationAddress: DestAddress.value,
      destinationPort: Port.value,
      createdBy: serverSelected.createdBy,
      modifyBy: currentUser,
      dateCreated: date
    }

    button.addEventListener( 'click', async ()=>{
      editServerFromDataBase(url, data);

    })

  }
  const sendNewServer = async () =>{
    const hostname = document.getElementById('hostname-input');
    const DestAddres = document.getElementById('DestAddress-number');
    const DestPort = document.getElementById('DestinationPort-input');
    const currentUser = localStorage.getItem('currentUser');
    const date = new Date();

    const data = {
      hostname: hostname.value,
      destinationAddress: DestAddres.value,
      destinationPort: DestPort.value,
      createdBy: currentUser,
      modifyBy: currentUser,
      dateCreated: date
    }

    const url = 'http://localhost:8080/PostServer';
    await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data)
    })

    hostname.value = '';
    DestAddres.value = '';
    DestPort.value = '';
  }

  useEffect(() =>{  
    placeAppsID();
    placeIPs()  ;
    CheckAdminPrivilege();
    ipFilterByAppId()
  })

  return (    
    <div className='ModifyDataPage'>
        <div className='MoDTitle'>
            <h1>Modify Data</h1>
            <span id='spanModify' className='Span_Modify'>Invalid IP!, please write a valid</span>
            <span id='spanModify1' className='Span_Modify'>Please fill out all fields before submitting</span>
            <div className='ModifyServerOrIP'>
              <button className='MBO' id='ModifyIpByClick' onClick={ipModifySelected}>Modify IP</button>
              <button className='MBO' id='ModifyServerByClick' onClick={serverModifySelected}>Modify Server</button>
            </div>            
        </div>

        <section>
          <div className='RemovIPDiv'>
            <div id='RemoveIPDiv'>
              <h2>Remove IP</h2>
              <div>
                <select name="" id="">
                  <option value="null">no IP selected</option>
                  {
                    removeIP.map((IP, index) => (
                      <option key={index} value={IP} onClick={() => removeFromList(IP)} className='removeOption'>
                      {IP}
                      </option>
                   ))
                  }
                </select>
                <button id='RemoveIPButton' >Remove <img src="" alt="" /></button>
              </div>
            </div>
            <div id='RemoveServerDiv'>
              <h2>Remove Server</h2>
              <div>
                <select name="" id="">
                  <option value="null">no Server selected</option>
                  {
                    removeServer.map((server, index) => (
                      <option key={index} value={server} onClick={() => removeServerFromList(server)}>
                      {server}
                      </option>
                   ))
                  }
                </select>
                <button id='RemoveServerButton' >Remove<img src="" alt="" /></button>
              </div>
            </div>
          </div>
          <div className='AddIPDiv'>
            <div className='AddIPDiv-Container' id='AddIPDiv'>
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
                        <option value="MID" className='optionMID'>Middleware</option>
                        <option value="PUP" className='optionPup'>Puppet</option>
                        <option value="INF" className='optionINF'>Infrastructure</option>
                        <option value="TCS" className='optionTCS'>Teller</option>
                        <option value="MQS" className='optionMQS'>Message Queuing Service</option>
                      </select>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add Server ID</label>
                      <select name="" id="server-input" className='application_info_CLASS'>
                        <option value="null">No server selected</option>
                        {
                          removeServer.map((server, index) => (
                            <option key={index} value={server}>{server}</option>
                          ))
                        }
                      </select>
                      
                  </div>
                </div>
              </div>
              <div className='AddIPDivButtonDiv'>
                <button onClick={sendNewIP}>Add</button>
              </div>
            </div>
            <div className='AddIPDiv-Container' id='AddServerDiv'>
              <h2>Add Server</h2>
              <div className='InputGroup'>
                <div className='SubInput'>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add Hostname</label>
                      <input type="text" placeholder='Hostname' id='hostname-input'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add Dest. Address</label>
                      <input type="text" placeholder='Dest. Address' id='DestAddress-number'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Add Destination Port</label>
                      <input type="number" placeholder='Destination Port' id='DestinationPort-input' />
                      
                  </div>
                </div>
              </div>
              <div className='AddIPDivButtonDiv'>
                <button onClick={sendNewServer}>Add</button>
              </div>
            </div>
          </div>
        </section>

        <div className='MoDSubTitle'>
            <h3>Modify specific data</h3>
        </div>

        <section>
        <div className='AddIPDiv'>
          <div className='ModContainer' id='ModifyIPDiv'>
            <div className='SelectorOptions'>
              <select name="" id="SelectorModify">
              <option value="null">no IP selected</option>
                  {
                    removeIP.map((IP, index) => (
                      <option key={index} className='removeOption' value={IP} onClick={() => UpdateFromList(IP)}>
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
                        <option value="MID" className='optionMID'>Middleware</option>
                        <option value="PUP" className='optionPup'>Puppet</option>
                        <option value="INF" className='optionINF'>Infrastructure</option>
                        <option value="TCS" className='optionTCS'>Teller</option>
                        <option value="MQS" className='optionMQS'>Message Queuing Service</option>
                      </select>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change Server ID</label>
                      <select name="" id="server-input-modify" className='application_info_CLASS'>
                        <option value="null">No server selected</option>
                        {
                          removeServer.map((server, index) => (
                            <option key={index} value={server}>{server}</option>
                          ))
                        }
                      </select>
                  </div>
                </div>
              </div>
          </div>
          <div className='ModContainer' id='ModifyServerDiv'>
            <div className='SelectorOptions'>
              <select name="" id="SelectorModify">
              <option value="null">no server selected</option>
                  {
                    removeServer.map((server, index) => (
                      <option key={index} value={server} onClick={() => editServerinList(server)}>
                      {server}
                      </option>
                   ))
                  }
              </select>
              <button id='changeServer'>Change</button>
            </div>
            <div className='InputGroup' id='InGroup'>
                <div className='SubInput'>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change hostname</label>
                      <input type="text" placeholder='hostname' id='server-hostname-modify'/>
                  </div>
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change Dest. Address</label>
                      <input type="number" placeholder='Dest. Address' id='server-DestAddress-input-modify'/>
                  </div>                  
                  <div className='InputGroup-Item'>
                      <label htmlFor="">Change destination Port</label>
                      <input type="text" placeholder='Destination Port' id='server-DestinationPort-modify' />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='changeItem1' id='DisplayInfo-Modify'>
          <div className='DisplayInfo-changeItem1'>
            <h2 id='Exportb'>Selected IP data</h2> 
            <div className='informationChangeDiv'>
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
        </div>
        <div className='changeItem1' id='DisplayInfo-Modify1'>
          <div className='DisplayInfo-changeItem1'>
            <h2 id='Exportb'>Selected server data</h2> 
            <div className='informationChangeDiv'>
              <div className='DI-Item'>
                <h4>Hostname: </h4> <p id='DI-Item-Hostname'>---</p>
              </div>            
              <div className='DI-Item'>
                <h4>Dest. Address: </h4> <p id='DI-Item-DestAddress'>---</p>
              </div>            
              <div className='DI-Item'>
                <h4>Destination Port: </h4> <p id='DI-Item-port'>---</p>
              </div>                     
            </div>             
          </div>
        </div>
        </section>
    </div>
  )
}

export default ModifyDataPage