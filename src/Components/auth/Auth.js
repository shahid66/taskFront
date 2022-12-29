import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useUserLoginMutation } from '../../app/services/userService'
import { setToken } from '../../app/slices/authSlice'
import './auth.css'


const Auth = () => {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const[userLogin,{data:dataLogin,isLoading,isSuccess,error:updateError}]=useUserLoginMutation()
	if(updateError){
		toast.error(`${updateError.data.message}`,{
			position: "bottom-center"})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		let email=e.target.email.value
		let password=e.target.password.value
		
		let formData={
			email,
			password,	
		}
		userLogin(formData)
		
	}
	if(isSuccess){
		dispatch(setToken(dataLogin))
		toast.success(`Login Success`,{
			position: "bottom-center"})
		navigate('/dashboard')
	}
  return (
    <div className="wrap">
      <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
<div className="login">
				<form onSubmit={onSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="password" placeholder="Password" required=""/>
					<button type="submit">Login</button>
				</form>
			</div>
			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="name"  placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="password" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			
	</div>
    </div>
  )
}

export default Auth