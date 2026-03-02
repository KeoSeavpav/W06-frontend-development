
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useState, useEffect } from "react";

function App() {

  
  const [items, setItems] = useState(() => {
    const data = localStorage.getItem("todo_data");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo_data", JSON.stringify(items));
  }, [items]);


  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <h2>Delete Example</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.text}
          <button onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;