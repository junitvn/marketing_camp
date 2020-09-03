import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Logout from '../screens/login/Logout';
import SignUp from '../screens/login/SignUp';
import DrawerContent from '../components/DrawerContent';
// import SplashScreen from '../screens/splash/SplashScreen';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent = {()=><DrawerContent/>}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name = 'Logout' component = {Logout}/>
        </Drawer.Navigator>
    )
}

const Root = () => {
    const token = useSelector(state => state);
    console.log(token.tokenReducer)
    
        return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {(token.tokenReducer.name =='')?
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name='SignUp' component= {SignUp}/>
                </>:
                <Stack.Screen name="HomeDrawer" component={HomeDrawer}/>}

            </Stack.Navigator>
        </NavigationContainer>

        )
    
}
export default Root;