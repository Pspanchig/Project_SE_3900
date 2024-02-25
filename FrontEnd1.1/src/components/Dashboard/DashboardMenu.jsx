import React from 'react'
import { useEffect } from 'react'
import './css/DashboardMenu.css'

const DashboardMenu = () => {

    useEffect(() => {
        const CreateAnyElement = () =>{
            const container =  document.getElementById('DBC-Container');
            const div = document.createElement('div')
            const h1 = document.createElement('h1')
            h1.innerHTML = '1';
    
            container.append(div)
            div.append(h1)        
        }
        CreateAnyElement();
    })


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
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
                <div className='DBDataCard'>
                    <p>Data base 1</p>
                    <p>Employeers 1</p>
                    <div className='DBDataCard-Status'>
                        <p>Status</p>
                        <p id='Online'>Online</p>
                    </div>
                </div>
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