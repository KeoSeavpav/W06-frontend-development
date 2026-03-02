import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [list, setList] = useState(() => {
  const data = localStorage.getItem("todo_data");
  return data ? JSON.parse(data) :[] ;
}); // This should come from Local Storage
  const [searchTerm, setSearchTerm] = useState("");
const filteredlist = list.filter((item) =>
  item.toLowerCase().includes(searchTerm.toLowerCase())
)
  // Task: Create a filteredList variable using list.filter()
// before mapping it to the UI.

  return (
    <>
     <h2>search list</h2>
      <input 
      type="text"
      placeholder='search'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filteredlist.map((item,index) =>(
          <li key={index}>{item}</li>

        ))}
        </ul>  
    </>
  )
}

export default App
