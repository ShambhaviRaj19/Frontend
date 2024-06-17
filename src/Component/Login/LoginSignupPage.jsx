import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignupPage.css';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = ({ onLogin }) => {
  const [formType, setFormType] = useState('sign-in');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const switchFormType = () => {
    setFormType(formType === 'sign-in' ? 'sign-up' : 'sign-in');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = formType === 'sign-in' ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';

    try {
      const response = await axios.post(url, formData);
      if (response && response.data) {
        alert(response.data.message);
        if (formType === 'sign-in') {
          onLogin(); // Call the onLogin function upon successful login
          navigate('/dashboard/home'); // Redirect to dashboard on successful login
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className={`cont ${formType === 'sign-up' ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btns" onClick={switchFormType}>
            <span className={`m--up ${formType === 'sign-up' ? 'u--active' : ''}`}>
              Sign Up
            </span>
            <span className={`m--in ${formType === 'sign-in' ? 'u--active' : ''}`}>
              Sign In
            </span>
          </div>
        </div>
        <div className={`form sign-up ${formType === 'sign-up' ? 'u--active' : ''}`}>
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </label>
          <button type="button" className="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
