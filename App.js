import React from 'react';
import { StyleSheet, View } from 'react-native';
import Stopwatch from './src/components/Stopwatch'; // Adjust the path as necessary

export default function App() {
    return (
        <View style={styles.container}>
            <Stopwatch />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F0FF',
    },
});
