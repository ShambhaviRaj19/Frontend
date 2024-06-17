import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ profile, onProfileUpdate }) => {
  const [formState, setFormState] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(formState);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </label>
      <label>
        Subject:
        <input type="text" name="subject" value={formState.subject} onChange={handleChange} />
      </label>
      <label>
        Bio:
        <textarea name="bio" value={formState.bio} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={formState.image} onChange={handleChange} />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
