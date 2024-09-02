import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import img1 from '../assets/Images/nice.jpeg';
import img2 from '../assets/Images/msq.jpeg';
import img3 from '../assets/Images/book.jpeg';
import img4 from '../assets/Images/nice2.jpeg';
import img5 from '../assets/Images/sea1.jpeg';
import img6 from '../assets/Images/opnsky1.jpeg';
import img7 from '../assets/Images/sea2.jpeg';
import Footer from "./Footer";

function Hero(props) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img3} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img4} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img1} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img5} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img6} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img7} style={styles.image} />
            <Text style={styles.title}>Explore yourself.</Text>
            <Image source={img2} style={styles.image} />
        </ScrollView>
    );
}

export default Hero;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 400,
    },

});
