import React from 'react';
import './Profile.css';

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img src={profile.image || 'default-avatar.png'} alt="Profile" />
      <h2>{profile.name}</h2>
      <p><strong>Subject:</strong> {profile.subject}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
};

export default Profile;
