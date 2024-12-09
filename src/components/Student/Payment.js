import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Text,
} from 'react-native';
import {
    StripeProvider,
    useStripe,
    CardForm,
} from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51QNEv1JEuoFclw00O0KJ9L4oCdZycd57m6l3ptPRkW6X0uTwlaikWKA0PK7GrDaedB8LEvz9qfIXo69gxB4Z8hQe00UB480LzJ';

const Payment = ({ route }) => {
    const { fullName, examRoll, registrationRoll, selectedCourses, selectedSemester, tk } = route.params;
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [cardDetails, setCardDetails] = useState(null); // state for storing card details
    const [token, setToken] = useState(null); // state for storing token

    // Fetch token from AsyncStorage on component mount
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('userToken'); // Replace with your token key
                if (storedToken) {
                    setToken(storedToken);
                }
            } catch (error) {
                console.error('Error fetching token from AsyncStorage:', error);
            }
        };

        fetchToken();
    }, []);

    // Handle card form completion and update cardDetails state
    const handleCardDetails = (details) => {
        console.log('Card details received:', details);
        setCardDetails(details);
    };

    // Handle the payment process after form submission
    const handleSubmit = async () => {
        if (!cardDetails || !cardDetails.complete) {
            Alert.alert('Error', 'Please complete the card details form.');
            return;
        }

        const paymentData = {
            name: fullName,
            examRoll: examRoll,
            regiNo: registrationRoll,
            course: selectedCourses,
            semester: selectedSemester,
            bill: tk * 100, // Convert to cents for USD
            type: "card",
            token: token, // Pass the token here
        };

        try {
            const clientSecret = await fetchClientSecret(paymentData);
            if (!clientSecret) {
                Alert.alert('Error', 'Failed to retrieve client secret.');
                return;
            }

            const { error } = await initPaymentSheet({
                merchantDisplayName: "Example, Inc.",
                paymentIntentClientSecret: clientSecret,
                defaultBillingDetails: {
                    name: fullName,
                },
            });

            if (error) {
                Alert.alert('Error', error.message);
                return;
            }

            const paymentResult = await presentPaymentSheet();
            if (paymentResult.error) {
                Alert.alert('Payment failed', paymentResult.error.message);
            } else {
                Alert.alert('Success', 'Your payment was successful!');
            }
        } catch (error) {
            console.error('Error during payment process:', error.message);
            Alert.alert('Error', 'Something went wrong.');
        }
    };

    // Fetch the client secret from your backend
    const fetchClientSecret = async (paymentData) => {
        try {
            const response = await fetch('http://192.168.137.1:5000/api/exam/examForm', {
                method: 'POST',
                body: JSON.stringify(paymentData),
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": token
                },
            });
            const { clientSecret } = await response.json();
            return clientSecret;
        } catch (error) {
            console.error('Error fetching client secret:', error);
            return null;
        }
    };

    return (
        <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <SafeAreaView style={styles.container}>
                <CardForm
                    placeholder={{
                        number: "4242 4242 4242 4242",
                    }}
                    onFormComplete={handleCardDetails}
                    style={{
                        height: 250,
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        backgroundColor: '#333'
                    }}
                    textStyle={{
                        color: '#fff', // White text color
                    }}
                />

                <TouchableOpacity style={styles.payButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Pay Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </StripeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingBottom:50
    },
    payButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Payment;
