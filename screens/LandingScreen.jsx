import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActionButton} from "../components/ActionButton";
import {LogoHeadline} from "../components/LogoHeadline";

export default function LandingScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LogoHeadline headline="Welcome"/>
                <Text style={styles.subtitle}>Assignment 2</Text>
            </View>
            <View style={styles.bottomContainer}>
                <ActionButton title={"Login"} onPress={() => navigation.navigate('Login')}/>
                <ActionButton title={"Sign Up"} onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
    },
});