import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

function Footer(props) {
    return (
        <ScrollView style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Recursive Education. All rights reserved.</Text>
            <Text style={styles.footerText}>Empowering Learners Through Innovation.</Text>
        </ScrollView>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#2c3e50',
        width: '100%',
        padding:4
    },
    footerText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});
