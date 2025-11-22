"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function AppCard({ app, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card app-card">
      <div className="app-icon">
        {app.imageUrl ? (
          <img src={app.imageUrl} alt={app.name} className="icon-img" />
        ) : (
          <span>{app.name.charAt(0)}</span>
        )}
      </div>
      <div className="app-details">
        <h3>{app.name}</h3>
        <p className="package-name">{app.packageName}</p>
        {app.description && (
          <p
            className={`description ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            title="Click to expand/collapse"
          >
            {app.description}
            <span className="expand-indicator">
              {isExpanded ? ' ▲' : ' ▼'}
            </span>
          </p>
        )}
        <div className="meta">
          <span className="version">v{app.version}</span>
          <span className="status">Active</span>
        </div>
      </div>
      <div className="actions-column">
        <div className="app-actions">
          <Link href={`/edit?id=${app.id}`} className="btn btn-secondary btn-sm">
            Edit
          </Link>
          <button onClick={() => onDelete(app.id)} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
        <a href={app.downloadUrl} target="_blank" rel="noopener noreferrer" className="google-play-badge">
          <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
        </a>
        {app.githubUrl && (
          <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link" title="View Source on GitHub">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
              <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        )}
      </div>

      <style jsx>{`
        .github-link {
          color: var(--text-primary);
          opacity: 0.7;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
        }
        .github-link:hover {
          opacity: 1;
        }
        .app-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        .app-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
          overflow: hidden;
        }
        .icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .app-details {
          flex: 1;
          min-width: 0; /* Critical for text-overflow to work in flex child */
        }
        .app-details h3 {
          margin-bottom: 0.25rem;
          font-size: 1.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .package-name {
          font-size: 0.875rem;
          font-family: monospace;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding-right: 1.5rem;
        }
        .description:hover {
          color: var(--text-primary);
          background-color: rgba(16, 185, 129, 0.05);
          padding: 0.5rem;
          margin: -0.5rem -0.5rem 0.25rem -0.5rem;
          border-radius: var(--radius-sm);
        }
        .description.expanded {
          display: block;
          -webkit-line-clamp: unset;
          max-height: 500px;
        }
        .expand-indicator {
          color: var(--primary-color);
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }
        .meta {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }
        .version {
          background-color: var(--bg-tertiary);
          padding: 0.125rem 0.5rem;
          border-radius: var(--radius-sm);
        }
        .actions-column {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }
        .app-actions {
          display: flex;
          gap: 0.5rem;
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        .btn-danger {
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--error-color);
          border: 1px solid var(--error-color);
        }
        .btn-danger:hover {
          background-color: var(--error-color);
          color: white;
        }
        .google-play-badge {
          display: block;
          line-height: 0;
        }
        .google-play-badge img { width: auto; height: 60px; }

        @media (max-width: 768px) {
          .app-card {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .app-icon {
            width: 56px;
            height: 56px;
            font-size: 1.75rem;
          }
          .app-details {
            width: 100%;
            text-align: center;
          }
          .app-details h3 {
            font-size: 1.1rem;
            white-space: normal;
          }
          .package-name {
            white-space: normal;
            word-break: break-all;
          }
          .description {
            text-align: left;
          }
          .meta {
            justify-content: center;
          }
          .actions-column {
            width: 100%;
            align-items: center;
          }
          .app-actions {
            width: 100%;
            justify-content: center;
          }
          .btn-sm {
            flex: 1;
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }
          .google-play-badge img {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}
