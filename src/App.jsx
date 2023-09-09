import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import HomePage from './components/home-page';
import PersonalProjects from './components/personal-projects';
import CourseProjects from './components/course-projects';
import Certifications from './components/certifications';
import ContactInfo from './components/contact-info';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div style={{
      height: '100vh',
    }}className="app-container">
      <NavBar />
      { windowWidth > 768 ? 
      <Outlet /> :
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
        <HomePage />
        <PersonalProjects />
        <CourseProjects />
        <Certifications />
        <ContactInfo />
      </div> }
    </div>
  )
}

export default App
