import React from 'react'
import './css/ManageData_Menu.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageData_Menu = () => {

   const navigator = useNavigate();
   const [ips, setIps] = useState([]);
   const [whiteIps, setWhiteIps] = useState([]);
   const [selection, setSelection] = useState('tipo1');
   const [selectedInfo, setSelectedInfo] = useState(null);

   const goToModify = () =>{
      navigator("/dashboard/modify")
   }
   const getIP = async () => {
      const URL = 'http://localhost:8080/GetAllIPs';
      const response = await fetch(URL);
      const data = await response.json();
      return data;
   }
   const getWhiteListIP = async () =>{
      const whiteUrl= "http://localhost:8080/GetWhiteList"
      const reponse = await  fetch (whiteUrl);
      const data = await reponse.json();
      return data;
   }
   const placeIPs = async () => {
      const data = await getIP();
      const addedIPs = new Set(data.map(element => element.ip));
      setIps([...addedIPs]);      
   };   
   const placeWhiteList = async () => {
      const WhiteList = await  getWhiteListIP();
      const addedList = new Set(WhiteList.map(element=>element.ip))
      setWhiteIps([...addedList]);
   }
   const getInformationByClick = async(e) =>{
      const IP1 = document.getElementById('IP1');
      const IP2 = document.getElementById('IP2');
      const server = document.getElementById('serverID');
      const date = document.getElementById('dateID');  
      const port = document.getElementById('PORT');
      const createdBy = document.getElementById('Created_By');
      const modifyBy = document.getElementById('Modify_By');
      
      const data = await getIP();
      const selectedInfo = data.find(d => d.ip === e);
      setSelectedInfo(selectedInfo);
      console.log(selectedInfo);
      
      IP1.innerHTML = e;
      port.innerHTML = selectedInfo.port;
      IP2.innerHTML = selectedInfo.applicationID;
      server.innerHTML =selectedInfo.server;
      date.innerHTML = selectedInfo.date.substring(0,10)  
      createdBy.innerHTML = selectedInfo.createdBy;
      modifyBy.innerHTML = selectedInfo.modifyBy;       
   }      
   const addToWhiteList = async () => {
      if (selectedInfo) {
        const url = 'http://localhost:8080/PostWhiteList';
        const data = {
          date: selectedInfo.date,
          ip: selectedInfo.ip,
          server: selectedInfo.server,
          port: selectedInfo.port,
          applicationID: selectedInfo.applicationID,
          createdBy: selectedInfo.createdBy,
          modifyBy: selectedInfo.modifyBy
        };
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        alert("IP has been added");
      }
    };
  
    const removeFromWhiteList = async () => {
      if (selectedInfo && selectedInfo.ip) {
        const url = `http://localhost:8080/deletefromWhiteList/${selectedInfo.ip}`;
        const response = await fetch(url, { method: 'DELETE' });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);         
        else alert("IP has been removed from the white list");
      }
    };
   async function applyFilters() {
      const ipFilter = document.getElementById('SortbyIP').value.toUpperCase();
      const serverIDFilter = document.getElementById('SortbyServerID').value.toUpperCase();
      const dateFilter = document.getElementById('SortbyDate').value; 
      const items = document.querySelectorAll('.IPListItem');
      const ipData = await getIP();
    
      let filteredData = ipData.filter(i => {
        const matchesServerID = !serverIDFilter || i.server.toUpperCase() === serverIDFilter;
        const matchesDate = !dateFilter || i.date.substring(0,10) === dateFilter; 
        return matchesServerID && matchesDate;
      });
    
      const idsSet = new Set(filteredData.map(ip => ip.ip.toUpperCase()));
    
      items.forEach(item => {
        const h4 = item.querySelector("h4");
        if (h4) {
          const text = h4.innerHTML.toUpperCase().trim();
          const matchesIPFilter = !ipFilter || text.indexOf(ipFilter) > -1;
          const isDisplayed = idsSet.has(text) && matchesIPFilter;
    
          item.style.display = isDisplayed ? "" : "none";
        }
      });
   }                 
   const changeIPList = () =>{
      const selector = document.getElementById('selectorIPList').value;      
      setSelection(selector);
      
   }
   useEffect(() => {         
   placeIPs();
   placeWhiteList();
   applyFilters();
   changeIPList()
   
   })

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
                  <p>Sort by IP:</p>
                  <input type="text" id='SortbyIP' placeholder='Sort by IP' />
               </div>
               <div className='findSort'>
                  <p>Sort by server ID:</p>
                  <input type="text" id='SortbyServerID' placeholder='Sort by server'/>
               </div>
               <div className='findSort'>
                  <p>Sort by date ID:</p>
                  <input type="text" id='SortbyDate' placeholder='Sort by date'/>
               </div>       
            </div>
          </div>

          <div className='DataInformation'>
            <div className='DataContainerr'>
               <div className='IPSelecteted'>
                  <h2>IP selected: </h2>
                  <div className='IPSelectedBox'>
                     <p id='IP1'>- - -</p>
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
                           <p id='IP2'>- - -</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Server ID:</p>
                           <p id='serverID'>- - -</p>
                        </div>
                        <div className='IP_Data'>
                           <p>PORT:</p>
                           <p id='PORT'>- - -</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Date Modified:</p>
                           <p id='dateID'>- - -</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Modify By:</p>
                           <p id='Modify_By'>- - -</p>
                        </div>
                        <div className='IP_Data'>
                           <p>Created By:</p>
                           <p id='Created_By'>- - -</p>
                        </div>
                     </div>
                  </div>
                  <div className='IP-Options'>                        
                        <div className='OptionIP' onClick={addToWhiteList} id='OptionIP'>
                           <h3>Add to White List</h3>
                        </div>                                          
                        <div className='OptionIP' onClick={removeFromWhiteList} id='RemoveWhiteList'>
                           <h3>Remove from White List</h3>
                        </div>                     
                        <div onClick={goToModify} className='OptionIP'>
                           <h3>Go to Modify</h3>
                        </div>
                  
                     </div>
               </div>               
            </div>
          </div>
       </div>
       <div  className="right-container">
          <div className='IPList'>
            <div className='IPList_Title'>
               <select name="" id="selectorIPList" >
                  <option value="All IPs">All IPs</option>
                  <option value="WhiteListed IPs">WhiteListed IPs</option>
               </select>
            </div>
            <div className='IPMainList' id='IPMainList'>
               <div>

                  {selection === 'WhiteListed IPs' && (
                     whiteIps.map((IP, index) =>(
                        <div key={index} className='IPListItem' onClick={() => getInformationByClick(IP)}>
                        <h4>{IP}</h4>
                        </div>
                     ))
                  )}
                  {
                  selection === 'All IPs' &&
                     ips.map((IP, index) => (
                        <div key={index} className='IPListItem' onClick={() => getInformationByClick(IP)}>
                        <h4>{IP}</h4>
                        </div>
                     ))
                  }
               </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ManageData_Menu