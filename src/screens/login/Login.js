import React from 'react';
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

export default function Login({ navigation }) {
  const storeToken = async (data) => {
    try {
      console.log(data);
      await AsyncStorage.setItem('token', JSON.stringify(data));
      
      console.log('Stored token!');
      navigation.navigate("HomeScreen", {
        data
      })
    } catch (e) {
      console.log('Store token error: ', e);
    }
  }

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email',
      'pages_show_list', 'pages_manage_engagement', 'pages_read_engagement',
      'pages_read_user_content']).then(
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
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/analysis.png')}
          style={styles.logoIcon}
        />
      </View>
      <TextInput style={styles.inputInfo} placeholder="Name" />
      <TextInput style={styles.inputPassword}
        secureTextEntry={true} placeholder="Password" />
      <TouchableOpacity onPress={() => { }} style={styles.buttonLogin}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.textLoginWith}>or</Text>
      <TouchableOpacity onPress={() => handleFacebookLogin()} style={styles.buttonLoginWithFB}>
        <Text style={styles.textLoginWithFB}>LOGIN WITH FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
}
