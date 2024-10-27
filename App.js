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

const Stack = createStackNavigator();
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
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="/" component={LandingPage} />
                <Stack.Screen name="/signin" component={SignIn} />
                <Stack.Screen name="/signup" component={SignUp} />
                <Stack.Screen name="/forgot" component={Forgot} />
                <Stack.Screen name="/home" component={TabsLayout} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
