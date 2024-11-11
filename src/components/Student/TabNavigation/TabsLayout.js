import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../../pages/Student/Home";
import Transaction from "../../../pages/Student/Transaction";
import Notification from "../../../pages/Student/Notification";
import Profile from "../../../pages/Student/Profile";
import { Colors } from '../../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabsLayout(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarActiveTintColor: Colors.WHITE,
            
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Transaction') {
                        iconName = 'card-outline';
                    } else if (route.name === 'Notification') {
                        iconName = 'notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }

                    return <Icon name={iconName} size={30} color={'balck'} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Transaction" component={Transaction} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default TabsLayout;

