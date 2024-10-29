import React, {useEffect} from 'react';
import {View,Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Profile(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
       <View>
           <Text>Profile page</Text>
       </View>
    );
}

export default Profile;
