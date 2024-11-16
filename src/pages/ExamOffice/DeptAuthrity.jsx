import React from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert } from 'react-native';

// Sample data with names and emails
const data = [
  { id: '1', name: 'John Doe', email: 'johndoe@example.com' },
  { id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com' },
  { id: '5', name: 'Chris Lee', email: 'chris.lee@example.com' },
  { id: '6', name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
  { id: '7', name: 'David Brown', email: 'david.brown@example.com' },
  { id: '8', name: 'Sophia Green', email: 'sophia.green@example.com' },
  { id: '9', name: 'Daniel Hall', email: 'daniel.hall@example.com' },
  { id: '10', name: 'Olivia Adams', email: 'olivia.adams@example.com' },
  { id: '11', name: 'James White', email: 'james.white@example.com' },
  { id: '12', name: 'Ava Martin', email: 'ava.martin@example.com' },
  { id: '13', name: 'William Lee', email: 'william.lee@example.com' },
  { id: '14', name: 'Isabella Taylor', email: 'isabella.taylor@example.com' },
  { id: '15', name: 'Lucas Harris', email: 'lucas.harris@example.com' },
  { id: '16', name: 'Mia Clark', email: 'mia.clark@example.com' },
  { id: '17', name: 'Benjamin Allen', email: 'benjamin.allen@example.com' },
  { id: '18', name: 'Amelia Young', email: 'amelia.young@example.com' },
  { id: '19', name: 'Henry King', email: 'henry.king@example.com' },
  { id: '20', name: 'Charlotte Scott', email: 'charlotte.scott@example.com' },
];

const DeptAuthrity = () => {

  // Function to handle button click
  const handleButtonClick = (name, email) => {
    Alert.alert(`Button clicked`, `Name: ${name}\nEmail: ${email}`);
  };

  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Button
          title={item.isAdmin ? 'Admin' : 'Admin'}
          onPress={() => handleButtonClick(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
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
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});

export default DeptAuthrity;
