import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Menu from './src/components/Menu'; // Adjust path as needed

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => <Menu />,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
