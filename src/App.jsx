import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <div style={{
      height: '100vh',
    }}className="app-container">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
