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

export default function SignUp({ navigation }) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRepassword] = useState(null);
  const [alertPassword, setAlertPassword] = useState(null);
  const [alertName, setAlertName] = useState(null);
  const [alertRepassword, setAlertRepassword] = useState(null);
  const dispatch = useDispatch();
  const handleSignUp = () =>{
      if(name!=null&&password!=null&&repassword!=null){
          if(password==repassword){
            dispatch(setToken(name))
         }else{
            alert('password and verify are different')
         }
      }
      else{
          if(name==null||password==null||repassword==null){
              alert('fill all text input')
          }
      }
  }
  useEffect(()=>{
    name == '' ? setAlertName('Fill name'):setAlertName(null);
    password == '' ? setAlertPassword('Fill password'):setAlertPassword(null);
    repassword == '' ? setAlertRepassword('Fill verify password'): setAlertRepassword(null)
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
        <TextInput 
          style={styles.inputPassword}
          secureTextEntry={true} 
          placeholder="Verify password" 
          onChangeText = {text => setRepassword(text)}
          value = {repassword}
        />
        <Text style = {styles.alert}>{alertRepassword}</Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.textLoginWith}>
          <Text style={styles.textLoginWith}>Return login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
