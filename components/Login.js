"use client";

import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      setError('');
    } else {
      setError('Incorrect email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <h2>Access Restricted</h2>
        <p>Please enter your credentials to continue.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="form-input"
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn btn-primary full-width">
            Login
          </button>
        </form>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          text-align: center;
          padding: 2rem;
        }
        h2 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          font-size: 1rem;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .error-message {
          color: var(--error-color);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .full-width {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
