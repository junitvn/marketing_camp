import React,{useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Login.style';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

import {setToken} from '../../redux/actions';

const LOGIN_ACCOUNT = {
  name:'user',
  password:'123'
}
export default function Login({ navigation }) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [alertPassword, setAlertPassword] = useState(null);
  const [alertName, setAlertName] = useState(null);
  const dispatch = useDispatch();

  const storeToken = async (data) => {
    try {
      console.log(data);
      await AsyncStorage.setItem('token', data.accessToken);
      console.log('Stored token!');
      navigation.navigate("Home", {data})
    } catch (e) {
      console.log('Store token error: ', e);
    }
  }

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email', 'page']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              storeToken(data);
            }
          )
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  const handleLogin = () => {
   if( name == LOGIN_ACCOUNT.name && password == LOGIN_ACCOUNT.password)
   {
     dispatch(setToken(name))
    }
    else if(alertName =='' || alertPassword ==''){
      alert('Name or password is wrong')}
    else{
      alert('Fill both name and password')}
  }
  useEffect(()=>{
    name == '' ? setAlertName('Fill name'):setAlertName('');
    password == '' ? setAlertPassword('Fill password'):setAlertPassword('');
  },[name, password])
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/analysis.png')}
          style={styles.logoIcon}
        />
      </View>
      <View style = {styles.inputContainer}>
        <TextInput 
          style={styles.inputInfo} 
          placeholder="Name" 
          onChangeText = {text=>setName(text)}
          value = {name}
        />
        <Text style = {styles.alert}>{alertName}</Text>
        <TextInput 
          style={styles.inputPassword}
          secureTextEntry={true} 
          placeholder="Password" 
          onChangeText = {text => setPassword(text)}
          value = {password}
        />
        <Text style = {styles.alert}>{alertPassword}</Text>
        <TouchableOpacity onPress={() => { handleLogin()}} style={styles.buttonLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textLoginWith}>or</Text>
        <TouchableOpacity onPress={() => handleFacebookLogin()} style={styles.buttonLoginWithFB}>
          <Text style={styles.textLoginWithFB}>LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.textLoginWith,{marginTop:0}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
