import React from 'react'
import FormNewAccount from './FormNewAccount'
import videoBackgrond from '../../assets/video.mp4'
const CreateAccount = () => {
  return (
    <div className='LoginBox'>

      <div className='VideoBackground'>
        <video autoPlay loop muted playsInline  src={videoBackgrond}></video>
      </div>
      <FormNewAccount/>
    </div>
  )
}

export default CreateAccount