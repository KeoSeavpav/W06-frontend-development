import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const AlertBox = ({ type, message }) => {
  // Task: Create a variable that switches Tailwind classes
  // if type is "error" (red), "success" (green), or "warning" (yellow).
  let color = " ";
  if(type=="error"){
    color = "bg-red-700 text-black"
  }else if(type=="success"){
    color="bg-green-700 tex-black"
  }else if( type =="warning"){
    color="bg-yello-700 text-black"
  }
  return <div className={`p-4 rounded-lg ${color}`}>
    {message}
    </div>;
};


function App() {

  return (
    <>
      <AlertBox type="error" message="successful" />
    </>
  )
}

export default App
