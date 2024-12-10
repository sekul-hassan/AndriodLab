import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
import { Colors } from '../../assets/Colors'; // Assuming you have a Colors file
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const RetakeExamForm = () => {
  const [fullName, setFullName] = useState('');
  const [examRoll, setExamRoll] = useState('');
  const [registrationRoll, setRegistrationRoll] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [openSession, setOpenSession] = useState(false);

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

  const handleCourseSelect = (course) => {
    setSelectedCourses((prevCourses) =>
      prevCourses.includes(course.name)
        ? prevCourses.filter((item) => item !== course.name)
        : [...prevCourses, course.name]
    );
  };

  const calculateTotalUSD = () => {
    let total = 0;
    selectedCourses.forEach((courseName) => {
      const course = coursesData[selectedSemester]?.find((c) => c.name === courseName);
      if (course) total += course.usd;
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
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retake Form Fill Up</Text>

      {/* Student Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Registration Roll */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Registration Roll</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Registration Number"
          value={registrationRoll}
          onChangeText={setRegistrationRoll}
        />
      </View>

      {/* Exam Roll */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Exam Roll</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Exam Roll"
          value={examRoll}
          onChangeText={setExamRoll}
        />
      </View>

      {/* Semester Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Semester</Text>
        <DropDownPicker
          open={openSession}
          setOpen={setOpenSession}
          value={selectedSemester}
          items={semesterItems}
          setValue={setSelectedSemester}
          style={styles.dropdown}
          placeholder="Select a Semester"
        />
      </View>

      {/* Course Selection */}
      {selectedSemester ? (
        <View style={styles.coursesContainer}>
          <Text style={styles.label}>Select Courses for Retake:</Text>
          {coursesData[selectedSemester]?.map((course, index) => (
            <TouchableOpacity
              key={index}
              style={styles.checkboxContainer}
              onPress={() => handleCourseSelect(course)}
            >
              <View style={styles.courseRow}>
                <Text style={styles.courseText}>
                  {selectedCourses.includes(course.name) ? (
                    <AntDesign name="checkcircleo" size={20} color="black" />
                  ) : (
                    <AntDesign name="pluscircleo" size={20} color="black" />
                  )}{' '}
                  {course.name}
                </Text>
                <View style={styles.courseDetails}>
                  <Text style={styles.courseDetailsText}>Credits: {course.credit}</Text>
                  <Text style={styles.courseDetailsText}>USD: ${course.usd}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}

      {/* Results */}
      <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                Number of Courses: {selectedCourses.length}
              </Text>
              <Text style={styles.resultText}>Total Tk: {calculateTotalUSD ()}</Text>
            </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: Colors.WHITE,
    height: '100%',
    paddingTop: 80,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'outfit-medium',
    marginVertical: 2,
  },
  inputContainer: {
    marginBottom: 10,
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
  coursesContainer: {
    marginTop: 20,
  },
  checkboxContainer: {
    marginBottom: 15,
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
    flex: 1,
    marginRight: 10,
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  courseDetailsText: {
    fontSize: 14,
    fontFamily: 'outfit-regular',
    marginLeft: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
  },
  submitButton: {
    padding: 18,
    backgroundColor: Colors.BLACK,
    borderRadius: 10,
    marginTop: 30,
  },
  submitButtonText: {
    color: Colors.WHITE,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
  },
});

export default RetakeExamForm;
