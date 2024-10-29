import {FlatList, View,StyleSheet,Text} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TransactionList = () => {



    // const user = auth.currentUser;

    const transaction = [
        {
            "id": "1",
            "amount": 150.00,
            "date": "2024-10-26",
            "type": "credit",
            "description": "Salary payment"
        },
        {
            "id": "2",
            "amount": 50.00,
            "date": "2024-10-26",
            "type": "debit",
            "description": "Grocery shopping"
        },
        {
            "id": "3",
            "amount": 200.00,
            "date": "2024-10-25",
            "type": "credit",
            "description": "Freelance project"
        },
        {
            "id": "4",
            "amount": 30.00,
            "date": "2024-10-25",
            "type": "debit",
            "description": "Transport fare"
        },

    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <FontAwesome name="user" size={50} color="black"  />
            <View >
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>Date: {item.date}</Text>
                <Text style={styles.type}>Type: {item.type}</Text>
            </View>
            <Text style={styles.amount}>Amount: ${item.amount.toFixed(2)}</Text>
        </View>
    );

    return (
        <FlatList
            data={transaction}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.list}
        />
    );
};

export default TransactionList;

const styles = StyleSheet.create({
    header: {
        fontFamily: 'outfit-medium',
        fontSize: 15,
        padding: 10,
    },
    list: {
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,

        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'outfit-medium'
    },
    amount: {
        fontSize: 14,
        fontFamily:'outfit-medium'
    },
    date: {
        fontSize: 14,
        color: '#666',
        fontFamily:'outfit-medium'
    },
    type: {
        fontSize: 14,
        color: '#888',
        fontFamily:'outfit-medium'
    },
});
