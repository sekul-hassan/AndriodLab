import React,{useState,useEffect, useContext} from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator} from "react-native";
import {Colors} from "../assets/Colors";
import {useNavigation} from "@react-navigation/native";
import {useRouter} from "expo-router";
import { FirebaseContext } from '../../Context/AuthProvider';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignIn(props) {


    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [user,setUser] = useState(null);
    const navigation = useNavigation();
    const {login,loading ,setLoading} = useContext(FirebaseContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown : false
        })
    },[])

    const handelLogin = () => {
        axios.post("http://192.168.137.1:5000/api/user/login", { email, password })
            .then((res) => {
                const { token } = res.data; // Extract token from response
                console.log("Response:", res.data);
                console.log(token);
                console.log(token.user);
                AsyncStorage.setItem("token", token)
                    .then(() => {
                        // Proceed with further logic after storing the token
                        login(email, password)
                            .then((userCredential) => {
                                setEmail('');
                                setPassword('');
                                setLoading(false);
                                navigation.navigate("/tab-layout");
                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                setLoading(false);
                            });
                    })
                    .catch((error) => {
                        console.error("Error storing token:", error);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false);
                console.log(errorMessage);
            });
    };



    return (
        <ScrollView style={{padding:30,
            backgroundColor: Colors.WHITE,
            height:'100%',
            paddingTop:80,
        }} >
            <View >
                <Text
                    style={{
                        fontFamily:'outfit-bold',
                        fontSize:30,

                    }}
                >Let's Sign You In </Text>
                <Text
                    style={{
                        fontFamily:'outfit-regular',
                        fontSize:30,
                    }}
                >Welcome back  </Text>
                <Text
                    style={{
                        fontFamily:'outfit-bold',
                        fontSize:30,
                        marginTop:10,
                    }}
                >You've been Missed  </Text>

                <View style={{
                    marginTop:50,

                }} >
                    <Text style={{
                        fontFamily:'outfit-medium',
                        marginVertical:2,
                    }} >Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Name'
                        onChangeText={(text)=>setEmail(text)}
                    />
                </View>
                {/* password */}
                <View style={{
                    marginTop:20,

                }} >
                    <Text style={{
                        fontFamily:'outfit-medium',
                        marginVertical:2,
                    }} >Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder='Enter Your Password'
                        onChangeText={(text)=>setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                 
                    onPress={handelLogin}
                    style={{
                        padding:18,
                        backgroundColor:Colors.BLACK,
                        borderRadius:10,
                        marginTop:40,
                    }}  >
                    {
                        loading ? <>
                            <ActivityIndicator size="small" color={Colors.WHITE} style={styles.loading} />
                        </> : <>
                            <Text style={{
                                color:Colors.WHITE,
                                fontFamily:'outfit-medium',
                                textAlign:'center',
                            }} >Sign In </Text>
                        </>
                    }
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={()=>navigation.navigate("/forgot")}
                    style={{
                        padding:18,
                        borderColor:Colors.BLACK,
                        borderRadius:10,
                        marginTop:20,
                        borderWidth:2,
                        paddingLeft:10,
                    }}  >
                    <Text style={{
                        color:Colors.BLACK,
                        fontFamily:'outfit-medium',
                        textAlign:'center',
                    }} > Forgot Password</Text>
                </TouchableOpacity >

                <TouchableOpacity  onPress={()=>navigation.navigate("/signup")}
                                   style={{
                                       padding:18,
                                       borderColor:Colors.BLACK,
                                       marginTop:20,
                                       borderRadius:10,
                                       borderWidth:2,
                                       paddingLeft:10,
                                   }}  >
                    <Text style={{
                        color:Colors.BLACK,
                        fontFamily:'outfit-medium',
                        textAlign:'center',
                    }} >Create new account </Text>
                </TouchableOpacity >

            </View>
        </ScrollView>
    )
};

export default SignIn;

const styles = StyleSheet.create({

    input:{
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        padding:15,
        borderColor:Colors.GRAY,
    }
})