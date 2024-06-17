import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './DashboardHeader.css';
import LearnyHiveLogo from '../assest/LearnyHive-1-4.png'; // Import your logo image

function DashboardHeader() {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State variable for dropdown visibility
  const [menuVisible, setMenuVisible] = useState(false); // State variable for menu visibility

  // Function to toggle dropdown visibility
  const handleListClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to toggle menu visibility
  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  const handleRefreshPage = () => {
    window.location.assign("/"); // Refresh the current page
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Your logo */}
          <div className="navbar-brand">
            <div className="logo d-flex align-items-center">
              <img src={LearnyHiveLogo} alt="Icon" className="logo-icon" onClick={handleRefreshPage} />
            </div>
          </div>
          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
            aria-controls="navbarNav"
            aria-expanded={menuVisible}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/dashboard/home" className="nav-link" onClick={handleMenuToggle}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard/courses" className="nav-link" onClick={handleMenuToggle}>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard/profile" className="nav-link" onClick={handleMenuToggle}>Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard/settings" className="nav-link" onClick={handleMenuToggle}>Settings</NavLink>
              </li>
              {/* Explore dropdown button */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link btn btn-link dropdown-toggle"
                  onClick={handleListClick}
                  aria-expanded={dropdownVisible}
                >
                  Explore
                </button>
                {/* Conditionally render dropdown menu */}
                {dropdownVisible && (
                  <ul className="dropdown-menu show">
                    <li><NavLink to="/dashboard/explore/option1" className="dropdown-item" onClick={handleListClick}>Option 1</NavLink></li>
                    <li><NavLink to="/dashboard/explore/option2" className="dropdown-item" onClick={handleListClick}>Option 2</NavLink></li>
                    <li><NavLink to="/dashboard/explore/option3" className="dropdown-item" onClick={handleListClick}>Option 3</NavLink></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardHeader;
