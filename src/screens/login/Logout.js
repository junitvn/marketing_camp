import React from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
// import Login from './Login';
import {removeToken} from '../../redux/actions';
 
export default function Logout () {
    const dispatch = useDispatch();
    dispatch(removeToken());
    return (
        <View/>
    );
}