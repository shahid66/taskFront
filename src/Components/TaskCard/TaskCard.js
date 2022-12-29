import React from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../app/services/todoService'





const TaskCard = ({item}) => {
  const[deleteTodo, {isSuccess}]=useDeleteTodoMutation()
  const[updateTodo, {isSuccess:isUpdateSuccess}]=useUpdateTodoMutation()
  
  const deleteAleart=(id)=>{
    Swal.fire({
      title:`Are you sure?`,
      text:"You won't be able to revert this!",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText:"Yes Delete it !"
    }).then((result)=>{
      if(result.isConfirmed){
       return deleteTodo(id).then(result=>{
        toast.success(' Task Delete Success!',{
          position: "bottom-center"})
          return result
        })
      }
    })
  }


  return (
    <div className="todo__card">
                      
                      <div className="todo__card-bottom">
                        <h4>{item.task}</h4>
                        <p className='todo__description'>{item.description}</p>
                        <div className='todo__card-other'>
                          <div className='todo__card-icons'>
                          <p>
                          <i className="ri-calendar-2-line"></i>
                            {item.date}
                           
                          </p>
                          <p onClick={()=>updateTodo({id:item._id,status:!item.taskstatus})}><i  className="ri-edit-2-line task__edit"></i></p>
                          <p onClick={()=>deleteAleart(item._id)}>
                           
                          <i   className="ri-delete-bin-5-line task__delete"></i>
                          
                          </p>
                          <p><i ></i></p>
                          <p><i className={`ri-flag-2-fill ${item.taskpriority==="Medium"?`yellow`:item.taskpriority==="Low"?`green`:"red"}` } ></i></p>
                          </div>
                          <span className='task__status'>{item.taskstatus ?"Complete":'Inprogress'}</span>
                        </div>
                      </div>
          </div>
  )
}

export default TaskCard