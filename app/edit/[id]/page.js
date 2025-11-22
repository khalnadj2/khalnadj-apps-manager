"use client";

import { useApps } from '@/lib/useApps';
import AppForm from '@/components/AppForm';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditAppPage({ params }) {
    const { getApp, updateApp, loading } = useApps();
    const router = useRouter();
    const [app, setApp] = useState(null);

    useEffect(() => {
        if (!loading) {
            const foundApp = getApp(params.id);
            if (foundApp) {
                setApp(foundApp);
            } else {
                router.push('/');
            }
        }
    }, [loading, params.id, getApp, router]);

    const handleSubmit = (data) => {
        updateApp(params.id, data);
        router.push('/');
    };

    if (loading || !app) {
        return <div className="loading">Loading app details...</div>;
    }

    return (
        <div className="page-container">
            <h1>Edit App: {app.name}</h1>
            <AppForm initialData={app} onSubmit={handleSubmit} />
            <style jsx>{`
        .loading {
          text-align: center;
          padding: 4rem;
          color: var(--text-secondary);
        }
      `}</style>
        </div>
    );
}
