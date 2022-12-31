import React from 'react'
import { useUpdateUserPasswordMutation } from '../app/services/userService'

const PasswordChange = () => {
  const [updateUserPassword,{data,isError,isSuccess,isLoading,error}]=useUpdateUserPasswordMutation()
  let Email=localStorage.getItem("recoverEmail")
  let OTP=localStorage.getItem("otp")
  console.log(data)
  if(isSuccess){
    window.location.href="/"
  }
  const onSubmit=(e)=>{
    e.preventDefault();
		
		let password=e.target.password.value
    let formData={
      email:Email,
      otp:OTP,
      password:password
    }
  
    updateUserPassword(formData)

  }

  return (
    <div className="wrap">
      <div className="main">
     <div className="form_div">
     <form onSubmit={onSubmit}>
    
     <input type="password" name="password" placeholder="Enter New Password" required/>
					
					
					{isLoading?<button type="submit" disabled> <i class="fas fa-spinner fa-spin"></i> Change</button>:<button type="submit">Change</button>}
					
				</form>
     </div>
      </div>
    </div> 
  )
}

export default PasswordChange