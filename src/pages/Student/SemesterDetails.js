
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Colors } from '../../assets/Colors';
import { TouchableOpacity } from 'react-native';

const SemesterDetails = ({ route }) => {
  const { semester } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const renderCourseRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.courseId}</Text>
      <Text style={styles.cell}>{item.courseName}</Text>
      <Text style={styles.cell}>{item.courseCredit}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Semester: ${semester.semesterNumber}`}</Text>
      <Text style={styles.credits}>{`Credits: ${semester.credit}`}</Text>
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>Course ID</Text>
          <Text style={[styles.cell, styles.headerText]}>Course Name</Text>
          <Text style={[styles.cell, styles.headerText]}>Credits</Text>
        </View>
        {/* Course List */}
        <FlatList
          data={semester.semesterCourses}
          renderItem={renderCourseRow}
          keyExtractor={(item) => item.courseId.toString()}
        />
      </View>
      <View>
         <Text>Enroll This Semester :420TK</Text>
         <TouchableOpacity>Checkout</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop:40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  credits: {
    fontSize: 18,
    marginBottom: 20,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    backgroundColor: Colors.SKY,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default SemesterDetails;

