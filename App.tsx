// App.tsx
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import GalleryScreen from './screens/GalleryScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarActiveTintColor: '#ff9800',
                        tabBarInactiveTintColor: '#888',
                        tabBarStyle: {backgroundColor: '#fff'},
                        tabBarIcon: ({color, size}) => {
                            let iconName: string = '';

                            switch (route.name) {
                                case 'Home':
                                    iconName = 'home';
                                    break;
                                case 'Profile':
                                    iconName = 'account';
                                    break;
                                case 'Menu':
                                    iconName = 'food';
                                    break;
                                case 'About':
                                    iconName = 'information';
                                    break;
                                case 'Contact':
                                    iconName = 'phone';
                                    break;
                                case 'Gallery':
                                    iconName = 'image';
                                    break;
                                default:
                                    iconName = 'help-circle';
                            }

                            return (
                                <MaterialCommunityIcons
                                    name={iconName as keyof typeof MaterialCommunityIcons.glyphMap}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Profile" component={ProfileScreen}/>
                    <Tab.Screen name="Menu" component={MenuScreen}/>
                    <Tab.Screen name="About" component={AboutScreen}/>
                    <Tab.Screen name="Contact" component={ContactScreen}/>
                    <Tab.Screen name="Gallery" component={GalleryScreen}/>
                </Tab.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
