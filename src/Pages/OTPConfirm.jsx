import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useGetUserOTPMutation } from '../app/services/userService'

const OTPConfirm = () => {
  let navigate=useNavigate()
  const [getUserOTP,{data,isLoading,isSuccess,error,isError}]=useGetUserOTPMutation()
  if(isSuccess){
    navigate('/createPassword')
  }
  console.log(data)
  const[OTP,setOTP]=useState("")
  let Email=localStorage.getItem("recoverEmail")
  console.log(Email)
  let submitOTP=()=>{
      if(OTP.length===6){
        getUserOTP({Email,OTP})
        localStorage.setItem('otp',OTP)
          
      }else{
          toast.error("Must 6 digit OTP Enter")
      }
  }
  return (
    <div className="wrap">
      <div className="main">
     <div className="form_div">
     <form >
     <ReactCodeInput inputStyle={{   fontFamily: 'monospace',
  
    borderRadius: '3px',
    fontSize: '16px',
    
    
    backgroundColor: 'black',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'}} onChange={(value)=>setOTP(value)} type='number' fields={6} />
      <input onClick={submitOTP} className='login__btn' type="button" value="Next" />
					
				</form>
     </div>
      </div>
    </div>  
  )
}

export default OTPConfirm