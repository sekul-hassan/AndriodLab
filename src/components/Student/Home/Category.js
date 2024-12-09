import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';

import { Colors } from "../../../assets/Colors";
import { TouchableOpacity } from 'react-native';
import img1 from '../../../assets/Images/Semester.png';
import img2 from '../../../assets/Images/Certificate.png';
import img3 from '../../../assets/Images/RetakeExam.png';
import img4 from '../../../assets/Images/ExamShedule.png';
import img5 from '../../../assets/Images/Result.png';
import { useNavigation } from '@react-navigation/native';




const Category = () => {
   
  
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
                 
                 <TouchableOpacity onPress={()=>navigation.navigate('/semester')} >
                 <View style={styles.container} >
                        <Image style={styles.icon}  source={img1}  />
                </View>
                        <Text style={styles.text} >Semester</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={()=>navigation.navigate('/certificate')} >
                 <View  style={styles.container} >
                        <Image style={styles.icon} source={img2}  />
                </View>
                        <Text style={styles.text} >Certificate</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('/retakeexam')} >
                 <View style={styles.container} >
                        <Image style={styles.icon} source={img3}  />
                </View>
                        <Text style={styles.text}>Retake Exam</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('/examschedule')} > 
                 <View style={styles.container} >
                        <Image style={styles.icon} source={img4}  />
                </View>
                        <Text style={styles.text} >Exam Schedule</Text>
        </TouchableOpacity>
                 
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 6 }}  >
         
                 <TouchableOpacity style={{marginVertical:5}} >
                 <View style={styles.container} >
                        <Image style={styles.icon} source={img5}  />
                </View>
                        <Text style={styles.text} >Result</Text>
                 </TouchableOpacity>
            </View>
          </View>
    )
}

export default Category;

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
