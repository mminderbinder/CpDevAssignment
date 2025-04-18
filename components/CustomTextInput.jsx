import React from "react";
import {TextInput, StyleSheet} from "react-native";

export function CustomTextInput(props) {
    return (
        <TextInput style={styles.input}
            {...props}/>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 12,
        marginVertical: 8
    }
});
