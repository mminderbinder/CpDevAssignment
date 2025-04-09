import {View, Text, SafeAreaView, Dimensions, StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {LogoHeadline} from "../components/LogoHeadline";
import {TextInput} from "react-native-gesture-handler";

const {width} = Dimensions.get("window");
const buttonWidth = width * 0.8;

type LoginStackParamsList = {
    Login: undefined;
    Landing: undefined;
    MainApp: undefined;
}

type LoginScreenProps =  {
    navigation: StackNavigationProp<LoginStackParamsList, 'Login'>;
};

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LogoHeadline headline = "Login"/>
            </View>
            <View style={styles.middleContainer}>
                <TextInput
                    placeholder="Email"


                />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    middleContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    bottomContainer: {

    }
});