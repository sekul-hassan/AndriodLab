import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert } from 'react-native';


const data = [
  { id: '1', name: 'John Doe', department: 'Computer Science', regRoll: 'CS101', examRoll: 'EX101', subject: 'Math', date: '2024-11-16' },
  { id: '2', name: 'Jane Smith', department: 'Physics', regRoll: 'PH102', examRoll: 'EX102', subject: 'Physics', date: '2024-11-16' },
  { id: '3', name: 'Michael Johnson', department: 'Chemistry', regRoll: 'CH103', examRoll: 'EX103', subject: 'Chemistry', date: '2024-11-16' },
  { id: '4', name: 'Emily Davis', department: 'Biology', regRoll: 'BI104', examRoll: 'EX104', subject: 'Biology', date: '2024-11-16' },
  { id: '5', name: 'Chris Lee', department: 'Computer Science', regRoll: 'CS105', examRoll: 'EX105', subject: 'Programming', date: '2024-11-16' },
  { id: '6', name: 'Sarah Wilson', department: 'Mathematics', regRoll: 'MA106', examRoll: 'EX106', subject: 'Calculus', date: '2024-11-16' },
  { id: '7', name: 'David Brown', department: 'Physics', regRoll: 'PH107', examRoll: 'EX107', subject: 'Mechanics', date: '2024-11-16' },
  { id: '8', name: 'Sophia Green', department: 'Chemistry', regRoll: 'CH108', examRoll: 'EX108', subject: 'Organic Chemistry', date: '2024-11-16' },
  { id: '9', name: 'Daniel Hall', department: 'Computer Science', regRoll: 'CS109', examRoll: 'EX109', subject: 'Data Structures', date: '2024-11-16' },
  { id: '10', name: 'Olivia Adams', department: 'Biology', regRoll: 'BI110', examRoll: 'EX110', subject: 'Genetics', date: '2024-11-16' },
  { id: '11', name: 'James White', department: 'Mathematics', regRoll: 'MA111', examRoll: 'EX111', subject: 'Linear Algebra', date: '2024-11-16' },
  { id: '12', name: 'Ava Martin', department: 'Physics', regRoll: 'PH112', examRoll: 'EX112', subject: 'Thermodynamics', date: '2024-11-16' },
  { id: '13', name: 'William Lee', department: 'Computer Science', regRoll: 'CS113', examRoll: 'EX113', subject: 'Algorithms', date: '2024-11-16' },
  { id: '14', name: 'Isabella Taylor', department: 'Chemistry', regRoll: 'CH114', examRoll: 'EX114', subject: 'Physical Chemistry', date: '2024-11-16' },
  { id: '15', name: 'Lucas Harris', department: 'Biology', regRoll: 'BI115', examRoll: 'EX115', subject: 'Ecology', date: '2024-11-16' },
  { id: '16', name: 'Mia Clark', department: 'Mathematics', regRoll: 'MA116', examRoll: 'EX116', subject: 'Differential Equations', date: '2024-11-16' },
  { id: '17', name: 'Benjamin Allen', department: 'Physics', regRoll: 'PH117', examRoll: 'EX117', subject: 'Electromagnetism', date: '2024-11-16' },
  { id: '18', name: 'Amelia Young', department: 'Computer Science', regRoll: 'CS118', examRoll: 'EX118', subject: 'Operating Systems', date: '2024-11-16' },
  { id: '19', name: 'Henry King', department: 'Chemistry', regRoll: 'CH119', examRoll: 'EX119', subject: 'Inorganic Chemistry', date: '2024-11-16' },
  { id: '20', name: 'Charlotte Scott', department: 'Biology', regRoll: 'BI120', examRoll: 'EX120', subject: 'Microbiology', date: '2024-11-16' },
];

const ApprovalList = () => {

 
  const [approvedData, setApprovedData] = useState(data);

  const handleApprovalClick = (id) => {
    const updatedData = approvedData.map((item) => {
      if (item.id === id) {
        return { ...item, isApproved: !item.isApproved }; 
      }
      return item;
    });
    setApprovedData(updatedData);
  };

 
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.detail}>Department: {item.department}</Text>
        <Text style={styles.detail}>Registration Roll: {item.regRoll}</Text>
        <Text style={styles.detail}>Exam Roll: {item.examRoll}</Text>
        <Text style={styles.detail}>Subject: {item.subject}</Text>
        <Text style={styles.detail}>Date: {item.date}</Text>

      
        <Button
          title={item.isApproved ? 'Approved' : 'Approve'}
          onPress={() => handleApprovalClick(item.id)}
          color={item.isApproved ? 'green' : 'blue'}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={approvedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
    paddingHorizontal:10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});

export default ApprovalList;