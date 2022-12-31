import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { useCreateTodoMutation } from "../app/services/todoService";

const CreateTask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [createTodo, {data,isLoading,isSuccess}] = useCreateTodoMutation();

  const createNewUser = async (e) => {
    e.preventDefault();
    let task = e.target.task.value;
    let description = e.target.description.value;
    let taskpriority = e.target.taskpriority.value;
    let formData = {
      task,
      description,
      taskpriority,
      date:startDate
        
    };

    await createTodo(formData);
   
  };
  if(isSuccess){
    navigate("/dashboard");
  }

  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="create__task-wrapper">
          <div className="create__task-form">
            <form onSubmit={createNewUser}>
              <div className="field">
                <h4>Create New Task</h4>

                <input type="text" name="task" placeholder="Task Name" />
                <select name="taskpriority">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="Heigh">Heigh</option>
                </select>

                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  name="description"
                  placeholder="Task Description"
                ></textarea>
                <ReactDatePicker
                  dateFormat="d-MM-yyy"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <p className="p_input">
                  {isLoading?<button type="submit" disabled><i class="fas fa-spinner fa-spin"></i> Create</button>:<button type="submit" > Create</button>}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
