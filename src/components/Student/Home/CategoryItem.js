import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../../assets/Colors';

const CategoryItem = ({ category, onCategoryPress }) => {
    return (
        <TouchableOpacity onPress={() => onCategoryPress(category)}>
            <View style={styles.container}>
                <Image
                    source={{ uri: category.iconURL }}
                    style={styles.icon}
                    onError={() => {
                    }}
                />
            </View>
            <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.SKY,
        borderRadius: 99,
        marginHorizontal: 10,
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

CategoryItem.propTypes = {
    category: PropTypes.shape({
        iconURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onCategoryPress: PropTypes.func.isRequired,
};

export default CategoryItem;
