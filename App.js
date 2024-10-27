import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native";
import About from './src/pages/About';
import LandingPage from "./src/components/LandingPage";
import SignIn from "./src/pages/SignIn";
import {useFonts} from "expo-font";
import SignUp from "./src/pages/SignUp";
import Forgot from "./src/pages/Forgot";
import TabsLayout from "./src/components/Student/TabNavigation/TabsLayout";
import Home from "./src/pages/Student/Home";
import Transaction from "./src/pages/Student/Transaction";
import Notification from "./src/pages/Student/Notification";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"; // Adjust path as needed
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from "./src/components/AuthContext";
import AuthScreen from './src/components/AuthScreen';
import FormScreen from './src/components/FormScreen';

const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

    const [fontsLoading] = useFonts ({
        'outfit-regular':require('./assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium':require('./assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
    });

    if(!fontsLoading){
        return <Text>Loading....</Text>
    }


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
