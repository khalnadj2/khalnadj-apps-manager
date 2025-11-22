"use client";

import { useApps } from '@/lib/useApps';
import { useState } from 'react';

function DownloadCard({ app }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="download-card">
      <div className="icon-wrapper">
        {app.imageUrl ? (
          <img src={app.imageUrl} alt={app.name} className="app-icon-img" />
        ) : (
          <span>{app.name.charAt(0)}</span>
        )}
      </div>
      <div className="content">
        <div className="header">
          <h3>{app.name}</h3>
          <div className="meta-info">
            <span className="version">v{app.version}</span>
          </div>
        </div>
        <p className="package">{app.packageName}</p>

        <p
          className={`description ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
          title="Click to expand/collapse"
        >
          {app.description || 'No description available.'}
          <span className="expand-indicator">
            {isExpanded ? ' ▲' : ' ▼'}
          </span>
        </p>

        <div className="actions">
          <a href={app.downloadUrl} target="_blank" rel="noopener noreferrer" className="google-play-badge">
            <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .download-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: all 0.2s ease;
        }
        .download-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .app-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }
        .content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .package {
          font-family: monospace;
          font-size: 0.8rem;
          color: var(--text-tertiary);
          margin: 0;
        }
        .version {
          background-color: var(--bg-tertiary);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .description {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          cursor: pointer;
          transition: color 0.2s;
        }
        .description:hover {
          color: var(--text-primary);
        }
        .description.expanded {
          display: block;
          -webkit-line-clamp: unset;
        }
        .expand-indicator {
          font-size: 0.7rem;
          color: var(--primary-color);
          margin-left: 0.25rem;
        }
        .actions {
          margin-top: 0.5rem;
          display: flex;
          justify-content: flex-end;
        }
        .google-play-badge {
          display: inline-block;
          transition: opacity 0.2s;
        }
        .google-play-badge:hover {
          opacity: 0.8;
        }
        .google-play-badge img {
          height: 60px;
          width: auto;
          display: block;
        }

        @media (max-width: 768px) {
          .download-card {
            padding: 1rem;
            gap: 1rem;
            flex-direction: column;
            align-items: center;
          }
          .icon-wrapper {
            width: 56px;
            height: 56px;
            font-size: 1.75rem;
          }
          .content {
            width: 100%;
            text-align: center;
          }
          .header {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            align-items: center;
          }
          .content h3 {
            font-size: 1.1rem;
          }
          .package {
            word-break: break-all;
          }
          .description {
            text-align: left;
          }
          .actions {
            justify-content: center;
            width: 100%;
          }
          .google-play-badge img {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default function DownloadPage() {
  const { apps, loading } = useApps();

  if (loading) {
    return <div className="loading">Loading apps...</div>;
  }

  return (
    <div className="download-page">
      <div className="hero">
        <h1>Download Our Apps</h1>
        <p>Get the latest versions of our Android applications directly from here.</p>
      </div>

      <div className="about-section">
        <h2>About Khalnadj Apps</h2>
        <p>
          Khalnadj Apps is dedicated to creating high-quality Islamic and utility applications for Android devices.
          Our portfolio includes a comprehensive collection of Quran apps with various narrations (Hafs, Warsh, Qaloun, Shubah, and more),
          prayer time applications, Qibla direction finders, and GPS utilities.
        </p>
        <p>
          All our applications are designed with user experience in mind, featuring clean interfaces,
          offline functionality, and regular updates. We serve millions of users worldwide who rely on our apps
          for their daily Islamic practices and navigation needs.
        </p>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">19+</span>
            <span className="stat-label">Applications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Downloads</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.5+</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>

      <div className="app-list">
        {apps.length === 0 ? (
          <div className="empty-state">
            <p>No apps available for download at the moment.</p>
          </div>
        ) : (
          apps.map(app => (
            <DownloadCard key={app.id} app={app} />
          ))
        )}
      </div>

      <style jsx>{`
        .download-page { max-width: 800px; margin: 0 auto; }
        .hero { text-align: center; margin-bottom: 3rem; padding: 2rem 0; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; background: linear-gradient(to right, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { font-size: 1.2rem; color: var(--text-secondary); }
        .about-section { background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 3rem; }
        .about-section h2 { font-size: 2rem; margin-bottom: 1.5rem; text-align: center; color: var(--primary-color); }
        .about-section p { line-height: 1.7; margin-bottom: 1rem; color: var(--text-secondary); }
        .stats { display: flex; justify-content: space-around; margin-top: 2rem; flex-wrap: wrap; gap: 1rem; }
        .stat-item { text-align: center; flex: 1; min-width: 120px; }
        .stat-number { font-size: 2.5rem; font-weight: 700; color: var(--primary-color); display: block; }
        .stat-label { font-size: 0.9rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .app-list { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
        .loading, .empty-state { text-align: center; font-size: 1.2rem; color: var(--text-secondary); padding: 3rem 0; }

        @media (max-width: 768px) {
          .download-page { 
            max-width: 100%; 
            margin: 0;
            padding: 0 0.5rem;
          }
          .hero { 
            padding: 1rem 0; 
            margin-bottom: 2rem;
          }
          .hero h1 { 
            font-size: 2rem; 
          }
          .hero p { 
            font-size: 1rem; 
          }
          .about-section { 
            padding: 1.5rem; 
            margin-bottom: 2rem;
          }
          .about-section h2 { 
            font-size: 1.5rem; 
          }
          .stat-number { 
            font-size: 2rem; 
          }
          .app-list { 
            gap: 1rem; 
          }
        }
      `}</style>
    </div>
  );
}
