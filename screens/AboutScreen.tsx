import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="food" size={28} color="#fff"/>
                <Text style={styles.headerText}>About Us</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Who We Are</Text>
                <Text style={styles.info}>
                    We are a passionate team committed to connecting people with their favorite meals effortlessly. 
                    With a vast network of restaurants and a user-friendly app, we bring delicious food straight to your door.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Our Mission</Text>
                <Text style={styles.info}>
                    Our mission is to deliver happiness, one meal at a time. We strive to offer a seamless and reliable 
                    food delivery experience, ensuring fresh and tasty dishes reach you quickly.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Why Choose Us</Text>
                <Text style={styles.info}>
                    - Wide variety of restaurants and cuisines.{"\n"}
                    - Real-time order tracking.{"\n"}
                    - Exclusive deals and discounts.
                </Text>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginBottom: 15,
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
        lineHeight: 22,
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
