import React, {useEffect} from 'react';
import {ScrollView} from "react-native";
import Header from "../../components/Student/Home/Header";
import Slider from "../../components/Student/Home/Slider";
import Category from "../../components/Student/Home/Category";

import {useNavigation} from "@react-navigation/native";

function Home(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
       <ScrollView>
           <Header/>
           <Slider/>
           <Category/>
       </ScrollView>
    );
}

export default Home;

