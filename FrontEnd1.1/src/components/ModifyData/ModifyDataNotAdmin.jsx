import React from 'react'

const ModifyDataNotAdmin = () => {
  return (
    
    <>
    <div className='ModifyDataPage' id='fakePage'>

        <div className='MoDTitle' >
            <h1>Modify Data</h1>
        </div>

        <section >
        <div className='RemovIPDiv'>
            <div>
            <h2>Remove IP</h2>
            <div>
                <select name="" id="">
                <option value="null">no IP selected</option>
                {/* {
                    removeIP.map((IP, index) => (
                    <option key={index} value={IP} onClick={() => removeFromList(IP)}>
                    {IP}
                    </option>
                ))
                } */}
                </select>
                <button>Remove <img src="" alt="" /></button>
            </div>
            </div>
        </div>

        <div className='AddIPDiv' >
            <div className='AddIPDiv-Container'>
            <h2>Add IP</h2>
            <div className='InputGroup'>
                <div className='SubInput'>
                <div className='InputGroup-Item'>
                    <label htmlFor="">Add IP</label>
                    <input type="text" placeholder='Add IP' id='ip-input'/>
                </div>
                <div className='InputGroup-Item'>
                    <label htmlFor="">Add Server ID</label>
                    <input type="text" placeholder='Server ID' id='server-input' />
                </div>
                </div>
            </div>
            <div className='AddIPDivButtonDiv'>
                <button>Add</button>
            </div>
            </div>
        </div>
        </section>

        <div className='MoDSubTitle'>
            <h3>Modify specific data</h3>
        </div>

        <section >
        <div className='AddIPDiv'>
        <div className='ModContainer'>
            <div className='SelectorOptions'>
            <select name="" id="">
            <option value="null">no IP selected</option>
                {/* {
                    removeIP.map((IP, index) => (
                    <option key={index} value={IP} onClick={() => removeFromList(IP)}>
                    {IP}
                    </option>
                ))
                } */}
            </select>
            <button id='change'>Change</button>
            </div>
            <div className='ModifyOptions'>
            <div className='ModifyOptions-Item'>
                <label htmlFor="">Change IP:</label>
                <input type="text" placeholder='ChangeIP'/>
            </div>
            <div className='ModifyOptions-Item'>
                <label htmlFor="">Change server:</label>
                <input type="text" placeholder='ChangeIP'/>
            </div>
            </div>
        </div>
        </div>
        <div className='RemovIPDiv'>
        <div>
            <h2 id='Exportb'>Go to export page</h2>  
            <div className='GoToExportInfo'>
            <p>Click in the button below to export your IPs as an excel file</p>
            <button id='GO' >Export file</button>
            </div>
        </div>
        </div>
        </section>
    </div>
    <div className='SpanUser'>
    <h1>You do not have administrator permissions to change something in here</h1>
    <p>Try to communicate with any administrator to make any change</p>
    </div>
    </>
  )
}

export default ModifyDataNotAdmin