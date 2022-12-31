import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserEmailMutation } from '../../app/services/userService';
import './auth.css';

const EmailRecovery = () => {
  const navigator=useNavigate()
  const[getUserEmail,{data,isSuccess,error,isLoading}]= useGetUserEmailMutation()
  
  console.log(data)
 if(isSuccess){
  
  localStorage.setItem('recoverEmail',data.email)
  window.location.href="/otpCheck"

 }
  const onSubmit=(e)=>{
    e.preventDefault();
		
		let email=e.target.email.value
    getUserEmail(email)
    
		
  }
  
  return (
    <div className="wrap">
      <div className="main">
     <div className="form_div">
     <form onSubmit={onSubmit}>
					
					<input type="email" name="email" placeholder="Email" required/>
					
					
					{isLoading?<button type="submit" disabled><i class="fas fa-spinner fa-spin"></i> Send</button>:<button type="submit">Send</button>}
					
				</form>
     </div>
      </div>
    </div>  
  )
}

export default EmailRecovery