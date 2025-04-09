import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StackNavigationProp} from "@react-navigation/stack";
import {LogoHeadline} from "../components/LogoHeadline";

const {width} = Dimensions.get("window");
const buttonWidth = width * 0.8;

type RootStackParamsList = {
    Landing: undefined;
    Login: undefined;
    SignUp: undefined
    MainApp: undefined;
}

type LandingPageProps = {
    navigation: StackNavigationProp<RootStackParamsList, 'Landing'>;
};

export default function LandingScreen({ navigation }: LandingPageProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.topContainer}>
                    <LogoHeadline headline="Welcome" />
                    <Text style={styles.subtitle}>Assignment 2</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
       justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 16,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#ff9800',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 16,
        alignItems: 'center',
        width: buttonWidth
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});