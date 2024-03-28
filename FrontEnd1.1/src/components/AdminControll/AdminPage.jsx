import React from 'react'
import './Css/AdminPage.css'
const AdminPage = () => {
  return (
    <div className='AdminPage'>
        <div className='MoDTitle'>
            <h1>Administrato configurations</h1>
        </div>
        <section>
          <div class="containerPrivileges">
          <div className='DivPrivileges'>
              <div className='PrivTitle'>

              </div>
            </div>
            <div className='DivPrivileges'>
              <div className='PrivTitle'>

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