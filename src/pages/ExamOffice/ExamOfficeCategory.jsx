import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';

import { Colors } from "../../assets/Colors";
import { TouchableOpacity } from 'react-native';
import img1 from '../../assets/Images/approved.png';
import img2 from '../../assets/Images/Hall.png';
import img3 from '../../assets/Images/Department.png';

import { useNavigation } from '@react-navigation/native';




const ExamOfficeCategory = () => {
   
  
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        <View>
            <View style={{
                padding: 10,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <Text style={{
                    paddingLeft: 3,
                    fontFamily: "outfit-bold",
                    color: Colors.BLACK,
                }}>Category</Text>
                <Text style={{ fontFamily: 'outfit-bold', color: Colors.BLACK, }}>View All</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                 
                 <TouchableOpacity onPress={()=>navigation.navigate('/approvallist')} >
                 <View style={styles.container} >
                        <Image style={styles.icon}  source={img1}  />
                </View>
                        <Text style={styles.text} >Approval List</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={()=>navigation.navigate('/accesshall')} >
                 <View  style={styles.container} >
                        <Image style={styles.icon} source={img2}  />
                </View>
                        <Text style={styles.text} >Hall</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('/accessdepartment')} >
                 <View style={styles.container} >
                        <Image style={styles.icon} source={img3}  />
                </View>
                        <Text style={styles.text}>Department</Text>
                 </TouchableOpacity>
            </View>
           
          </View>
    )
}

export default ExamOfficeCategory;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor:"#343434",
        borderRadius: 99,
        marginHorizontal: 15,
      
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    },
    text: {
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        marginTop: 5,
    },
});
