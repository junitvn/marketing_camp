import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import SplashScreen from '../screens/splash/SplashScreen';
import DrawerContent from '../components/DrawerContent';
import LogoutFB from '../screens/logout/LogoutFB';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// const HomeStack = () => {
//     return <Stack.Navigator screenOptions={{
//         headerShown: false
//     }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="LoginScreen" component={Login} />
//         <Stack.Screen name="HomeScreen" component={Home} />
//         <Stack.Screen name = 'LogoutFB' component = {LogoutFB}/>
//     </Stack.Navigator>
// }

// const Root = () => {
//     return <NavigationContainer >
//         <Drawer.Navigator initialRouteName="Home" drawerContent = {()=><DrawerContent/>}>
//             <Drawer.Screen name="Home" component={HomeStack} />
//             <Drawer.Screen name = "Logout" component = {LogoutFB}/>
//         </Drawer.Navigator>
//     </NavigationContainer>
// }

const HomeDrawer = () => {
    return (
        <Drawer.Navigator drawerContent = {()=><DrawerContent/>}>
            <Drawer.Screen name = 'Home' component = {Home}/>
            <Drawer.Screen name = 'LogoutFB' component = {LogoutFB}/>
        </Drawer.Navigator>
    )
}

const Root = () => {
    // const token = AsyncStorage.getItem('token');
    const data = useSelector(state =>state);
    const token = data.reducer;
    console.log(token.reducer);
    console.log('token',AsyncStorage.getItem('token'))

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
                {token===null?
                <Stack.Screen name = 'Login' component = {Login} />:
                <Stack.Screen name = 'HomeDrawer' component = {HomeDrawer} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Root;