import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../../assets/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode"; // Fixed incorrect import name

const ExamHeader = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchName = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                console.log("Token fetched:", token); // Check if token is fetched
                if (token) {
                    const decoded = jwtDecode(token);
                    console.log(decoded);
                    const { user } = decoded;
                    setName(user.name || "Guest");
                } else {
                    console.log("Token not found");
                    setName("Guest"); // Default to "Guest" if token is not found
                }
            } catch (error) {
                console.error("Failed to fetch token from AsyncStorage:", error);
            }
        };
        fetchName();
    }, []);

    return (
        <View style={styles.headerContainer}>
            {/* Top Row */}
            <View style={styles.topRow}>
                <FontAwesome name="user" size={50} color="white" style={styles.userIcon} />
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
                <View style={styles.notificationIconContainer}>
                    <Ionicons name="notifications-sharp" size={35} color="white" />
                </View>
            </View>

            {/* Title Row */}
            <View style={styles.titleRow}>
                <Text style={styles.examOfficeTitle}>Exam Office</Text>
            </View>
        </View>
    );
};

export default ExamHeader;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: Colors.BLACK,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userIcon: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    welcomeText: {
        fontSize: 14,
        fontFamily: "outfit-bold",
        color: "white",
    },
    nameText: {
        fontSize: 19,
        fontFamily: "outfit-bold",
        color: "white",
    },
    notificationIconContainer: {
        alignItems: "flex-end",
        flex: 1,
    },
    titleRow: {
        marginTop: 15,
        alignItems: "center",
    },
    examOfficeTitle: {
        fontSize: 24,
        fontFamily: "outfit-bold",
        color: "white",
        textAlign: "center",
    },
});
