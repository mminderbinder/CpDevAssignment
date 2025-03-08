import {StyleSheet, Text, Image, View} from 'react-native';
import React from "react";

export function LogoHeadline({
                                 headline = "Welcome",
                                 subHeading = "Components Tour",
                             }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/cp_devs_logo.png')}
                    style={styles.logo}
                    resizeMode="cover"/>
            </View>
            <Text style={styles.headline}>{headline}</Text>
            <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },

    logoContainer: {
        width: 150,
        height: 150,
        borderRadius: 60,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    logo: {
        width: '90%',
        height: '90%',
        borderRadius: 50
    },
    headline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00796b',
        marginBottom: 8,
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 20,
        textAlign: 'center',
    }
})