import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';

interface FoodItem {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
}

const menuItems: FoodItem[] = [
    {
        id: '1',
        name: 'Margherita Pizza',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        price: '$12.99',
        description: 'Classic cheese pizza with fresh basil.'
    },
    {
        id: '2',
        name: 'Cheeseburger',
        image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        price: '$8.99',
        description: 'Juicy beef burger with cheddar cheese.'
    },
    {
        id: '3',
        name: 'Spaghetti Carbonara',
        image: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
        price: '$10.99',
        description: 'Creamy pasta with pancetta and egg.'
    },
    {
        id: '4',
        name: 'Caesar Salad',
        image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg',
        price: '$7.99',
        description: 'Fresh romaine lettuce with caesar dressing.'
    },
    {
        id: '5',
        name: 'Tandoori Chicken',
        image: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
        price: '$14.99',
        description: 'Spicy and flavorful Indian grilled chicken.'
    },
    {
        id: '6',
        name: 'Sushi Platter',
        image: 'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
        price: '$18.99',
        description: 'Assorted sushi rolls with soy sauce and wasabi.'
    },
    {
        id: '7',
        name: 'French Fries',
        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
        price: '$4.99',
        description: 'Crispy golden potato fries with ketchup.'
    },
    {
        id: '8',
        name: 'Chocolate Cake',
        image: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
        price: '$6.99',
        description: 'Rich and moist chocolate cake.'
    },
];

export default function MenuScreen() {
    const [cart, setCart] = useState<FoodItem[]>([]);

    const addToCart = (item: FoodItem) => {
        setCart([...cart, item]);
        Toast.show({
            type: 'success',
            text1: 'Added to Cart',
            text2: `${item.name} has been added! 🍽️`,
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Image source={{uri: item.image}} style={styles.image}/>
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                                <Text style={styles.buttonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <Toast/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#FFF', padding: 10},
    card: {
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        overflow: 'hidden',
        elevation: 3
    },
    image: {width: 120, height: 120, borderRadius: 10},
    infoContainer: {flex: 1, padding: 10, justifyContent: 'center'},
    name: {fontSize: 18, fontWeight: 'bold', color: '#333'},
    price: {fontSize: 16, color: '#FF5733', marginVertical: 5},
    description: {fontSize: 14, color: '#666', marginBottom: 10},
    button: {backgroundColor: '#FF5733', padding: 8, borderRadius: 5, alignSelf: 'flex-start'},
    buttonText: {fontSize: 14, color: '#FFF', fontWeight: 'bold'},
});
