import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetUserQuery } from '../../app/services/userService'
import './topnav.css'
const TopNav = () => {
  const {data,isLoading,isSuccess}=useGetUserQuery()
  const[profileMenu,setProfileMenu]=useState(false)

    return (
      <div className='top__nav'>
        
        <div className="top__nav-wrapper">
          <h2>TaskManager</h2>
          
          <div className="top__nav-right">
            {/* <span className='notification'><i class="ri-notification-2-line"></i> <span className='badge'>1</span></span> */}
           
            <div class="dropdown">
  <span>{isSuccess?data.name:null}</span>
  <div class="dropdown-content">
    <span><Link to='/profile'>Profile</Link></span>
  </div>
</div>
            
            <div className="profile">
              <Link to='/setting'><img src={isSuccess?data.image.fileLocalPath:""} alt="" /></Link>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  


export default TopNav
