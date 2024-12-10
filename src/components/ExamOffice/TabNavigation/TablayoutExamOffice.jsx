import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


import Home from '../../../pages/ExamOffice/Home';
import ProfileExam from '../../../pages/ExamOffice/ProfileExam';


const Colors = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    ACTIVE_TAB: '#000000', 
    INACTIVE_TAB: '#000000', 
    BACKGROUND: '#f9f9f9', 
};

const TablayoutExamOffice = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, 
                tabBarActiveTintColor: Colors.ACTIVE_TAB, 
                tabBarInactiveTintColor: Colors.INACTIVE_TAB, 
                tabBarStyle: {
                    backgroundColor: Colors.BACKGROUND, 
                    height: 60, 
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'; 
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'; 
                    }
                    return <Icon name={iconName} size={28} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 12, 
                    fontWeight: '600', 
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={ProfileExam} />
        </Tab.Navigator>
    );
};

export default TablayoutExamOffice;

const styles = StyleSheet.create({});
