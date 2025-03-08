import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="phone" size={28} color="#fff"/>
                <Text style={styles.headerText}>Contact Us</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Support Team</Text>
                <Text style={styles.info}>Email: cpdevsupport@example.com</Text>
                <Text style={styles.info}>Phone: +1 234 567 890</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ff9800',
        padding: 15,
        borderRadius: 10,
        elevation: 3,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    button: {
        marginTop: 15,
        backgroundColor: '#ff9800',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});