import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {key: "000001task", text: "Create AddTaskForum component."},
    {key: "000002task", text: "Create Task component."}
  ]);


  return (
    <div className="App">
      <AddTaskForm></AddTaskForm>
      <Task key="asdf" text="asdf"/>
    </div>
  );
}

export default App;
