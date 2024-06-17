import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to="/dashboard/home" className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/courses" className="nav-link" activeClassName="active">Courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/profile" className="nav-link" activeClassName="active">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/settings" className="nav-link" activeClassName="active">Settings</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/explore" className="nav-link" activeClassName="active">Explore</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
