"use client";

import { useApps } from '@/lib/useApps';
import AppForm from '@/components/AppForm';
import { useRouter } from 'next/navigation';

export default function AddAppPage() {
    const { addApp } = useApps();
    const router = useRouter();

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
