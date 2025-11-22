"use client";

import { useApps } from '@/lib/useApps';
import AppForm from '@/components/AppForm';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Login from '@/components/Login';

export default function AddAppPage() {
    const { addApp } = useApps();
    const router = useRouter();
    const { isAuthenticated, login, loading: authLoading } = useAuth();

    if (authLoading) return null;

    if (!isAuthenticated) {
        return <Login onLogin={login} />;
    }

    const handleSubmit = (data) => {
        addApp(data);
        router.push('/');
    };

    return (
        <div className="page-container">
            <h1>Add New App</h1>
            <AppForm onSubmit={handleSubmit} />
        </div>
    );
}
