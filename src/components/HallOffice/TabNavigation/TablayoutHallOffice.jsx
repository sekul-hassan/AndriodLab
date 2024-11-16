import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

import Home from '../../../pages/HallOffice/Home';
import ApprovalList from '../../../pages/HallOffice/ApprovalList';

import { useNavigation } from '@react-navigation/native';


const Colors = {
  WHITE: '#ffffff',
  BLACK: '#000000',
};

const TablayoutHallOffice = () => {
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
        headerShown: true,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Set icon name based on the screen
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Approval List') {
            iconName = 'mail-unread-sharp';
          }
 
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Approval List" component={ApprovalList} />
     
    </Tab.Navigator>
  );
};

export default TablayoutHallOffice;

const styles = StyleSheet.create({});