// App.tsx
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import GalleryScreen from './screens/GalleryScreen';
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LandingScreen from "./screens/LandingScreen";
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Landing" component={LandingScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="MainApp" component={TabNavigator} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

function TabNavigator() {
    return (
            <Tab.Navigator
                initialRouteName="Home"
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
                                color={color}/>
                        );
                    },
                })}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="Menu" component={MenuScreen}/>
                <Tab.Screen name="About" component={AboutScreen}/>
                <Tab.Screen name="Contact" component={ContactScreen}/>
                <Tab.Screen name="Gallery" component={GalleryScreen}/>
            </Tab.Navigator>
    );
}
