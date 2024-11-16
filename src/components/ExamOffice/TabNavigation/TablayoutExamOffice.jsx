import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Import Icon

import Home from '../../../pages/ExamOffice/Home';
import ApprovalList from '../../../pages/ExamOffice/ApprovalList';
import DeptAuthrity from '../../../pages/ExamOffice/DeptAuthrity';
import HallAuthroty from '../../../pages/ExamOffice/HallAuthroty';
import { useNavigation } from '@react-navigation/native';

// Assuming Colors is defined somewhere or use directly here
const Colors = {
  WHITE: '#ffffff',
  BLACK: '#000000',
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
        headerShown: true,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Set icon name based on the screen
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Approval List') {
            iconName = 'mail-unread-sharp';
          } else if (route.name === 'Dept Authority') {
            iconName = 'storefront';
          } else if (route.name === 'Hall Authority') {
            iconName = 'business';
          }
 
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Approval List" component={ApprovalList} />
      <Tab.Screen name="Dept Authority" component={DeptAuthrity} />
      <Tab.Screen name="Hall Authority" component={HallAuthroty} />
    </Tab.Navigator>
  );
};

export default TablayoutExamOffice;

const styles = StyleSheet.create({});
