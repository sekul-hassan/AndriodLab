import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fill Up the Form</Text>
            <TextInput placeholder="Your Name" style={styles.input} />
            <TextInput placeholder="Your Address" style={styles.input} />
            <Button title="Submit" onPress={() => alert('Form submitted!')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
    },
});

export default FormScreen;
