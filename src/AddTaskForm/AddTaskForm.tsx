import React from "react";
import './AddTaskForm.css';

interface AddTaskFormProps extends React.PropsWithChildren {
  addInputValue: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <form id="add_task_form">
      <input className="task_input" type="text" placeholder="Add a new task" onChange={props.addInputValue}/>
      <button className="add_btn" type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;