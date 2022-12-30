import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCreateUserMutation, useUserLoginMutation } from '../../app/services/userService'
import { setToken } from '../../app/slices/authSlice'
import './auth.css'


const Auth = () => {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const[userLogin,{data:dataLogin,isLoading,isSuccess,error:updateError}]=useUserLoginMutation()
	const[createUser,{data:userCreateData,isSuccess:createSuccess,error:createError}]=useCreateUserMutation()
	if(updateError){
		toast.error(`${updateError.data.message}`,{
			position: "bottom-center"})
	}
	console.log(userCreateData)
	if(createError){
		toast.error(`${createError.data.message}`,{
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
	const onSubmitCreate = async (e) => {
		e.preventDefault();
		let name=e.target.name.value
		let email=e.target.email.value
		let password=e.target.password.value
		
	if(name.trim()<1 || email.trim() || password.trim()){
		toast.error("fill all field",{
			position: "bottom-center"})
	}else{
		let formData={
			name,
			email,
			password,	
		}
		
		createUser(formData)
	}
		
	}
	if(isSuccess){
		dispatch(setToken(dataLogin))
		toast.success(`Login Success`,{
			position: "bottom-center"})
		navigate('/dashboard')
	}
	if(createSuccess){

		dispatch(setToken(userCreateData))
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
					<input type="email" name="email" placeholder="Email" required/>
					<input type="password" name="password" placeholder="Password" required/>
					<button type="submit">Login</button>
				</form>
			</div>
			<div className="signup">
				<form onSubmit={onSubmitCreate}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="name"  placeholder="User name" required/>
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