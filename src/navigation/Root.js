import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
}

const Root = () => {
    return <NavigationContainer >
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} />
        </Drawer.Navigator>
    </NavigationContainer>
}

export default Root;