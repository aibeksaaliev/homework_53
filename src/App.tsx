import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {id: "000001task", text: "Create AddTaskForum component.", done: false, color: ""},
    {id: "000002task", text: "Create Task component.", done: false, color: ""}
  ]);

  const [currentTask, setCurrentTask] = useState({
    id: "", text: "", done: false, color: ""
  });

  const showTasks = tasks.map((task) => {
    return (
      <Task key={task.id} text={task.text} removeTask={() => deleteTask(task.id)} done={task.done} changeColor={() => {setTaskState(task.id)}} color={task.color}/>
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
      return allTasks;
    });
    return setTasks(allTasks);
  }

  const setTaskState = (id:string) => {
    const allTasks = [...tasks];
    allTasks.map(task => {
      if (id === task.id) {
        task.done = !task.done;
        if (task.done) {
          task.color = "red";
        } else {
          task.color = "";
        }
      }
      return allTasks;
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
