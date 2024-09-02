import React from 'react';
import { ScrollView, View, StyleSheet } from "react-native";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home(props) {
    return (
        <View>
           <ScrollView>
               <Hero />
               <Footer />
           </ScrollView>
        </View>
    );
}

export default Home;
