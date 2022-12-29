import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const auth=JSON.parse(localStorage.getItem('token'))
//     const auth=false
//     console.log(auth)
//     if(auth){
//         return <Outlet/>
//     }else{
// return <Navigate to='/'/>
//     }
    if(auth!==null && auth?.length>2){
        return <Outlet/>
    }else{
return <Navigate to='/'/>
    }
  
}

export default PrivateRoute