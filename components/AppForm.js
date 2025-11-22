"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AppForm({ initialData = {}, onSubmit }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        packageName: initialData.packageName || '',
        version: initialData.version || '',
        description: initialData.description || '',
        downloadUrl: initialData.downloadUrl || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="card app-form">
            <div className="form-group">
                <label htmlFor="name">App Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. My Awesome App"
                />
            </div>

            <div className="form-group">
                <label htmlFor="packageName">Package Name</label>
                <input
                    type="text"
                    id="packageName"
                    name="packageName"
                    value={formData.packageName}
                    onChange={handleChange}
                    required
                    placeholder="com.example.app"
                />
            </div>

            <div className="form-group">
                <label htmlFor="version">Version</label>
                <input
                    type="text"
                    id="version"
                    name="version"
                    value={formData.version}
                    onChange={handleChange}
                    required
                    placeholder="1.0.0"
                />
            </div>

            <div className="form-group">
                <label htmlFor="downloadUrl">Google Play URL *</label>
                <input
                    type="url"
                    id="downloadUrl"
                    name="downloadUrl"
                    value={formData.downloadUrl || ''}
                    onChange={handleChange}
                    placeholder="https://play.google.com/store/apps/details?id=..."
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary full-width">
                Add App
            </button>

            <div className="form-group full-width">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your app..."
                />
            </div>

            <div className="form-actions full-width">
                <button type="button" onClick={() => router.back()} className="btn btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    Save App
                </button>
            </div>

            <style jsx>{`
        .app-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1rem;
        }
        @media (max-width: 768px) {
          .app-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </form>
    );
}
