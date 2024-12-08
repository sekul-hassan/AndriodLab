import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../../assets/Colors';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const Semester = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationRoll, setRegistrationRoll] = useState('');
  const [examRoll, setExamRoll] = useState('');
  const [examYear, setExamYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [openSemesterDropdown, setOpenSemesterDropdown] = useState(false);

  const coursesData = {
    'Semester 1': [
      { name: 'Mathematics I', credit: 3, Tk: 50 },
      { name: 'Physics', credit: 3, Tk: 50 },
    ],
    'Semester 2': [
      { name: 'Viva-Voce', credit: 3, Tk: 90 },
      { name: 'Mathematics II', credit: 4, Tk: 150 },
    ],
  };

  const handleCourseSelect = (course) => {
    setSelectedCourses((prevCourses) =>
      prevCourses.includes(course.name)
        ? prevCourses.filter((item) => item !== course.name)
        : [...prevCourses, course.name]
    );
  };

  const calculateTotalTk = () => {
    let total = 0;
    selectedCourses.forEach((courseName) => {
      const course = coursesData[selectedSemester]?.find(
        (course) => course.name === courseName
      );
      if (course) total += course.Tk;
    });
    return total;
  };

  const handleSubmit = () => {
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Registration Roll:', registrationRoll);
    console.log('Exam Roll:', examRoll);
    console.log('Exam Year:', examYear);
    console.log('Selected Semester:', selectedSemester);
    console.log('Selected Courses:', selectedCourses);
    console.log('Total Tk:', calculateTotalTk());
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.title}>Semester Form Fill Up</Text>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Full Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Full Name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>

            {/* Registration Roll */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Registration Roll</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Registration Roll"
                value={registrationRoll}
                onChangeText={setRegistrationRoll}
              />
            </View>

            {/* Exam Roll */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Exam Roll</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Exam Roll"
                value={examRoll}
                onChangeText={setExamRoll}
              />
            </View>

            {/* Exam Year */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Exam Year</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Exam Year"
                value={examYear}
                onChangeText={setExamYear}
                keyboardType="numeric"
              />
            </View>

            {/* Select Semester */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Select Semester</Text>
              <DropDownPicker
                open={openSemesterDropdown}
                setOpen={setOpenSemesterDropdown}
                value={selectedSemester}
                items={[
                  { label: 'Semester 1', value: 'Semester 1' },
                  { label: 'Semester 2', value: 'Semester 2' },
                ]}
                setValue={setSelectedSemester}
                placeholder="Select a Semester"
                style={styles.dropdown}
                dropDownContainerStyle={{ borderWidth: 2, borderColor: Colors.GRAY }}
                listMode="SCROLLVIEW"
              />
            </View>

            {/* Course Selection */}
            {selectedSemester && (
              <View style={styles.coursesContainer}>
                <Text style={styles.label}>Select Courses:</Text>
                {coursesData[selectedSemester]?.map((course, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleCourseSelect(course)}
                    style={[
                      styles.courseItem,
                      selectedCourses.includes(course.name) && styles.selectedCourse,
                    ]}
                  >
                    <Text style={styles.courseText}>
                      {selectedCourses.includes(course.name) ? (
                        <AntDesign name="checkcircleo" size={20} color="black" />
                      ) : (
                        <AntDesign name="pluscircleo" size={20} color="gray" />
                      )}{' '}
                      {course.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Results */}
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                Number of Courses: {selectedCourses.length}
              </Text>
              <Text style={styles.resultText}>Total Tk: {calculateTotalTk()}</Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    padding: 10,
  },
  dropdown: {
    borderWidth: 2,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    padding: 10,
  },
  coursesContainer: {
    marginTop: 15,
  },
  courseItem: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCourse: {
    backgroundColor: Colors.LIGHT_GREEN,
  },
  courseText: {
    fontSize: 16,
    fontFamily: 'outfit-regular',
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
    backgroundColor: Colors.BLACK,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit-medium',
  },
});

export default Semester;
