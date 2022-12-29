import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RedirectRoute = () => {
    
    const auth=JSON.parse(localStorage.getItem('token'))

//     if(auth){
//         return <Navigate to='/dashboard'/>
//     }else{
// return <Outlet/>
//     }
    if(auth!==null && auth?.length>2){
        return <Navigate to='/dashboard'/>
    }else{
        return <Outlet/>
    }
}
export default RedirectRoute