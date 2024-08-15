import React, { useState } from 'react';
import './Login.css';
import logo from '../../Images/Forkanfortune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { listusers } from '../../Services/service';
import login from '../../Images/signupimage.jpg';
import withAuth from '../../Services/WithAuth';
import { styled } from '@mui/material';

const Login = () => {
  // React state hooks for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // useNavigate hook for navigation
  const nav = useNavigate();

  // Function to check if the user exists in the list of users
  const checkUser = async (email, password) => {
    const response = await listusers();
    return response.data.some(
      (user) => user.email === email && user.password === password
    );
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Check if the user is the admin
    if (email === "siva@gmail.com" && password === "123") {
      setError('');
      nav("/admin"); // Navigate to admin page
      return;
    }

    // Check other users
    const userExist = await checkUser(email, password);
    if (userExist) {
      setError('');
      localStorage.setItem('isAuthenticated', 'true');                            
      //localStorage.clear();
nav('/home1',{replace:true});
            
    } else {
      setError("User does not exist or incorrect password.");
    }
  };

  return (
    <div className="login-container">
    <div className='bgimage'>
      <img src={login} height={"100%"} width={"100%"}></img>
    </div>
      <div className="login-content">
        <div className="logo-container">
          <img src={logo} alt="Halt & Dine Logo" className="logo" />
        </div>
        <h2 style={{fontSize:"32px",color:"black",fontStyle:"unset"}}>Restaurant Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              {/*<FontAwesomeIcon icon={faEnvelope} />*/} Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              {/*<FontAwesomeIcon icon={faLock} />*/} Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className='log'>Login</button>
        </form>
        <div className="signup-option">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
