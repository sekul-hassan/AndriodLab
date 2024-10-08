import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = async () => {
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert('User registered successfully!');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                Alert.alert('User logged in successfully!');
                navigation.navigate('Form');
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title={isSignUp ? 'Sign Up' : 'Login'} onPress={handleSubmit} color="#0066CC" />
            <TouchableOpacity style={styles.switchButton} onPress={() => setIsSignUp(!isSignUp)}>
                <Text style={styles.switchText}>
                    {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop: 160,

        backgroundColor: '#E6F0FF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
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
    switchButton: {
        marginTop: 15,
        alignItems: 'center',
    },
    switchText: {
        color: '#0066CC',
        fontSize: 16,
    },
});

export default AuthScreen;
