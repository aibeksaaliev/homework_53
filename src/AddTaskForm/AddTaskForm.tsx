import React from "react";
import './AddTaskForm.css';

const AddTaskForm = () => {
  return (
    <form id="add_task_form">
      <input className="task_input" type="text" placeholder="Add a new task"/>
      <button className="add_btn" type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;