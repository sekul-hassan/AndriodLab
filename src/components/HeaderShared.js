import {View,StyleSheet,Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "../assets/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeaderShared = ({name}) => {

   
    return (
        <View style={{
            padding:20,
            backgroundColor: Colors.BLACK,
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
        }} >
            <View style={{
                marginTop:20,
            }} >
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:25,
                    textAlign:'center',
                    color:Colors.WHITE,
                }} >{name}</Text>
            </View>


        </View>
    )
};

export default HeaderShared;

const styles = StyleSheet.create({})