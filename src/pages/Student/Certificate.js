import { ActivityIndicator, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../assets/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from "axios";

const Certificate = () => {
    const [openSession, setOpenSession] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);
    const [itemsSession, setItemsSession] = useState([
        { label: '2017-2018', value: '2017-2018' },
        { label: '2018-2019', value: '2018-2019' },
        { label: '2019-2020', value: '2019-2020' },
        { label: '2020-2021', value: '2020-2021' },
        { label: '2021-2022', value: '2021-2022' },
    ]);

    const [openSemester, setOpenSemester] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [itemsSemester, setItemsSemester] = useState([
        { label: 'semester 1-1', value: 'semester 1-1' },
        { label: 'semester 1-2', value: 'semester 1-2' },
        { label: 'semester 2-1', value: 'semester 2-1' },
        { label: 'semester 2-2', value: 'semester 2-2' },
        { label: 'semester 3-1', value: 'semester 3-1' },
        { label: 'semester 3-2', value: 'semester 3-2' },
        { label: 'semester 4-1', value: 'semester 4-1' },
        { label: 'semester 4-2', value: 'semester 4-2' },
    ]);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [registrationRoll, setRegistrationRoll] = useState('');
    const [examRoll, setExamRoll] = useState('');
    const [examYear, setExamYear] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const handleSubmit = () => {
        const tk = 1000;

        const formData = {
            name: fullName,
            regiNo: registrationRoll,
            examRoll: examRoll,
            session: selectedSession,
            semester: selectedSemester,
            examYear: examYear,
            bill: tk
        };

        console.log(formData);

        navigation.navigate('Payment-Certificate', { fullName, examRoll, registrationRoll, selectedSemester, selectedSession, examYear, tk });
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} keyboardShouldPersistTaps="handled" nestedScrollEnabled={true}>
                <Text style={styles.header}>Form Fill Up</Text>

                {/* Full Name Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Full Name" value={fullName} onChangeText={setFullName} />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Email" value={email} onChangeText={setEmail} />
                </View>

                {/* Session DropDownPicker */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Session</Text>
                    <DropDownPicker
                        open={openSession}
                        setOpen={setOpenSession}
                        value={selectedSession}
                        items={itemsSession}
                        setValue={setSelectedSession}
                        setItems={setItemsSession}
                        style={styles.dropdown}
                        placeholder="Select Your Session"
                        dropDownContainerStyle={{ borderColor: Colors.GRAY }}
                    />
                </View>

                {/* Registration Roll */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Registration Roll</Text>
                    <TextInput style={styles.input} placeholder="Enter Registration Number" value={registrationRoll} onChangeText={setRegistrationRoll} />
                </View>

                {/* Exam Roll */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Exam Roll</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Exam Roll" value={examRoll} onChangeText={setExamRoll} />
                </View>

                {/* Semester DropDownPicker */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Semester</Text>
                    <DropDownPicker
                        open={openSemester}
                        setOpen={setOpenSemester}
                        value={selectedSemester}
                        items={itemsSemester}
                        setValue={setSelectedSemester}
                        setItems={setItemsSemester}
                        style={styles.dropdown}
                        placeholder="Select Your Semester"
                        dropDownContainerStyle={{ borderColor: Colors.GRAY }}
                    />
                </View>

                {/* Exam Year Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Exam Year</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Exam Year" value={examYear} onChangeText={setExamYear} />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: 10,
    },
    label: {
        fontFamily: 'outfit-medium',
        marginVertical: 2,
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 10,
        padding: 10,
        borderColor: Colors.GRAY,
    },
    dropdown: {
        borderColor: Colors.GRAY,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    submitButton: {
        padding: 18,
        backgroundColor: Colors.BLACK,
        borderRadius: 10,
        marginTop: 30,
    },
    submitText: {
        color: Colors.WHITE,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
    },
});

export default Certificate;
