import React from 'react';
import TaskCard from '../Components/TaskCard/TaskCard';
import { useSearchTodoByTodayQuery } from '../app/services/todoService';

const Today = () => {
  const date = new Date();
  let day = date.getDate();
console.log(day)
  const{data,isSuccess}=useSearchTodoByTodayQuery(day)
   console.log(data)
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

export default Today
