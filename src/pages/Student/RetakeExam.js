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

  // List of courses for each semester with credit and USD values
  const coursesData = {
    'Semester 1': [
      { name: 'Mathematics', credit: 3, usd: 100 },
      { name: 'Physics', credit: 4, usd: 120 },
      { name: 'Chemistry', credit: 3, usd: 110 },
    ],
    'Semester 2': [
      { name: 'Biology', credit: 3, usd: 90 },
      { name: 'Computer Science', credit: 4, usd: 150 },
      { name: 'English', credit: 2, usd: 80 },
    ],
    'Semester 3': [
      { name: 'Advanced Mathematics', credit: 4, usd: 130 },
      { name: 'Astronomy', credit: 3, usd: 110 },
      { name: 'Machine Learning', credit: 5, usd: 200 },
    ],
  };

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourses((prevCourses) => {
      if (prevCourses.includes(course.name)) {
        return prevCourses.filter((item) => item !== course.name); 
      } else {
        return [...prevCourses, course.name];
      }
    });
  };

  // Calculate total USD for selected courses
  const calculateTotalUSD = () => {
    let total = 0;
    selectedCourses.forEach((courseName) => {
      const course = coursesData[selectedSemester].find((course) => course.name === courseName);
      if (course) {
        total += course.usd;
      }
    });
    return total;
  };

  const handleSubmit = () => {
    console.log('Full Name:', fullName);
    console.log('Registration Roll:', registrationRoll); 
    console.log('Exam Roll:', examRoll);
    console.log('Selected Semester:', selectedSemester);
    console.log('Selected Courses:', selectedCourses);
    console.log('Number of Courses:', selectedCourses.length);
    console.log('Total USD:', calculateTotalUSD());
  };

  const semesterItems = [
    { label: 'Select a Semester', value: '' }, 
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
          textAlign: 'center'
        }}
      >
        Retake Form Fill Up
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
                <View style={styles.courseRow}>
                  {/* Course Name */}
                  <Text style={styles.courseText}>
                    {selectedCourses.includes(course.name) ? (
                      <AntDesign name="checkcircleo" size={20} color="black" />
                    ) : (
                      <AntDesign name="pluscircleo" size={20} color="black" />
                    )}
                    {course.name}
                  </Text>

                  {/* Credit and USD display */}
                  <View style={styles.courseDetails}>
                    <Text style={styles.courseDetailsText}>Credits: {course.credit}</Text>
                    <Text style={styles.courseDetailsText}>USD: ${course.usd}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <></>
      )}

     {/* Display the Number of Courses Selected */}
<View style={styles.resultContainer}>
  <View style={styles.resultItem}>
    <Text style={styles.resultText}>
      Number of Courses for Retake: {selectedCourses.length}
    </Text>
  </View>

  {/* Display the Total USD */}
  <View style={styles.resultItem}>
    <Text style={styles.resultText}>
      Total USD: ${calculateTotalUSD()}
    </Text>
  </View>
</View>


      {/* Submit Button */}
      <TouchableOpacity
        style={{
          padding: 18,
          backgroundColor: Colors.BLACK,
          borderRadius: 10,
          marginTop: 30,
        }}
        onPress={handleSubmit} 
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
    fontFamily: 'outfit-medium',
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
    marginBottom: 15,  // Increased space between items
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures space between course name and details
    paddingVertical: 10,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  courseText: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    flex: 1, // Ensures course name takes up available space
    marginRight: 10,  // Adds space between course name and the right section (credit and USD)
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align credits and USD to the right
    alignItems: 'center',
  },
  courseDetailsText: {
    fontSize: 14,
    fontFamily: 'outfit-regular',
    marginLeft: 10, // Adds space between the credit and USD
  },
  resultContainer: {
    marginTop: 20,
    flexDirection: 'row',  // Align the two items horizontally
    justifyContent: 'space-between',  // Space between the items
    alignItems: 'center',  // Align vertically in the center
  },
  resultItem: {
    flex: 1,  // Ensure items take equal space
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    flexDirection: 'row', // Arrange the two items (number of courses and total USD) horizontally
    justifyContent: 'space-between',  // Add space between the two items (left and right)
    alignItems: 'center',  // Vertically center the items
    width: '100%', // Ensure the container takes up full width
  },
  resultItem: {
    flex: 1,  // Each result item will take equal width
    justifyContent: 'center',  // Vertically center the text within each result item
    alignItems: 'center',  
  },
  resultText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    textAlign: 'center',  
  },
});

export default RetakeExamForm;
