import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Display from './display';
import Welcome from './welcome'; // Import the Welcome component

function App() {
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    completionYear: '',
    skills: '',
    phone: '',
    about: '',
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home setFormData={setFormData} />} />
        <Route path="/display" element={<Display formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
