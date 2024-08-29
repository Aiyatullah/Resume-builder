import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css'; // Import the CSS file for styling

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home'); // Navigate to the Home component
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Resume Builder!</h1>
      <p>Click the button below to start building your resume.</p>
      <button onClick={handleStart}>Start Building</button>
    </div>
  );
}

export default Welcome;
