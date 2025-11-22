"use client";

import { useApps } from '@/lib/useApps';
import AppForm from '@/components/AppForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function EditAppContent() {
    const { getApp, updateApp, loading } = useApps();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [app, setApp] = useState(null);

    useEffect(() => {
        if (!loading) {
            if (!id) {
                router.push('/');
                return;
            }
            const foundApp = getApp(id);
            if (foundApp) {
                setApp(foundApp);
            } else {
                router.push('/');
            }
        }
    }, [loading, id, getApp, router]);

    const handleSubmit = (data) => {
        updateApp(id, data);
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

export default function EditAppPage() {
    return (
        <Suspense fallback={<div className="loading">Loading...</div>}>
            <EditAppContent />
        </Suspense>
    );
}
