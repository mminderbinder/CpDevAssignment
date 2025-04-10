import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get("window");
const buttonWidth = width * 0.8;

export function ActionButton({title, onPress}: { title: string, onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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