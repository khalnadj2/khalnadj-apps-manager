"use client";

import { useApps } from '@/lib/useApps';
import AppCard from '@/components/AppCard';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const { apps, loading, deleteApp, refreshApps } = useApps();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch('/api/refresh-apps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apps }),
      });

      if (!response.ok) throw new Error('Failed to refresh apps');

      const data = await response.json();
      refreshApps(data.apps);
      alert('Apps updated successfully from Google Play!');
    } catch (error) {
      console.error('Error refreshing apps:', error);
      alert('Failed to update apps. Please try again.');
    } finally {
      setIsRefreshing(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading apps...</div>;
  }

  return (
    <div className="dashboard">
      <div className="header">
        <h1>My Apps</h1>
        <div className="actions">
          <button
            className="btn btn-secondary"
            disabled={true}
            title="Feature unavailable on GitHub Pages"
            onClick={() => alert('This feature requires a backend server and is not available on GitHub Pages.')}
          >
            ↻ Refresh Data (Unavailable)
          </button>
          <Link href="/add" className="btn btn-primary">
            + Add New App
          </Link>
        </div>
      </div>

      {apps.length === 0 ? (
        <div className="empty-state">
          <p>No apps found. Start by adding one!</p>
        </div>
      ) : (
        <div className="app-grid">
          {apps.map(app => (
            <AppCard key={app.id} app={app} onDelete={deleteApp} />
          ))}
        </div>
      )}

      <style jsx>{`
        .dashboard {
          max-width: 900px;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .actions {
          display: flex;
          gap: 1rem;
        }
        .app-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .loading, .empty-state {
          text-align: center;
          padding: 4rem;
          color: var(--text-secondary);
          font-size: 1.2rem;
        }
        .btn-secondary {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }
        .btn-secondary:hover:not(:disabled) {
          background-color: var(--bg-secondary);
          border-color: var(--primary-color);
        }
        .btn-secondary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
