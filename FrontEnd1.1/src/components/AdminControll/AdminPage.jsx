import React from 'react'
import { useState, useEffect } from 'react'
import './Css/AdminPage.css'
const AdminPage = () => {

  const [users, setUsers] = useState([]);
  const [localURL, setLocalURL] = useState();
  const [newUserData, setNewUserData] = useState([]);
  const [localUser, setLocalUser] = useState('None');
  
  const getUsersFromDB = async () =>{
    const url = 'http://localhost:8080/GetAllUsers'
    const response = await fetch(url);;
    const data = await response.json();    
    setUsers(data);
    console.log(users)
  }

  const addAppIDByClick = (e) => {
    const url = `http://localhost:8080/users/${e.id}`;
    const MID = document.getElementById('addMID');
    const PUP = document.getElementById('addPUP');
    const TCS = document.getElementById('addTEL');
    const INF = document.getElementById('addINF');
    const MQS = document.getElementById('addMQS');
    const span = document.getElementById('AdminSpan');

    if(MID.value === "null" ||
       PUP.value === "null" ||
       TCS.value === "null" ||
       INF.value === "null" ||
       MQS.value === "null" ) {
         span.style.display="block";
        setTimeout(() => {
          span.style.display="none";
        }, 2000);
       }
    else{
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
      console.log(newUserData)
      setLocalURL(url)
      setLocalUser(newUserData.username)
    }
  };

  const SubmitButton = async () =>{  
    
    const MID = document.getElementById('addMID');
    const PUP = document.getElementById('addPUP');
    const TCS = document.getElementById('addTEL');
    const INF = document.getElementById('addINF');
    const MQS = document.getElementById('addMQS');
    const span = document.getElementById('AdminSpan1');

    if(MID.value === "null" ||
       PUP.value === "null" ||
       TCS.value === "null" ||
       INF.value === "null" ||
       MQS.value === "null" ) {
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

  useEffect(() =>{
    getUsersFromDB();
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
                      <option value="null">Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>                      
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Puppet</label>
                    <select name="" id="addPUP">
                      <option value="null">Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Teller</label>
                    <select name="" id="addTEL">
                      <option value="null">Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Message Queuing Service</label>
                    <select name="" id="addMQS">
                      <option value="null">Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                  <div className='ChangeAccesItem'>
                    <label htmlFor="">Give access controll to Infrastructure</label>
                    <select name="" id="addINF">
                      <option value="null">Select an option</option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>       
                    </select>
                  </div>
                </div>
              </div>
            </div>
           
            <div className='AdminControlUser-Server'>
              <div className='User-ServerDivision'>
                3
              </div>
              <div className='User-ServerDivision'>
                4
              </div>
            </div>  
          </div>
        </section>
    </div>    
  )
}

export default AdminPage