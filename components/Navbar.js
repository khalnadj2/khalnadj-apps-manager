"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Khalnadj Apps" className="logo-icon" />
          <span>Khalnadj Apps</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Dashboard</Link>
          <Link href="/download" className="nav-link">Public Page</Link>
          <Link href="/add" className="btn btn-primary">Add App</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          height: var(--header-height);
          border-bottom: 1px solid var(--border-color);
          background-color: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo-icon {
          width: 45px;
          height: 45px;
          border-radius: 8px;
        }
        .logo span {
          color: #10b981;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
      `}</style>
    </nav>
  );
}
