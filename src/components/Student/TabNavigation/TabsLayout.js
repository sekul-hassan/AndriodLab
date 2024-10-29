import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../../pages/Student/Home";
import Transaction from "../../../pages/Student/Transaction";
import Notification from "../../../pages/Student/Notification";
import Profile from "../../../pages/Student/Profile";

const Tab = createBottomTabNavigator();

function TabsLayout(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Transaction"
                component={Transaction}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

export default TabsLayout;
