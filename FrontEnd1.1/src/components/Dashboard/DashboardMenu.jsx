import React from 'react'
import { useEffect } from 'react'
import './css/DashboardMenu.css'
import icon1 from '../../assets/refresh.svg'
import { useNavigate } from 'react-router-dom'
const DashboardMenu = () => {

    const  navigate = useNavigate()

    const goToManage = () =>{
        navigate("/dashboard/manage");
    }
    useEffect(()=>{
        const bringIP_DB = async () => {
            const url = "http://localhost:8080/GetAllIPs";
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
            const URL = 'http://localhost:8080/GetAllUsers';
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
                
        const getUsers = async () => {
          const URL = 'http://localhost:8080/GetAllUsers';
          try {
            const response = await fetch(URL);
            if (!response.ok) {
              throw new Error('The connection with the db failed somehow');
            }
            const data = await response.json();

            createUsersCard(data);
            return data;
          } catch (error) {
            console.error("We got this error", error);
          }
        };
    
        const createUsersCard = (data) => {
            const addedNames = new Set(); 
            const tcontainer = document.getElementById('tableContainer');
        
            tcontainer.innerHTML = '';                        

            if(addedNames.size >= 5){
                tcontainer.style.overflowY = 'auto';
            } else {
                tcontainer.style.overflowY = 'scroll'; // o 'hidden', dependiendo de lo que necesites
            }

            data.forEach((element) => {
                if (element.username && !addedNames.has(element.username)) {

                    const tcard = document.createElement('tr');
                    
                    const th3 = document.createElement('td');
                    th3.textContent = element.username ; 

                    const tp = document.createElement('td');
                    tp.innerHTML = element.user_IP
                    
                    tcontainer.appendChild(tcard);
                    tcard.appendChild(th3);
                    tcard.appendChild(tp);
                            
                    addedNames.add(element.username); 
                }
            });
        }
               
        getUsers();        
        TryDBConnection();
        console.log(localStorage.getItem('currentUser'));
    })



  return (
    <div className='dashboard-menu'>
        <div className='DashBoardTitle'>
            <div className='titleContainer'>
                <p>Primary</p>
                <h2>Dashboard</h2>
            </div>
            <div className='WelcomeBack'>
                <h1>Welcome Back {localStorage.getItem("currentUser")}!</h1>
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
            <div className='UCSubContainer' id='UCSubContainer'>

            </div>
        </div>
        </div>
        <div className='SecondaryData'>
            <div className='UsersTable'>            
                <table className="employee-table">
                <thead>
                    <tr>
                    <th>Employees <span className="icon">👤</span></th>
                    <th>Last Connexion <span className="icon">⏰</span></th>
                    </tr>
                </thead>
                <tbody id='tableContainer'>
                </tbody>
                </table>
                <div className='SecondaryDataButtons'>
                    <a href="" onClick={goToManage} className='SDButtons'><h2>Update data </h2><img src={icon1} alt="" /></a>
                    <a href="" className='SDButtons'><h2>Manage & view Data </h2></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DashboardMenu