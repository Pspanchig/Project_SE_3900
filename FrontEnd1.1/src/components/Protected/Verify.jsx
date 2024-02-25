import React from 'react'
import './css/Verify.css';
import { useNavigate } from 'react-router-dom';

const Verify = () => {

  const  navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2500);
  return (
    <div className="VerifyContainer">
        <div className='VerifyBox'>
            <h1>Verification <h1 id='VFailed'>failed</h1></h1>
        </div>
    </div>
  )
}

export default Verify