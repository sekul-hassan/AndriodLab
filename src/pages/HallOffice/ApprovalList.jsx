import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert } from 'react-native';


const data = [
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '4-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '3-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '3-2', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '2-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '2-2', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '1-1', date: '2024-11-16' },
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
        <Text style={styles.detail}>Registration No: {item.regRoll}</Text>
        <Text style={styles.detail}>Exam Roll: {item.examRoll}</Text>
        <Text style={styles.detail}>Subject: {item.semester}</Text>
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