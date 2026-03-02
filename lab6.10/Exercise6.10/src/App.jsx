
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("my_storage_key", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <h2>Automatic Persistence Example</h2>
    </div>
  );
}




export default App
