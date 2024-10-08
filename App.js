import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from "./src/components/AuthContext";
import AuthScreen from './src/components/AuthScreen';
import FormScreen from './src/components/FormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Auth">
                    <Stack.Screen name="Auth" component={AuthScreen} />
                    <Stack.Screen name="Form" component={FormScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
