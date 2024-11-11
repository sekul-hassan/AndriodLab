import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
import { Colors } from '../../assets/Colors'; // Assuming you have a Colors file
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const RetakeExamForm = () => {
  // State to hold the student's name, exam roll number, registration roll, selected courses, and selected semester
  const [fullName, setFullName] = useState('');
  const [examRoll, setExamRoll] = useState('');
  const [registrationRoll, setRegistrationRoll] = useState(''); // Added state for registration roll
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(''); // Default value set to ''
  const [openSession, setOpenSession] = useState(false); // State to control dropdown visibility

  // List of courses for each semester
  const coursesData = {
    'Semester 1': ['Mathematics', 'Physics', 'Chemistry'],
    'Semester 2': ['Biology', 'Computer Science', 'English'],
    'Semester 3': ['Advanced Mathematics', 'Astronomy', 'Machine Learning'],
  };

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourses((prevCourses) => {
      if (prevCourses.includes(course)) {
        return prevCourses.filter((item) => item !== course); // Remove the course
      } else {
        return [...prevCourses, course]; // Add the course
      }
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Logging all the form data
    console.log('Full Name:', fullName);
    console.log('Registration Roll:', registrationRoll); // Added logging for registration roll
    console.log('Exam Roll:', examRoll);
    console.log('Selected Semester:', selectedSemester);
    console.log('Selected Courses:', selectedCourses);
    console.log('Number of Courses:', selectedCourses.length);
  };

  // Data for semester dropdown
  const semesterItems = [
    { label: 'Select a Semester', value: '' }, // Option for 'no semester' or empty
    { label: 'Semester 1', value: 'Semester 1' },
    { label: 'Semester 2', value: 'Semester 2' },
    { label: 'Semester 3', value: 'Semester 3' },
  ];

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <View style={{
      padding: 30,
      backgroundColor: Colors.WHITE,
      height: '100%',
      paddingTop: 80,
    }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
         textAlign:'center'
        }}
      >
      Retake  Form Fill Up
      </Text>

      {/* Student Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Registration Roll */}
      <View >
        <Text style={{ fontFamily: 'outfit-medium', marginVertical: 5 }}>Registration Roll</Text>
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

      {/* Semester Selection using DropDownPicker */}
      <View style={styles.inputContainer}>
        <Text style={{ fontFamily: 'outfit-medium', marginVertical: 2 }}>Select Semester</Text>
        <DropDownPicker
          open={openSession} 
          setOpen={setOpenSession} 
          value={selectedSemester} 
          items={semesterItems} 
          setValue={setSelectedSemester} 
          style={{ borderColor: Colors.GRAY, borderWidth: 2, borderRadius: 10, padding: 10 }}
          placeholder="Select a Semester"
        />
      </View>

      {/* Course Selection (only if a semester is selected) */}
      {selectedSemester ? (
        <View style={styles.coursesContainer}>
          <Text style={styles.label}>Select Courses for Retake:</Text>
          {coursesData[selectedSemester].map((course, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleCourseSelect(course)}
              >
                <Text style={styles.checkboxText}>
                  {selectedCourses.includes(course) ? <AntDesign name="checkcircleo" size={20} color="black" /> : <AntDesign name="pluscircleo" size={20} color="black" />} {course}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
       <></>
      )}

      {/* Display the Number of Courses Selected */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Number of Courses for Retake: {selectedCourses.length}
        </Text>
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 5,
    marginTop:10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 10,
    padding: 10,
    borderColor: Colors.GRAY,
  },
  checkboxContainer: {
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'outfit-medium',
  },
  coursesContainer: {

  },
});

export default RetakeExamForm;

