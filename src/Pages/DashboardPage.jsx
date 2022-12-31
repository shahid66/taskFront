import React from "react";
import TaskCard from "../Components/TaskCard/TaskCard";
import { useGetTodoQuery } from "../app/services/todoService";
import TaskSkeleton from "../Components/SkeletonLoading/TaskSkeleton";

const DashboardPage = () => {
 
  const { data = [], isLoading, isError } = useGetTodoQuery();
  const carObject = {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
  };
  console.log(data)
  if(isLoading){
    return <h2>loading...</h2>
  }else if(isError){
    return <h2>Error...</h2>
  }
  console.log(data)
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="todo__task-wrapper">

        {isLoading?<TaskSkeleton/>:


          data.map((item,i)=>(
            <TaskCard key={i} item={item}/>
          ))
         }
        </div>

        {/* <div className="recommend__cars-wrapper"></div> */}
      </div>
    </div>
  );
};

export default DashboardPage;
