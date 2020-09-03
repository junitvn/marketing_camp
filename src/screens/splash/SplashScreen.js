import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';

const SplashScreen = ({ navigation }) => {
    const DELAY_TIME = 0;

    useEffect(() => {
        const timerSplash = setTimeout(async () => {
            const token = await AsyncStorage.getItem('token');
            const tokenLogin = useSelector(state =>state)
            if (token !== null||tokenLogin.tokenReducer.name !='') {
                console.log('home', navigation);
                navigation.navigate("HomeScreen", { token })
            } else {
                console.log('login');
                navigation.navigate("LoginScreen")
            }
        }, DELAY_TIME)

        return () => clearTimeout(timerSplash);
    }, [])

    return <ImageBackground
        source={require('../../assets/images/background_login.jpg')}
        style={{ width: '100%', height: '100%' }}
    >

    </ImageBackground >
}

export default SplashScreen;