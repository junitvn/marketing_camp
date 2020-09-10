import React from 'react';
import {LoginManager} from 'react-native-fbsdk';
import {View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

import {removeToken} from '../../redux/registerRedux/actions';

const LogoutFB = () =>{
    // const navigation = useNavigation();
    const dispatch = useDispatch();
    async () =>{
        await LoginManager.logOut();
        await AsyncStorage.removeItem('token');
        dispatch(removeToken());
        // await navigation.navigate('Login')
    }   
    return (
        <View/>
    )
}

export default LogoutFB;