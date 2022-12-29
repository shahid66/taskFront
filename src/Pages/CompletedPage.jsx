import React from 'react'
import TaskCard from '../Components/TaskCard/TaskCard'
import { useSearchTodoQuery } from '../app/services/todoService'

const CompletedPage = () => {
  const {data,isLoading,isSuccess}=useSearchTodoQuery(true)

  console.log(data)
  if(isLoading){
    return <h2>Loading....</h2>
  }
  if(isSuccess){
    return (
      <div className='dashboard'>
      <div className="dashboard__wrapper">
      <div className="todo__task-wrapper">
  {data?.map((item,i)=>(
    <TaskCard key={i} item={item}/>
  ))}
      
  
  </div>
      </div>
    </div>
    
    )
  }
  
}

export default CompletedPage
