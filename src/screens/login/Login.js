import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style';

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <TextInput style={styles.inputInfo} placeholder="Name" />
      <TextInput style={styles.inputPassword} placeholder="Password" />
      <TouchableOpacity onPress={() => {}} style={styles.buttonLogin}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.textLoginWith}>or login with</Text>
      <TouchableOpacity onPress={() => {}} style={styles.buttonLoginWithFB}>
        <Text style={styles.textLoginWithFB}>LOGIN WITH FACEBOOK</Text>
      </TouchableOpacity>
    </View>
  );
}
