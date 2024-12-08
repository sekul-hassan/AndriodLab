import React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Colors } from '../../../assets/Colors';

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.topRow}>
                <FontAwesome name="user" size={50} color="white" style={styles.userIcon} />
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>Toufik Hasan Labib</Text>
                </View>
                <View style={styles.notificationIconContainer}>
                    <Ionicons name="notifications-sharp" size={35} color="white" />
                </View>
            </View>

            <View style={styles.searchBar}>
                <Fontisto name="search" size={24} color="black" />
                <TextInput placeholder='Search..' style={styles.searchInput} />
            </View>
        </View>
    );
};

export default Header;
const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: Colors.BLACK,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    userIcon: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    welcomeText: {
        fontSize: 14,
        fontFamily: 'outfit-bold',
        color: 'white',
    },
    nameText: {
        fontSize: 19,
        fontFamily: 'outfit-bold',
        color: 'white',
    },
    notificationIconContainer: {
        alignItems: 'flex-end',
        flex: 1, 
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8,
    },
    searchInput: {
        flex: 1, 
        marginLeft: 10,
        color: Colors.BLACK,
        fontFamily: 'outfit-bold',
    },
});
