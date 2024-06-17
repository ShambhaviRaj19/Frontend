import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tutor = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/profile/edit');
  };

  return (
    <div>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/profile/edit">Edit Profile</Link></li>
      </ul>
      <Button onClick={handleGetStarted} variant="primary">
        Create a Profile
      </Button>
    </div>
  );
}

export default Tutor;
