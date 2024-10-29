import React from 'react';
import {ScrollView} from "react-native";
import Header from "../../components/Student/Home/Header";
import Slider from "../../components/Student/Home/Slider";
import Category from "../../components/Student/Home/Category";
import TabsLayout from "../../components/Student/TabNavigation/TabsLayout";

function Home(props) {
    return (
       <ScrollView>
           <Header/>
           <Slider/>
           <Category/>
       </ScrollView>
    );
}

export default Home;

