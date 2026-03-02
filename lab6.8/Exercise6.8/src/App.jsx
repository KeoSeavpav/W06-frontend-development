import { useState, useEffect } from 'react'
import './App.css'

const TaskItem = ({ data, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={data.isCompleted}
        onChange={() => onToggle(data.id)}
      />
      <span className={data.isCompleted ? "line-through text-gray-400" : ""}>
        {data.text}
      </span>
    </div>
  );
}

function App() {

 
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("todo_data");
    return data ? JSON.parse(data) : [];
  });

  const [inputValue, setInputValue] = useState("");

 
  useEffect(() => {
    localStorage.setItem("todo_data", JSON.stringify(tasks));
  }, [tasks]);

 
  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  
  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Todo App</h2>


      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border px-2 py-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            data={task}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  )
}

export default App