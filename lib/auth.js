"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const AUTH_KEY = 'app_manager_auth';
const CRED_EMAIL_KEY = 'app_manager_email';
const CRED_PASS_KEY = 'app_manager_password';
const DEFAULT_PASSWORD = 'admin';
const DEFAULT_EMAIL = 'admin@example.com';

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAuth = localStorage.getItem(AUTH_KEY);
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const storedEmail = localStorage.getItem(CRED_EMAIL_KEY) || DEFAULT_EMAIL;
        const storedPass = localStorage.getItem(CRED_PASS_KEY) || DEFAULT_PASSWORD;

        if (email === storedEmail && password === storedPass) {
            localStorage.setItem(AUTH_KEY, 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem(AUTH_KEY);
        setIsAuthenticated(false);
        window.location.href = '/khalnadj-apps-manager/';
    };

    const updateCredentials = (newEmail, newPassword) => {
        localStorage.setItem(CRED_EMAIL_KEY, newEmail);
        localStorage.setItem(CRED_PASS_KEY, newPassword);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, logout, updateCredentials }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
