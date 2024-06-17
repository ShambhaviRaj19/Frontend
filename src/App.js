import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import './App.css';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Section from './Component/Main/Section';
import Explore from './Component/Explore/Explore';
import Option1 from './Component/Explore/Option1';
import LoginSignupPage from './Component/Login/LoginSignupPage';
import Tutor from './Component/Tutor/Tutor';
import Profile from './Component/Profiles/Profile';
import ProfileForm from './Component/Profiles/ProfileForm';
import Dashboard from './Component/Dashboard/Dashboard';
import Settings from './Component/Setting/setting';

function App() {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    subject: '',
    image: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProfileUpdate = (newProfile) => {
    setProfile(newProfile);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoggedIn && <Header />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/login" element={<LoginSignupPage onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile profile={profile} />} />
          <Route path="/profile/edit" element={<ProfileForm profile={profile} onProfileUpdate={handleProfileUpdate} />} />
          <Route path="/dashboard/*" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}>
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="explore/*" element={<Explore />}>
              <Route path="option1" element={<Option1 />} />
              {/* Add more options as needed */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {!isLoggedIn && <Section />}
      <Footer />
    </div>
  );
}

export default App;
