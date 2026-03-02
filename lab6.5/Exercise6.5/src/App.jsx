import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
     const Data = ["RJS","DATABASE"]
     localStorage.setItem('todo_data',JSON.stringify(Data))
      const data = localStorage.getItem('todo_data');
      return data ? JSON.parse(data) : [];
  });

  return (
    <>
       {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))
      )}
    </>

  );
}
export default App
