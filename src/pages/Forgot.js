import React,{useState,useEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {useRouter} from "expo-router";
import {ActivityIndicator, TextInput, TouchableOpacity, View,StyleSheet,Text} from "react-native";
import {Colors} from "../assets/Colors";

const Forgot = () => {

    const [password,setPassword]= useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown : false
        })
    },[])

    const handelResetemail = () =>{
        setLoading(true);
        // sendPasswordResetEmail(auth, email)
        //     .then(() => {
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //
        //         const errorMessage = error.message;
        //         console.log(errorMessage);
        //         setLoading(false);
        //     });
    }

    return (
        <View style={{padding:30,marginTop:60,
            backgroundColor: Colors.WHITE,
            height:'100%',
            paddingTop:80,
        }} >
            <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:30,

                }}
            >Let's Forgot Password </Text>
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
            >You've been Missed </Text>

            <View style={{
                marginTop:50,

            }} >
                <Text style={{
                    fontFamily:'outfit-medium',
                    marginVertical:2,
                }} >Enter Email Address </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Please Enter Email Address '
                    onChangeText={(text)=>setEmail(text)}
                />
            </View>

            <TouchableOpacity
                onPress={handelResetemail}
                style={{
                    padding:18,
                    backgroundColor:Colors.BLACK,
                    borderRadius:10,
                    marginTop:20,
                }}  >
                {
                    loading ? <>
                        <ActivityIndicator size="small" color={Colors.WHITE} style={styles.loading} />
                    </> : <>
                        <Text style={{
                            color:Colors.WHITE,
                            fontFamily:'outfit-medium',
                            textAlign:'center',
                        }} > Submit </Text>
                    </>
                }
            </TouchableOpacity>




        </View>
    )
};

export default Forgot;

const styles = StyleSheet.create({

    input:{
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        padding:15,
        borderColor:Colors.GRAY,
    }
})