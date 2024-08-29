import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home({ setFormData }) {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [completionYear, setCompletionYear] = useState('');
  const [skills, setSkills] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name,
      degree,
      completionYear,
      skills,
      phone,
      about,
    });
    navigate('/display'); // Redirect to the display page
  };

  return (
    <>
    <p>Input Your details you wish to put on Resume</p>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Degree:
        <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
      </label>
      <br />
      <label>
        Completion Year:
        <input type="text" value={completionYear} onChange={(e) => setCompletionYear(e.target.value)} />
      </label>
      <br />
      <label>
        Skills:
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
      </label>
      <br />
      <label>
        Phone No:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        About Yourself:
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Home;
