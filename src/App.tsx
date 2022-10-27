import React from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  return (
    <div className="App">
      <AddTaskForm></AddTaskForm>
      <Task key="asdf" text="asdf"/>
    </div>
  );
}

export default App;
