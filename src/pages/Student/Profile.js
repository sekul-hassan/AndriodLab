import React, { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../assets/Colors";

const ProfilePage = () => {
    const handleEditProfile = () => {
        console.log("Edit Profile clicked");
        // Add navigation or logic here
    };

    const handleLogout = () => {
        console.log("Logout clicked");
        // Add logout logic here
    };

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Student Profile</Text>
            </View>

            {/* Profile Picture Section */}
            <View style={styles.profilePictureContainer}>
                <Image
                    source={{
                        uri: "https://i.ibb.co.com/nQLTdhg/338154408-611598800469863-2721269395873222215-n.jpg", // Replace with actual image URL
                    }}
                    style={styles.profilePicture}
                />
            </View>

            {/* Input Fields with Icons */}
            <View style={styles.inputContainer}>
                {/* Name Field */}
                <View style={styles.fieldContainer}>
                    <Feather name="user" size={20} color="#555" style={styles.fieldIcon} />
                    <Text style={styles.fieldText}>NAME  TOUFIK HASAN LABIB</Text>
                </View>

                {/* Email Field */}
                <View style={styles.fieldContainer}>
                    <Feather name="mail" size={20} color="#555" style={styles.fieldIcon} />
                    <Text style={styles.fieldText}>EMAIL  labib.stu2019@juniv.edu</Text>
                </View>

                {/* Session Field */}
                <View style={styles.fieldContainer}>
                    <Feather name="calendar" size={20} color="#555" style={styles.fieldIcon} />
                    <Text style={styles.fieldText}>SESSION  2019-2020</Text>
                </View>

                {/* Roll Field */}
                <View style={styles.fieldContainer}>
                    <Feather name="hash" size={20} color="#555" style={styles.fieldIcon} />
                    <Text style={styles.fieldText}>ROLL  202201</Text>
                </View>

                {/* Registration Field */}
                <View style={styles.fieldContainer}>
                    <Feather name="clipboard" size={20} color="#555" style={styles.fieldIcon} />
                    <Text style={styles.fieldText}>REGISTRATION  202201</Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={handleEditProfile}>
                    <Feather name="edit" size={18} color="#fff" />
                    <Text style={styles.actionText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.actionButton, styles.logoutButton]}
                    onPress={handleLogout}
                >
                    <Feather name="log-out" size={18} color="black" />
                    <Text style={[styles.actionText, { color: Colors.BLACK }]}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f9f9f9",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",  // Center horizontally
        alignItems: "center",      // Center vertically
        backgroundColor: Colors.BLACK,
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 150,
        
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        fontSize:30,
    },
    profilePictureContainer: {
        alignItems: "center",
        marginTop: -40,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: Colors.WHITE,
    },
    inputContainer: {
        padding: 20,
    },
    fieldContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
    },
    fieldIcon: {
        marginRight: 10,
    },
    fieldText: {
        fontSize: 16,
        color: "#333",
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 10,
        flex: 0.48,
    },
    logoutButton: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: Colors.BLACK,
    },
    actionText: {
        marginLeft: 8,
        fontSize: 14,
        color: Colors.WHITE,
        fontWeight: "bold",
    },
});
