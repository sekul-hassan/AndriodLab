import {FlatList, View,StyleSheet,Text} from "react-native";
import {AntDesign} from "@expo/vector-icons";


const NotificationList = () => {
    const notifications = [
        {
            "id": "1",
            "title": "1-1 Semester",
            "message": "Please wait for all the green signal",
            "date": "2024-10-25",
            "department": true,
            "hall": true,
            "Exam Office": true,
        },
        {
            "id": "2",
            "title": "1-2 Semester",
            "message": "Please wait for all the green signal",
            "date": "2024-10-25",
            "department": true,
            "hall": true,
            "Exam Office": true,
        },
        {
            "id": "3",
            "title": "Retake 1-2",
            "message": "Please wait for all the green signal",
            "date": "2024-10-25",
            "department": true,
            "hall": true,
            "Exam Office": true,
        },
        {
            "id": "4",
            "title": "Certificate",
            "message": "Please wait for all the green signal",
            "date": "2024-10-25",
            "department": true,
            "hall": true,
            "Exam Office": true,
        }
    ];



    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>Date: {item.date}</Text>
            <Text style={styles.type}>Department: {item.department ? <AntDesign name="checkcircle" size={15} color="green" /> : <AntDesign name="closecircle" size={15} color="red" />}</Text>
            <Text style={styles.type}>Hall: {item.hall ? <AntDesign name="checkcircle" size={15} color="green" /> : <AntDesign name="closecircle" size={15} color="red" />}</Text>
            <Text style={styles.type}>Register: {item.register ? <AntDesign name="checkcircle" size={15} color="green" /> : <AntDesign name="closecircle" size={15} color="red" />}</Text>
        </View>
    );

    return (
        <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

export default NotificationList;

const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle:'outfit-medium'
    },
    message: {
        fontSize: 14,
        marginVertical: 5,
        fontStyle:'outfit-medium'
    },
    date: {
        fontSize: 12,
        color: '#666',
        fontStyle:'outfit-medium'
    },
    type: {
        fontSize: 12,
        color: '#333',
        fontStyle:'outfit-medium'
    },
});
