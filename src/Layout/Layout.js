import React from 'react'


import Sidebar from '../Components/Sidebar/Sidebar'
import TopNav from '../Components/TopNav/TopNav'


const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Sidebar/>
      <div className="main__layout">
        <TopNav/>
        
        <div className="content">
        {children}
        
        </div>
      </div>
    </div>
  )
}

export default Layout
