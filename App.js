import React from 'react';
import { StyleSheet, View } from 'react-native';
import AuthScreen from './src/components/AuthScreen';
import {AuthProvider} from "./src/components/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <AuthScreen />
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});
