import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../assets/Colors'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

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
       
        const formData = {
            fullName,
            email,
            registrationRoll,
            examRoll,
            selectedSession,
            selectedSemester,
            examYear,
        };

        console.log(formData);
        
    };

    return (
        <ScrollView style={{
            padding: 30,
            backgroundColor: Colors.WHITE,
            height: '100%',
            paddingTop: 80,
        }} >
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 30,
                }}
            >Form Fill Up</Text>

            {/* Full Name Input */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Your Full Name'
                    value={fullName}
                    onChangeText={setFullName} // Update state when text changes
                />
            </View>

            {/* Email Input */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Your Email'
                    value={email}
                    onChangeText={setEmail} // Update state when text changes
                />
            </View>

            {/* Session DropDownPicker */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Session</Text>
                <DropDownPicker
                    open={openSession}
                    setOpen={setOpenSession}
                    value={selectedSession}
                    items={itemsSession}
                    setValue={setSelectedSession}
                    setItems={setItemsSession}
                    style={{ borderColor: Colors.GRAY, borderWidth: 2, borderRadius: 10, padding: 10 }}
                    placeholder='Select Your Session'
                />
            </View>

            {/* Registration Roll */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Registration Roll</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Registration Number'
                    value={registrationRoll}
                    onChangeText={setRegistrationRoll} // Update state when text changes
                />
            </View>

            {/* Exam Roll */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Exam Roll</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Your Exam Roll'
                    value={examRoll}
                    onChangeText={setExamRoll} // Update state when text changes
                />
            </View>

            {/* Semester DropDownPicker */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Semester</Text>
                <DropDownPicker
                    open={openSemester}
                    value={selectedSemester}
                    items={itemsSemester}
                    setOpen={setOpenSemester}
                    setValue={setSelectedSemester}
                    setItems={setItemsSemester}
                    style={{ borderColor: Colors.GRAY, borderWidth: 2, borderRadius: 10, padding: 10 }}
                    placeholder='Select Your Semester'
                />
            </View>

            {/* Exam Year Input */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Exam Year</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Your Exam Year'
                    value={examYear}
                    onChangeText={setExamYear} // Update state when text changes
                />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
                style={{
                    padding: 18,
                    backgroundColor: Colors.BLACK,
                    borderRadius: 10,
                    marginTop: 30,
                }}
                onPress={handleSubmit} // Call handleSubmit when the button is pressed
            >
                <Text style={{
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Certificate;

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 10,
        padding: 10,
        borderColor: Colors.GRAY,
    },
});
