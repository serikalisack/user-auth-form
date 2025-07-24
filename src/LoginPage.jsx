import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login logic (replace with API call)
    if (email === 'admin@example.com' && password === '123456') {
      // Save dummy token (simulate auth)
      localStorage.setItem('token', 'dummy-auth-token');
      navigate('/dashboard'); // redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p>Don’t have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
