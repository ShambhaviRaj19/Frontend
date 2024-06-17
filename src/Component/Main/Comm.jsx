import React, { useState } from 'react';
import './Comm.css'

const Comm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform other submission logic here
    setSubmitted(true);
  };

  return (
    <div className="Comm-wrap">
      <div className="Comm-container">
        <div className="Comm-content">
          <h2>Join Our Community</h2>
          <p>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button type="submit">Subscribe</button>
            {submitted && <p>Thank you for subscribing!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comm;