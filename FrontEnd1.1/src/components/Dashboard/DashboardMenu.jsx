import React from 'react'
import { useEffect } from 'react'
import './css/DashboardMenu.css'

const DashboardMenu = () => {

    useEffect(()=>{
        const bringIP_DB = async () => {
            const url = "http://localhost:8080/findAll";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                const data = await response.json();
                console.log("Information: ", data);
                return data; 
            } catch (error) {
                console.error("The problem is here: ", error);                
                throw error;
            }
        };

        const BringUsers_DB = async() =>{
            const URL = 'http://localhost/Php_login/Php_login.php';
            try {
              const response = await fetch(URL);
              if (!response.ok) {
                throw new Error('The connection with the db failed somehow');
              }
              const data = await response.json();
      
              return data;
            } catch (error) {
              throw error
            }
        }
        
        const TryDBConnection = async () => { 
            const status = document.getElementById('Online')
            const userStatus = document.getElementById('OnlineU')
            try {
                await bringIP_DB(); 
                status.innerHTML = "Online";
                status.style.color = 'green';

            } catch (error) {
                console.error("Error while creating DB cards: ", error);
                status.innerHTML = "Offline";
                status.style.color = 'red';
            }

            try {
                await BringUsers_DB();
                userStatus.innerHTML = "Online"
                userStatus.style.color = 'green';
            } catch(error){
                userStatus.innerHTML = "Offline"
                userStatus.style.color = 'red';

            }
        };    
            

        TryDBConnection();
    })


  return (
    <div className='dashboard-menu'>
        <div className='DashBoardTitle'>
            <div className='titleContainer'>
                <p>Primary</p>
                <h2>Dashboard</h2>
            </div>
        </div>
        <div className='TodayData'>
            <div className='DBDataCard-Container' id='DBC-Container'>
            <h4>Today's Data</h4>
            <div className='SubContainer-DBCards'>
                <div className='DBDataCard'>
                    <p>Data base</p>
                    <p>IP data base</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>loading...</p>
                    </div>
                </div>
                <div className='DBDataCard' style={{backgroundColor: "lightgreen"}}>
                    <p>Data base</p>
                    <p>Users data base</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='OnlineU'>loading...</p>
                    </div>
                </div>
            </div>  
        </div>

        <div className='UsersConnectedContainer'>
        <h4>Users connected </h4>
            <div className='UCSubContainer'>
                <div className='UsersCard'>
                    <h3>Pablo</h3>
                    <p>048383829</p>
                </div>
            </div>
        </div>
    </div>

    <div className='SecondaryData'>
        <div className='UsersTable'>
            
            <table class="employee-table">
                <thead>
                    <tr>
                    <th>Employees <span class="icon">👤</span></th>
                    <th>Last Connexion <span class="icon">⏰</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>John Doe</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    <td>Sponge Bob</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    <td>Pablo</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    <td>John Doe</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    <td>Andres</td>
                    <td>...</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DashboardMenu