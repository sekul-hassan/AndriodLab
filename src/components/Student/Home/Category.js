import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import CategoryItem from "./CategoryItem";
import {Colors} from "../../../assets/Colors";

const categories = [
    {
        "id": "1",
        "name": "Semester",
        "Router":"Semester",
        "iconURL": "https://cdn-icons-png.flaticon.com/128/3356/3356388.png"
    },
    {
        "id": "2",
        "name": "Certificate",
        "Router":"Certificate",
        "iconURL": "https://cdn-icons-png.flaticon.com/128/3000/3000777.png"
    },
    {
        "id": "3",
        "name": "Retake Exam ",
        "Router":"RetakeExam",
        "iconURL": "https://cdn-icons-png.flaticon.com/128/207/207190.png"
    },
    {
        "id": "4",
        "name": "Exam Shedule",
        "Router":"ExamShedule",
        "iconURL": "https://cdn-icons-png.flaticon.com/128/15138/15138148.png"
    },
    {
        "id": "5",
        "name": "Result",
        "Router":"Result",
        "iconURL": "https://cdn-icons-png.flaticon.com/128/13868/13868235.png"
    },

];



const Category = () => {

    const router = useRouter();
    return (
        <View>
            <View style={{
                padding:10,
                display: 'flex',
                justifyContent:'space-between',
                flexDirection:'row',
            }} >
                <Text style={{
                    paddingLeft:3,
                    fontFamily:"outfit-medium",
                    color:Colors.SKY,

                }}>Category</Text>
                <Text style={{fontFamily:'outfit-medium', color:Colors.SKY,}} >View All</Text>
            </View>


            <FlatList
                horizontal={true}
                data={categories}
                style={{marginLeft:3}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(

                    <CategoryItem key={index} category={item} onCategoryPress={(category)=>router.push('StudentRole/'+item.Router) }  />

                )}
            />


        </View>
    )
}

export default Category;

const styles = StyleSheet.create({})