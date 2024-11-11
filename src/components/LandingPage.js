import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import {Colors} from "../assets/Colors";
import {useNavigation} from "@react-navigation/native";

function LandingPage(props) {

    useEffect(()=>{
        navigation.setOptions({
            headerShown : false
        })
    },[])

    const navigation = useNavigation();

    return (
        <View>
            <Image
                source={require("../assets/Images/Ai4.jpg")}
                style={{
                    width: "100%",
                    height: 500,
                }}
            />

            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 25,
                        fontFamily: 'outfit-medium',
                        textAlign: 'center',
                        padding: 20,
                    }}
                >
                    JU Administration
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: 'outfit-regular',
                        color: Colors.BLACK,
                        padding: 10,
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi sunt consequatur necessitatibus iusto mollitia natus eligendi aliquid numquam maxime?
                </Text>

                <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("/signin")}  >
                    <Text style={styles.btnFormat}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.BLACK,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'15%',
        margin:15,
    },
    btnFormat: {
        color: Colors.WHITE,
        fontSize: 17,
        fontFamily:'outfit-medium'
    },
})

export default LandingPage;

