import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const TaskForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");


  const handleSubmit = () => {
    // Task: Call onAdd with an object { id: Date.now(), text: inputValue }
    const newobj = {id:Date.now(),text:inputValue};
    onAdd(newobj);
    // Task: Clear the input after adding 
    setInputValue("");
   // Task: Save the list to the localstorage
   const exittask = JSON.parse(localStorage.getItem("Task") || "[]");
   const updatetask=[...exittask,newobj];
   localStorage.setItem("Task",JSON.stringify(updatetask))

  };
  return(
   <div>
        <input 
        type="text" 
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         placeholder='ADD task..'/>
         <button onClick={handleSubmit}>submit</button>
      </div>
  )
};

function App() {
   const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
     <TaskForm onAdd={handleAdd} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  )
}

export default App
