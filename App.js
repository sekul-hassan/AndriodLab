import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ActivityIndicator, Text} from "react-native";
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
import AuthProvider, { FirebaseContext } from './Context/AuthProvider';
import TablayoutExamOffice from './src/components/ExamOffice/TabNavigation/TablayoutExamOffice';
import TablayoutHallOffice from './src/components/HallOffice/TabNavigation/TablayoutHallOffice';




const Stack = createStackNavigator();

export default function App() {

    const [user, setUser ]= useState(true);
    const [fontsLoading] = useFonts ({
        'outfit-regular':require('./assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium':require('./assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
    });

    if(!fontsLoading){
        return <ActivityIndicator></ActivityIndicator>
    }


    return (



<AuthProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/">
               {
                user?<>
                <Stack.Screen name="/" component={LandingPage} />
                <Stack.Screen name="/signin" component={SignIn} />
                <Stack.Screen name="/signup" component={SignUp} />
                <Stack.Screen name="/forgot" component={Forgot} />
                <Stack.Screen name="/tab-layout" component={TabsLayout} />
                <Stack.Screen name="/semester" component={Semester} />
                <Stack.Screen name="/semesterDetails" component={SemesterDetails} />
                <Stack.Screen name="/certificate" component={Certificate} />
                <Stack.Screen name="/retakeexam" component={RetakeExamForm} />
                <Stack.Screen name="/examschedule" component={Examschedule} /></>:
                <>
                {/* <Stack.Screen name="/tab-layoutExamoffice" component={TablayoutExamOffice} /> */}
                {/* <Stack.Screen name="/tab-layoutExamoffice" component={TablayoutHallOffice} />  */}
                
                
                </>
               }
            </Stack.Navigator>
          
        </NavigationContainer>
     
        </AuthProvider>
        
   
    

        
    );
}
