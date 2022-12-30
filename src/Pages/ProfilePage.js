import React from 'react'
import FormHandle from '../Components/FormHandle/FormHandle'
import { useGetUserQuery } from '../app/services/userService'

const ProfilePage = () => {
  const {data,isLoading,isSuccess}=useGetUserQuery()
  

  return (
    <div className='dashboard'>
    <div className="dashboard__wrapper">
    <div className="profile_wrap">
      <div className="profile_head">
      <img src={data?.image.fileLocalPath} alt="" />
      <div className="profile_head_heading">
      <p>Name : {data?.name}</p>
      <p>Email: {data?.email}</p>
      </div>
      </div>
      <div className="profile_form">
      
     {isSuccess && <FormHandle name={data?.name} password="" image={data?.image.fileLocalPath}/>}
      </div>

    </div>
    <div className="todo__task-wrapper">

    
    

</div>
    </div>
  </div>
  )
}

export default ProfilePage