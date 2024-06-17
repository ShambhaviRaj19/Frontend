import React from 'react';
import './Enroll.css'; 
import { useNavigate } from 'react-router-dom';
 import Search from '../Search/Search';// Import CSS file

const Enroll = () => {
  const history = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the desired route when the button is clicked
    history('/login');
  };
  return (
    <div className="enroll-container">
      <h1>Welcome to LearnyHive</h1>
      <h3> We're here to help VTU engineering students ace their  <br/> 
        semester exams with ease. Access engaging videos<br/>
         and top-notch study materials tailored just for you. <br/>
         Say goodbye to exam stress and hello to effortless success!"</h3>
      <button className="btn btn-primary" onClick={handleGetStarted}>Enroll Now</button>
      <Search/>
    </div>
  )
}

export default Enroll;
