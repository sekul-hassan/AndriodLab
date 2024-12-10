import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
import ExamHeader from '../../components/ExamOffice/TabNavigation/ExamHeader';

import Slider from '../../components/Student/Home/Slider';
import ExamOfficeCategory from './ExamOfficeCategory';

const Home = () => {

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View style={styles.container} >
    <StatusBar
                backgroundColor="#000" 
                barStyle="light-content" 
            />
     <ExamHeader></ExamHeader>
   <Slider></Slider>
   <ExamOfficeCategory></ExamOfficeCategory>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
},
})