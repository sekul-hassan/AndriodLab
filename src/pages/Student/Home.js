import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet, StatusBar } from "react-native";
import Header from "../../components/Student/Home/Header";
import Slider from "../../components/Student/Home/Slider";
import Category from "../../components/Student/Home/Category";

import { useNavigation } from "@react-navigation/native";

function Home(props) {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false, 
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#000" 
                barStyle="light-content" 
            />
            <ScrollView>
                <Header />
                <Slider />
                <Category />
            </ScrollView>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
});

