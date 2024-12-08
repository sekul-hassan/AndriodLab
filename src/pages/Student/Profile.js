import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../assets/Colors';
import {useNavigation} from "@react-navigation/native";
const ProfilePage = () => {


    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
  const user = {
    name: "John Doe",
    department: "Computer Science",
    session: "2022-2026",
    registration: "123456",
    role: "Student",
    profileImage: "https://via.placeholder.com/150", // Replace with an actual image URL
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logged out");
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      
      {/* Profile Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.details}>Department: {user.department}</Text>
        <Text style={styles.details}>Session: {user.session}</Text>
        <Text style={styles.details}>Registration: {user.registration}</Text>
        <Text style={styles.details}>Role: {user.role}</Text>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
        <AntDesign name="logout" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: Colors.GRAY,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'center',
    fontFamily:'outfit-medium'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
   fontFamily:'outfit-bold'
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontFamily:'outfit-medium'
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
});
