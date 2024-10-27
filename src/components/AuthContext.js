// AuthContext.js
import React, { createContext, useContext, useEffect } from 'react';
import { auth } from '../../firebaseConfig'; // Import your auth instance
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user ? 'User is logged in' : 'No user is logged in');
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
