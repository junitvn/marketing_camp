import React from 'react';
import {useDispatch} from 'react-redux';

import SplashScreen from '../splash/SplashScreen';
import {removeToken} from '../../redux/registerRedux/actions';

const Logout = () =>{
    const dispatch = useDispatch();
    dispatch(removeToken());
    return (
        <SplashScreen/>
    )
}

export default Logout;