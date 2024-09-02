import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={styles.navText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Contact pressed!')}>
                <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        marginTop: 35,
    },
    navText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Menu;
