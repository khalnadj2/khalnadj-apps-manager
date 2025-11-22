"use client";

import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          <img src="/khalnadj-apps-manager/images/logo.png" alt="Logo" width="32" height="32" />
          <span>Khalnadj Apps</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Public Page</Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
              <Link href="/settings" className="nav-link">Settings</Link>
              <button onClick={logout} className="btn-logout">
                Logout
              </button>
            </>
          ) : (
            null
          )}
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 0;
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .btn-logout {
          background: none;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .btn-logout:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .navbar-content {
            flex-direction: column;
            gap: 1rem;
          }
          .nav-links {
            width: 100%;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </nav>
  );
}
