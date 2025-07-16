import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className=" mb-3">
            <label htmlFor="email">Email Id</label>
            <input
                className="form-control"
                type="text"
                // placeholder="Email"
                aria-label="default input example"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
          </div>
          <div className=" mb-3">
            <label htmlFor="password">Password</label>
            <input
             className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default Login;