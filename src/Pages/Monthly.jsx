import React from 'react';
import TaskCard from '../Components/TaskCard/TaskCard';
import { useSearchTodoByMonthQuery } from '../app/services/todoService';

const Monthly = () => {
  const date = new Date();
  let month = date.getMonth() + 1;
  
  const{data,isSuccess}=useSearchTodoByMonthQuery(month)
  console.log(month)
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

export default Monthly
