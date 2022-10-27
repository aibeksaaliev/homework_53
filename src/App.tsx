import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {id: "000001task", text: "Create AddTaskForum component."},
    {id: "000002task", text: "Create Task component."}
  ]);

  const [currentTask, setCurrentTask] = useState({
    id: "", text: ""
  });

  const showTasks = tasks.map((task) => {
    return (
      <Task key={task.id} text={task.text} removeTask={() => deleteTask(task.id)}/>
    )
  });

  const setCurrentTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTaskCopy = {...currentTask};
    currentTaskCopy.text = event.target.value;
    setCurrentTask(currentTaskCopy);
  }

  const saveCurrentTask = () => {
    const currentTaskCopy = {...currentTask};
    const allTasks = [...tasks];
    currentTaskCopy.id = new Date().toString();
    allTasks.push(currentTaskCopy);
    setTasks(allTasks);
  }

  const deleteTask = (id:string) => {
    const allTasks = [...tasks];
    allTasks.map(task => {
      if (id === task.id) {
        const index: number = allTasks.indexOf(task);
        allTasks.splice(index, 1);
      }
    });
    return setTasks(allTasks);
  }

  return (
    <div className="App">
      <AddTaskForm addInputValue={setCurrentTaskText} addTask={(e) => {
        e.preventDefault();
        saveCurrentTask();
      }}/>
      {showTasks}
    </div>
  );
}

export default App;
