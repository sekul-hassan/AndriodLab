import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FormScreen = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [amount, setAmount] = useState('');
    const [session, setSession] = useState('');
    const [sscResult, setSscResult] = useState('');
    const [hscResult, setHscResult] = useState('');

    const handleSubmit = () => {
        if (!name || !address || !course || !amount || !session || !sscResult || !hscResult) {
            Alert.alert('Please fill out all fields');
            return;
        }

        Alert.alert('Form submitted successfully!',
            `Name: ${name}\nAddress: ${address}\nCourse: ${course}\nAmount: ${amount}\nSession: ${session}\nSSC Result: ${sscResult}\nHSC Result: ${hscResult}`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exam Form.</Text>
            <TextInput
                placeholder="Your Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Your Address"
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                placeholder="Course Name"
                style={styles.input}
                value={course}
                onChangeText={setCourse}
            />
            <TextInput
                placeholder="Amount to Pay"
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Session (e.g., 2023-2024)"
                style={styles.input}
                value={session}
                onChangeText={setSession}
            />
            <TextInput
                placeholder="SSC Result (Percentage)"
                style={styles.input}
                value={sscResult}
                onChangeText={setSscResult}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="HSC Result (Percentage)"
                style={styles.input}
                value={hscResult}
                onChangeText={setHscResult}
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
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
