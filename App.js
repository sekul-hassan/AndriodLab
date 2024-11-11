import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native";
import {useFonts} from "expo-font";
import LandingPage from "./src/components/LandingPage";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import Forgot from "./src/pages/Forgot";
import TabsLayout from "./src/components/Student/TabNavigation/TabsLayout";
import Semester from './src/pages/Student/Semester';
import SemesterDetails from './src/pages/Student/SemesterDetails';
import Certificate from './src/pages/Student/Certificate';
import RetakeExamForm from './src/pages/Student/RetakeExam';
import Examschedule from './src/pages/Student/Examschedule';

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
            <Stack.Navigator initialRouteName="/">
                <Stack.Screen name="/" component={LandingPage} />
                <Stack.Screen name="/signin" component={SignIn} />
                <Stack.Screen name="/signup" component={SignUp} />
                <Stack.Screen name="/forgot" component={Forgot} />
                <Stack.Screen name="/semester" component={Semester} />
                <Stack.Screen name="/semesterDetails" component={SemesterDetails} />
                <Stack.Screen name="/tab-layout" component={TabsLayout} />
                <Stack.Screen name="/certificate" component={Certificate} />
                <Stack.Screen name="/retakeexam" component={RetakeExamForm} />
                <Stack.Screen name="/examschedule" component={Examschedule} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
