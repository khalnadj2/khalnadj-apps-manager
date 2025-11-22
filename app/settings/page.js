"use client";

import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import Login from '@/components/Login';

export default function SettingsPage() {
  const { isAuthenticated, login, loading: authLoading, updateCredentials } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  if (authLoading) return null;

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCredentials(email, password);
    setMessage('Credentials updated successfully! Please remember them.');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="page-container">
      <h1>Settings</h1>
      <div className="card settings-card">
        <h2>Change Login Information</h2>
        <p className="warning-text">
          Note: New credentials are saved in this browser only.
          Clearing cache will reset them to default.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter new email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group password-group">
            <label>New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="form-input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️‍🗨️" : "👁️"}
            </button>
          </div>
          {message && <p className="success-message">{message}</p>}
          <button type="submit" className="btn btn-primary full-width">
            Update Credentials
          </button>
        </form>
      </div>

      <style jsx>{`
        .settings-card {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
        }
        h2 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .warning-text {
          background-color: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          padding: 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .password-group {
          position: relative;
        }
        .toggle-password {
          position: absolute;
          right: 10px;
          bottom: 8px; /* Adjusted for label */
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0;
          color: var(--text-secondary);
        }
        .toggle-password:hover {
          color: var(--text-primary);
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
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
        .password-group .form-input {
          padding-right: 40px; /* Space for the eye icon */
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .success-message {
          color: #10b981;
          margin-bottom: 1rem;
          text-align: center;
        }
        .full-width {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
