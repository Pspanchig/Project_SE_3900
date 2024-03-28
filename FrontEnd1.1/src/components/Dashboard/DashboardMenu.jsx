import React from 'react'
import { useEffect, useState } from 'react'
import './css/DashboardMenu.css'
import icon1 from '../../assets/refresh.svg'
import { useNavigate } from 'react-router-dom'

const DashboardMenu = () => {

    const  navigate = useNavigate()
    const [usersCard, setUsersCard] = useState([]);
    const [peopleTable, setPeopleTable] = useState([]);
    const [admin, setAdmin] = useState();

    const getOnlineUsers = async () => {
        const URL = 'http://localhost:8080/GetAllOnline';
        const response = await fetch(URL);
        const data = await response.json(); // Asegúrate de esperar a que se resuelva
        return data;
    };
    const placeOnlineUsers = async () => {
        const data = await getOnlineUsers();
        const addedCards = [...new Set(data.map(element => element.username))];
        setUsersCard(addedCards);
    };
    const goToManage = () =>{
        navigate("/dashboard/manage");
    }
    const goToModify = () =>{
        navigate("/dashboard/modify");
    }
    const bringIP_DB = async () => {
        const url = "http://localhost:8080/GetAllIPs";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            const data = await response.json();
            // console.log("Information: ", data);
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

        setPeopleTable(data)
        return data;
      } catch (error) {
        console.error("We got this error", error);
      }
    };
    const removeUsers = async (data) => {
        const url = `http://localhost:8080/deleteUser/${data.username}`;
        await fetch(url, {method: 'DELETE'});
    };
    const setPrivilege = () =>{
        const Admin = localStorage.getItem('privilage');
        setAdmin(Admin)
    }
    useEffect(()=>{         
        getUsers();        
        TryDBConnection();
        placeOnlineUsers();
        setPrivilege();
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
            <div className='WelcomeBack' id='AdminPassCode'>
                {
                    admin === `"Admin"` && (
                        <h3>Admin Code: 1120</h3>
                    )
                }
                {
                    admin === `"user"` && (
                        <h3>Normal user</h3>
                    )
                }
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
                {usersCard.map((username, index) => ( 
                    <div key={index} className='UsersCard'>
                        <p>{username}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <div className='SecondaryData'>
            <div className='UsersTable'> 
                <div className='tableContainerUsers'>
                    <table className="employee-table">
                    <thead>
                        <tr>
                        {
                            admin === `"user"` && (
                                <>
                                    <th>Users <span className="icon">👤</span></th>
                                    <th>Users IP <span className="icon">🌐</span></th>
                                </>
                            )
                        }
                        {
                            admin === `"Admin"` && (
                                <>
                                    <th>Users <span className="icon">👤</span></th>
                                    <th>Users IP <span className="icon">🌐</span></th>
                                    <th>Remove User <span className="icon">❌</span></th>
                                </>
                            )
                        }
                        </tr>
                    </thead>
                    <tbody id='tableContainer'>                                    
                    {
                        admin === `"Admin"` && peopleTable.map((data, index) => (
                            <tr key={index}> {/* Move the key here for unique identification of each row */}
                                <td>{data.username}</td>
                                <td>{data.user_IP}</td>
                                <td onClick={() => removeUsers(data)} id="removeUserID"><p>remove</p></td>
                            </tr>
                        ))
                    }
                            {
                                admin === `"user"` && peopleTable.map((data,index) =>(  
                                    <tr>                                                    
                                        <td key={index}>{data.username}</td>
                                        <td key={index}>{data.user_IP}</td>
                                    </tr>
                                ))
                            }               
                    </tbody>
                    </table>
                </div>           
                <div className='SecondaryDataButtons'>
                    <a href="" onClick={goToModify} className='SDButtons'><h2>Update data </h2><img src={icon1} alt="" /></a>
                    <a href="" onClick={goToManage} className='SDButtons'><h2>Manage & view Data </h2></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DashboardMenu