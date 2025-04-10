import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import {LogoHeadline} from "../components/LogoHeadline";

export default function SignUpScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LogoHeadline headline="Sign Up"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    topContainer: {
        flex: 1
    }
});