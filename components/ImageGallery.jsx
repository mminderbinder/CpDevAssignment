import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imageWidth = width * 0.75;
const imageHeight = width * 0.75;

export function ImageGallery({}) {
    const galleryImages = [
        {
            id: '1',
            source: require('../assets/galleryImages/mp.jpeg'),
            title: 'Margherita Pizza',
        },
        {
            id: '2',
            source: require('../assets/galleryImages/sp.jpg'),
            title: 'Sashimi Sushi',
        },
        {
            id: '3',
            source: require('../assets/galleryImages/cb.jpg'),
            title: 'Cheeseburgers',
        },
        {
            id: '4',
            source: require('../assets/galleryImages/spaghetti-carbonara.jpg'),
            title: 'Spaghetti Carbonara',
        },
        {
            id: '5',
            source: require('../assets/galleryImages/chocolate-lava-cake.jpg'),
            title: 'Lava Cake',
        },

    ];
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                alwaysBounceHorizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast">
                {galleryImages.map((image) => (
                    <View key={image.id} style={[styles.imageContainer, {width: width}]}>
                        <View style={styles.contentWrapper}>
                            <Image
                                source={image.source}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={[styles.text, styles.title]}>{image.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.instructions}>Swipe left/right</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentWrapper: {
        height: imageHeight,
        width: imageWidth,
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        color: '#333',
    },
    title: {
        marginTop: 16,
        fontSize: 16,
    },
    instructions: {
        marginTop: 20,
        fontSize: 14,
        fontStyle: 'italic',
    }
});