import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Colors } from '../../assets/Colors';

const semesters =  [
    {
      "id": 1,
      "semesterNumber": "1-1",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE101",
          "courseName": "Introduction to Programming",
          "courseCredit": 3
        },
        {
          "courseId": "MTH101",
          "courseName": "Calculus I",
          "courseCredit": 4
        },
        {
          "courseId": "PHY101",
          "courseName": "Physics I",
          "courseCredit": 3
        },
        {
          "courseId": "ENG101",
          "courseName": "English Composition",
          "courseCredit": 2
        },
        {
          "courseId": "CHEM101",
          "courseName": "Chemistry I",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 2,
      "semesterNumber":"1-2",
      "credit": 18,
      "semesterCourses": [
        {
          "courseId": "CSE102",
          "courseName": "Data Structures",
          "courseCredit": 4
        },
        {
          "courseId": "MTH102",
          "courseName": "Calculus II",
          "courseCredit": 4
        },
        {
          "courseId": "PHY102",
          "courseName": "Physics II",
          "courseCredit": 4
        },
        {
          "courseId": "ENG102",
          "courseName": "Technical Writing",
          "courseCredit": 3
        },
        {
          "courseId": "SOC101",
          "courseName": "Introduction to Sociology",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 3,
      "semesterNumber": "2-1",
      "credit": 17,
      "semesterCourses": [
        {
          "courseId": "CSE201",
          "courseName": "Algorithms",
          "courseCredit": 4
        },
        {
          "courseId": "MTH201",
          "courseName": "Linear Algebra",
          "courseCredit": 3
        },
        {
          "courseId": "PHY201",
          "courseName": "Electromagnetism",
          "courseCredit": 3
        },
        {
          "courseId": "CHEM201",
          "courseName": "Organic Chemistry",
          "courseCredit": 4
        },
        {
          "courseId": "HUM101",
          "courseName": "Ethics",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 4,
      "semesterNumber": "2-2",
      "credit": 16,
      "semesterCourses": [
        {
          "courseId": "CSE202",
          "courseName": "Database Systems",
          "courseCredit": 4
        },
        {
          "courseId": "MTH202",
          "courseName": "Probability and Statistics",
          "courseCredit": 4
        },
        {
          "courseId": "ENG201",
          "courseName": "Advanced Composition",
          "courseCredit": 3
        },
        {
          "courseId": "BIO101",
          "courseName": "Biology",
          "courseCredit": 3
        },
        {
          "courseId": "ART101",
          "courseName": "Art Appreciation",
          "courseCredit": 2
        }
      ]
    },
    {
      "id": 5,
      "semesterNumber": "3-1",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE301",
          "courseName": "Operating Systems",
          "courseCredit": 4
        },
        {
          "courseId": "MTH301",
          "courseName": "Discrete Mathematics",
          "courseCredit": 4
        },
        {
          "courseId": "PHY301",
          "courseName": "Quantum Mechanics",
          "courseCredit": 3
        },
        {
          "courseId": "HIS101",
          "courseName": "World History",
          "courseCredit": 2
        },
        {
          "courseId": "ECO101",
          "courseName": "Economics",
          "courseCredit": 2
        }
      ]
    },
    {
      "id": 6,
      "semesterNumber": "3-2",
      "credit": 18,
      "semesterCourses": [
        {
          "courseId": "CSE302",
          "courseName": "Computer Networks",
          "courseCredit": 4
        },
        {
          "courseId": "MTH302",
          "courseName": "Numerical Analysis",
          "courseCredit": 4
        },
        {
          "courseId": "ENG301",
          "courseName": "Professional Communication",
          "courseCredit": 3
        },
        {
          "courseId": "PSY101",
          "courseName": "Psychology",
          "courseCredit": 3
        },
        {
          "courseId": "SOC102",
          "courseName": "Social Psychology",
          "courseCredit": 4
        }
      ]
    },
    {
      "id": 7,
      "semesterNumber": "4-1",
      "credit": 17,
      "semesterCourses": [
        {
          "courseId": "CSE401",
          "courseName": "Machine Learning",
          "courseCredit": 4
        },
        {
          "courseId": "MTH401",
          "courseName": "Optimization",
          "courseCredit": 4
        },
        {
          "courseId": "PHY401",
          "courseName": "Thermodynamics",
          "courseCredit": 3
        },
        {
          "courseId": "HUM201",
          "courseName": "Philosophy",
          "courseCredit": 3
        },
        {
          "courseId": "CHEM301",
          "courseName": "Inorganic Chemistry",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 8,
      "semesterNumber": "4-2",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE402",
          "courseName": "Software Engineering",
          "courseCredit": 4
        },
        {
          "courseId": "MTH402",
          "courseName": "Complex Analysis",
          "courseCredit": 4
        },
        {
          "courseId": "PHY402",
          "courseName": "Nuclear Physics",
          "courseCredit": 3
        },
        {
          "courseId": "HIS102",
          "courseName": "Modern History",
          "courseCredit": 2
        },
        {
          "courseId": "ECO201",
          "courseName": "Advanced Economics",
          "courseCredit": 2
        }
      ]
    }
  ]

  const Semester = () => {
    useEffect(()=>{
        navigation.setOptions({
            headerShown : false
        })
    },[])

    
    const navigation = useNavigation();

    const renderSemester = ({ item }) => (
      <TouchableOpacity
        style={styles.semesterItem}
        onPress={() => navigation.navigate('/semesterDetails', {semester : item})}
      >
       <View >
        <Text style={styles.semesterText} >Semester :{item.semesterNumber}</Text>
        <Text style={styles.semesterText} >Credit: {item.credit}</Text>
      
       </View>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Labib all semester</Text>
        <FlatList
          data={semesters}
          renderItem={renderSemester}
          keyExtractor={item => item.id.toString()}
        />
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
    marginBottom: 20,
  },
  semesterItem: {
    padding: 15,
    backgroundColor: Colors.SKY,
    borderRadius: 5,
    marginVertical: 5,
  },
  semesterText: {
    fontSize: 16,
  },
  courseContainer: {
    marginTop: 20,
  },
  courseHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseText: {
    fontSize: 16,
  },
});

export default Semester;
