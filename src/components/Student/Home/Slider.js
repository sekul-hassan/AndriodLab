import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Slider = () => {
    const banner = [
        {
            id: "1",
            iconURL: "https://i.ibb.co/JqGzYp1/image1.jpg"
        },
        {
            id: "2",
            iconURL: "https://i.ibb.co/4fL6WrL/image2.jpg"
        },
        {
            id: "3",
            iconURL: "https://i.ibb.co/zR4pLQt/image3.jpg"
        },
        {
            id: "4",
            iconURL: "https://i.ibb.co/bKbfc23/image4.jpg"
        },
    ];

    return (
        <View>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 16,
                padding: 10,
                fontWeight:20,
            }}>
                Our University
            </Text>

            <FlatList
                data={banner}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ padding: 10 }}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.iconURL }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300, 
        height: 160, 
        borderRadius: 15,
        marginRight: 10, 
    },
});

export default Slider;
