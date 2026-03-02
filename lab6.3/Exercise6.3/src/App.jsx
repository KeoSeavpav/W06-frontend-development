import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]); // Toggle between [] and ["Task"] to test
  let message = " "
   if (items.length==0){
      message=<p className='text-gray-50'>No messages found </p> 
      }else{
      message = items.map((items,index)  =>(
                <p key={index}>Item: {items}</p>
      ));
      }
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Inbox</h1>
      {/* Task: If items.length is 0, show "No messages found". Else, map items. */}
      {message}
    </div>
  );

} 


export default App
