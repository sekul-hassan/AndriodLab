import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderShared from '../../components/HeaderShared'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View>
      <HeaderShared name='Exam Office' ></HeaderShared>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})