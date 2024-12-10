import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '4-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '3-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '3-2', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '2-1', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '2-2', date: '2024-11-16' },
  { id: '1', name: 'SEKUL', department: 'Computer Science and Engineering', regRoll: '20200650753', examRoll: '202195', semester: '1-1', date: '2024-11-16' },
];

const ApprovalList = () => {


  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
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

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Department: {item.department}</Text>
      <Text style={styles.detail}>Registration Roll: {item.regRoll}</Text>
      <Text style={styles.detail}>Exam Roll: {item.examRoll}</Text>
      <Text style={styles.detail}>Subject: {item.semester}</Text>
      <Text style={styles.detail}>Date: {item.date}</Text>

      <TouchableOpacity
        style={[
          styles.button,
          item.isApproved ? styles.approvedButton : styles.defaultButton,
        ]}
        onPress={() => handleApprovalClick(item.id)}
      >
        <Text
          style={[
            styles.buttonText,
            item.isApproved ? styles.approvedButtonText : styles.defaultButtonText,
          ]}
        >
          {item.isApproved ? 'Approved' : 'Approve'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    
    <View style={styles.container}>

      <FlatList
        data={approvedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: '#000', // Black color for unapproved state
  },
  approvedButton: {
    backgroundColor: '#4CAF50', // Green color for approved state
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  defaultButtonText: {
    color: '#fff',
  },
  approvedButtonText: {
    color: '#fff',
  },
});

export default ApprovalList;
