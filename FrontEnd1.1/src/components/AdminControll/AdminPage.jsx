import React from 'react'
import { useState, useEffect } from 'react'
import './Css/AdminPage.css'
const AdminPage = () => {

  const [users, setUsers] = useState([]);
  const [servers, setServers] = useState([]);
  const [localURL, setLocalURL] = useState();
  const [newUserData, setNewUserData] = useState([]);
  const [localUser, setLocalUser] = useState('None');
  
  const getUsersFromDB = async () =>{
    const url = 'http://localhost:8080/GetAllUsers'
    const response = await fetch(url);;
    const data = await response.json();    
    setUsers(data);
  }
  const addAppIDByClick = (e) => {
    const url = `http://localhost:8080/users/${e.id}`;
    const MID = document.getElementById('addMID');
    const PUP = document.getElementById('addPUP');
    const TCS = document.getElementById('addTEL');
    const INF = document.getElementById('addINF');
    const MQS = document.getElementById('addMQS');
    const span = document.getElementById('AdminSpan');

    if(localUser === 'None' || localUser === '') {
      span.style.display="block";
      setTimeout(() => {
        span.style.display="none";
      }, 2000);
     }
      span.style.display="none";
      const data = {
        username: e.username,
        password: e.password,
        user_IP: e.user_IP,
        is_admin: e.is_admin,      
        connection: e.connection,
        canAccesINF: INF.value,
        canAccesMID: MID.value,
        canAccesMQS: MQS.value,
        canAccesPup: PUP.value,
        canAccesTCS: TCS.value
      };
      setNewUserData(data);
      setLocalURL(url)
      setLocalUser(newUserData.username)    
  };
  const SubmitButton = async () =>{  
    
    const MID = document.getElementById('addMID');
    const PUP = document.getElementById('addPUP');
    const TCS = document.getElementById('addTEL');
    const INF = document.getElementById('addINF');
    const MQS = document.getElementById('addMQS');
    const span = document.getElementById('AdminSpan1');

    if(localUser === 'None' || localUser === '') {
      span.style.display="block";
      setTimeout(() => {
        span.style.display="none";
      }, 2000);
     }
    else{
      await fetch(localURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData)       
      });      
      setLocalUser('None')
      MID.selectedIndex = 0;
      PUP.selectedIndex = 0;
      TCS.selectedIndex = 0;
      INF.selectedIndex = 0;
      MQS.selectedIndex = 0;
      alert("Changes made: " + "\n" +
      "MID: " + JSON.stringify(newUserData.canAccesMID)
      + "\n" + "INF: " + JSON.stringify(newUserData.canAccesINF)
      + "\n" + "MQS: " + JSON.stringify(newUserData.canAccesMQS)
      + "\n" + "PUP: " + JSON.stringify(newUserData.canAccesPup)
      + "\n" + "TCS: " + JSON.stringify(newUserData.canAccesTCS));
    }
  }
  const getServersFromDB = async () =>{
    const url = 'http://localhost:8080/GetAllServers'
    const response = await fetch(url);
    const data = await response.json();    
    setServers(data);
  }
  const getInformationFromList = (e) =>{
    console.log(e);   
    const hostname = document.getElementById('serverHostname');
    const DestAddress = document.getElementById('serverDestAddress');
    const DestPort = document.getElementById('serverDestPort');
    const DateModified = document.getElementById('serverDateModified');
    const ModifyBy = document.getElementById('serverModified');
    const CreatedBy = document.getElementById('serverCreated');

    hostname.innerHTML = e.hostname;
    DestAddress.innerHTML = e.destinationAddress;
    DestPort.innerHTML = e.destinationPort;
    DateModified.innerHTML = e.dateCreated.substring(0,10);
    ModifyBy.innerHTML = e.modifyBy;
    CreatedBy.innerHTML = e.createdBy;
  }
  useEffect(() =>{
    getUsersFromDB();
    getServersFromDB();
  }, [])
  
  return (
    <div className='AdminPage'>
        <div className='MoDTitle'>
            <h1>Administrator configurations</h1>
            <span className='AdminSpan' id='AdminSpan'>Make sure to fill  all fields before choosing an user.</span>
            <span className='AdminSpan' id='AdminSpan1'>Make sure to fill  all fields before submitting .</span>
        </div>
        <section>
          <div className="containerPrivileges">
          <div className='DivPrivileges'>
              <div className='PrivTitle'>
                <h2>Allow Application ID to users</h2>
              </div>
              <div className='Privileged-Container'>
              <div className='Privileged-Container-Selector-User'>
                <h1>Select User : {localUser}</h1>
                <div className='UsersToChoose'>
                  {
                    users.map((user, index)=> (
                      <div key={index} className='UsersInList' onClick={() => addAppIDByClick(user)}><h2>{user.username}</h2></div>
                    ))
                  }
                </div>
                <button onClick={SubmitButton}>submit</button>
              </div>
                <div className='UsersToChangeAccesContainer'>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Middleware</label>
                    <select name="" id="addMID">
                      <option value={false}>Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>                      
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Puppet</label>
                    <select name="" id="addPUP">
                      <option value={false}>Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Teller</label>
                    <select name="" id="addTEL">
                      <option value={false}>Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Message Queuing Service</label>
                    <select name="" id="addMQS">
                      <option value={false}>Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Infrastructure</label>
                    <select name="" id="addINF">
                      <option value={false}>Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                </div>
              </div>
            </div>           
            <div className='AdminControlUser-Server'>
              <div className='User-ServerDivision'>
                <h1>Select a server</h1>
                <p>Select a server to display all its information</p>
                <select name="" id="serversSelectorAdmin">
                  <option value="null">Select a server</option>
                  {
                    servers.map((server, index) =>(
                      <option key={index} value={server.hostname} onClick={() => getInformationFromList(server)}>{server.hostname}</option>
                    ))
                  }
                </select>
              </div>
              <div className='User-ServerDivision'>
                <h1 id='serverchangeText'>Server information</h1>
                <div className='ServerInfo'>
                  <h4>Hostname</h4><p id='serverHostname'>---</p>
                </div>
                <div className='ServerInfo'>
                  <h4>Destination Address</h4><p id='serverDestAddress'>---</p>
                </div>
                <div className='ServerInfo'>
                  <h4>Destination Port</h4><p id='serverDestPort'>---</p>
                </div>
                <div className='ServerInfo'>
                  <h4>Date Modified</h4><p id='serverDateModified'>---</p>
                </div>
                <div className='ServerInfo'>
                  <h4>Modified by</h4><p id='serverModified'>---</p>                  
                </div>
                <div className='ServerInfo'>
                  <h4>Created by</h4><p id='serverCreated'>---</p>                  
                </div>
              </div>
            </div>  
          </div>
        </section>
    </div>    
  )
}

export default AdminPage