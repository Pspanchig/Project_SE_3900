import React from 'react'
import './css/ManageData_Menu.css'

const ManageData_Menu = () => {
  return (
    <div className='ManageData_Menu'>
       <div  className="left-container">
          <div className='ManagedataTitle'>
              <h1>Manage Data</h1>
          </div>  
          <div className='SortData'>
            <h4>Sort data</h4>
            <div className='sortDataContainer'>
               <div className='findSort'>
                  <p>Sort by Application ID:</p>
                  <input type="text" />
               </div>
               <div className='findSort'>
                  <p>Sort by Application ID:</p>
                  <input type="text" />
               </div>
               <div className='findSort'>
                  <p>Sort by Application ID:</p>
                  <input type="text" />
               </div>       
            </div>
          </div>

          <div className='DataInformation'>
            <div className='DataContainerr'>
               <div className='IPSelecteted'>
                  <h2>IP selected: </h2>
                  <div className='IPSelectedBox'>
                     <p>153.91.251.213</p>
                  </div>
               </div>
               <div className='divideIP-Information'>
                  <div>
                     <div className='IP_Information_Title'>
                        <h3>IP information</h3>
                     </div>
                     <div className='IP_Information'>
                        <div className='IP_Data'>
                           <p>Application ID:</p>
                           <p>12837462728811</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Server ID:</p>
                           <p>2</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Date Modified:</p>
                           <p>02/01/24</p>
                        </div>
                     </div>
                  </div>

                  <div className='IP-Options'>
                     <a href="">
                        <div className='OptionIP'>
                           <h3>Add to White List</h3>
                        </div>
                     </a>
                     <a href="">
                        <div className='OptionIP'>
                           <h3>Remove from White List</h3>
                        </div>
                     </a>
                     <a href="">
                        <div className='OptionIP'>
                           <h3>Go to Modify</h3>
                        </div>
                     </a>


                     </div>
               </div>
               
            </div>
          </div>
       </div>
       <div  className="right-container">
          <div className='IPList'>
            
          </div>
       </div>
    </div>
  )
}

export default ManageData_Menu