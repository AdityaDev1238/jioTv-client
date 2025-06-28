import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  



  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8199/saveUser', { name, password },{ withCredentials: true });
      toast.success('User registered successfully!');
      setName('');
      setPassword('');
    } catch (error) {
      toast.error('Error while registering user');
      console.error('Error in sendData:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>New User Page</h1>
      <form onSubmit={sendData}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input type="submit"  value="Submit" />
      </form>
    </div>
  );
}

export default NewUser;