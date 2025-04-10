import {View, SafeAreaView, StyleSheet, Alert} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {LogoHeadline} from "../components/LogoHeadline";
import {TextInput} from "react-native-gesture-handler";
import {ActionButton} from "../components/ActionButton";
import React, {useState} from "react";

type LoginStackParamsList = {
    Login: undefined;
    Landing: undefined;
    MainApp: undefined;
    SignUp: undefined;
}

export const users = [
    {email: "user1@gmail.com", password: "password1"},
];

type LoginScreenProps = {
    navigation: StackNavigationProp<LoginStackParamsList, 'Login'>;
};

export default function LoginScreen({navigation}: LoginScreenProps) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const loginUser = () => {
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            navigation.reset({
                index: 0,
                routes: [{name: 'MainApp'}]
            });
        } else {
            Alert.alert(
                "Login failed",
                "Invalid credentials",
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LogoHeadline headline="Login"/>
            </View>
            <View style={styles.middleContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={(styles.bottomContainer)}>
                <ActionButton title={"Submit"} onPress={loginUser}/>
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
    textInput: {
        width: "80%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        height: 48,
    }
});