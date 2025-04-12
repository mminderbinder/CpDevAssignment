import React, {useState} from "react";
import {View, SafeAreaView, StyleSheet, Alert} from "react-native";
import {LogoHeadline} from "../components/LogoHeadline";
import {CustomTextInput} from "../components/CustomTextInput";
import {ActionButton} from "../components/ActionButton";
import {users} from "./LoginScreen";

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpUser = () => {
        users.push({email, password});

        Alert.alert("Account created", `Welcome, ${email}!`);

        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LogoHeadline headline="Sign Up"/>
            </View>
            <View style={styles.middleContainer}>
                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"/>
                <CustomTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}/>
            </View>
            <View style={styles.bottomContainer}>
                <ActionButton title={"Register"} onPress={signUpUser}/>
                <ActionButton title={"Back"} onPress={() => navigation.navigate('Landing')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    middleContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});