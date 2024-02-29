import React from 'react'
import { useEffect } from 'react'
import './css/DashboardMenu.css'

const DashboardMenu = () => {

    useEffect(() => {
        const bringDB = async () => {
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
        
        const CreateDBCard = async () => { // This function now needs to be async to use await
            try {
                let dbData = await bringDB(); // Wait for the data to be fetched
        
                const container = document.getElementById('DBC-Container');
                const card = document.createElement('div');
                card.classList.add('DBDataCard');
                card.textContent = "SEXO"; 
                container.append(card);
                console.log(dbData);

            } catch (error) {
                console.error("Error while creating DB cards: ", error);
            }
        };
            
        document.addEventListener('DOMContentLoaded', CreateDBCard()); 

    },[])



  return (
    <div className='dashboard-menu'>
        <div className='DashBoardTitle'>
            <p>Primary</p>
            <h2>Dashboard</h2>
        </div>
        <div className='TodayData'>
            <h4>Today's Data</h4>
            <div className='DBDataCard-Container' id='DBC-Container'>
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='SecondaryData'>
            <div className='UsersTable'>
                <table>
                    <tr>
                        <th>
                            UserNames
                        </th>
                        <th>
                            Last Connection
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Pablito
                        </td>
                        <td>
                            5 days ago
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DashboardMenu