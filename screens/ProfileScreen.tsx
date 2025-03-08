import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Profile Picture */}
            <View style={styles.avatarContainer}>
                <Image source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} style={styles.avatar}/>
                <TouchableOpacity style={styles.editIcon}>
                    <Ionicons name="camera" size={20} color="#fff"/>
                </TouchableOpacity>
            </View>

            {/* User Info */}
            <Text style={styles.name}>Zinkal Navadiya</Text>
            <Text style={styles.email}>zinkal12345@example.com</Text>

            {/* Address */}
            <View style={styles.infoRow}>
                <Ionicons name="location-outline" size={20} color="#FF5733"/>
                <Text style={styles.infoText}>123 Food Street, New York, USA</Text>
            </View>

            {/* Phone Number */}
            <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={20} color="#FF5733"/>
                <Text style={styles.infoText}>+1 (123) 456-7890</Text>
            </View>

            {/* Edit Profile Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', padding: 20},
    avatarContainer: {position: 'relative', marginBottom: 15},
    avatar: {width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#FF5733'},
    editIcon: {position: 'absolute', bottom: 5, right: 5, backgroundColor: '#FF5733', padding: 5, borderRadius: 20},
    name: {fontSize: 22, fontWeight: 'bold', color: '#333'},
    email: {fontSize: 16, color: '#666', marginBottom: 15},
    infoRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
    infoText: {fontSize: 16, marginLeft: 10, color: '#444'},
    button: {backgroundColor: '#FF5733', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, marginTop: 20},
    buttonText: {fontSize: 16, color: '#fff', fontWeight: 'bold'},
    logoutButton: {marginTop: 20},
    logoutText: {fontSize: 16, color: '#FF5733', fontWeight: 'bold'},
});