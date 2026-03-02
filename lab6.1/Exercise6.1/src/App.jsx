import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App -> Dashboard -> Sidebar -> UserProfile -> Avatar
const Avatar = ({ config }) => {
  /* Task: Display config.username and config.status here */
  return <div className="p-2 border">
  <p>Avatar Leaf </p>
  <p>Username:{config.username}</p>
  <p>status:{config.status}</p>
  </div>;
};

const UserProfile = ({ config }) => <Avatar config={config} />;
const Sidebar = ({ config }) => <UserProfile config={config} />;
const Dashboard = ({ config }) => <Sidebar config={config} />;

function App() {
  const [userConfig] = useState({ username: "DevMaster", status: "Online" });
  return <Dashboard config={userConfig} />;
}
export default App