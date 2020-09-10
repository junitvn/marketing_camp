import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const InputRegister = (props) =>{
    return (
        <View style ={styles.container} >
            <TextInput
                style={props.styles}
                placeholder = {props.placeholder}
                value = {props.value}
                onChangeText = {props.onChangeText}
                secureTextEntry={props.secureTextEntry}
            />
            <Text style = {props.AlertStyle}>{props.alert}</Text>
        </View>
    )
}

export default InputRegister;
const styles = StyleSheet.create({
    flex:1,
})