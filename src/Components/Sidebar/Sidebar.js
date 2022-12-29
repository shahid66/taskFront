import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useSearchTodoByMonthQuery, useSearchTodoByTodayQuery } from '../../app/services/todoService'
import navLinks from '../assets/dummy-data/navLinks'
import './sidebar.css'

const Sidebar = () => {
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const navigate=useNavigate()
  const{data,isSuccess}=useSearchTodoByMonthQuery(month)
  const{data:dayData}=useSearchTodoByTodayQuery(day)
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h2>TaskManager</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item,index)=>(
             <li className='nav__item' key={index}>
               <NavLink to={item.path} className={navClass=>navClass.isActive ? 'nav__active nav__link': 'nav__link'}><i className={item.icon}></i>{item.display} {data?.length>0&& <span className='notificationnumber'>{item.path==="/monthly" && data?.length }{item.path==="/today" && dayData?.length}</span>}</NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <span onClick={()=>{
            localStorage.removeItem('token')
            window.location.href='/'
            // navigate('/')
            }}><i  class="ri-logout-circle-line"></i>Log Out</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
