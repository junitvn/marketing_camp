import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';


const DrawerContent = () => {
    // const token = useSelector(state => state)
    // const navigation = useNavigation()
  return (
  <View style = {styles.drawerContainer}>
     <View style = {styles.userInfo}>
        {/* <Text style = {styles.textUser}>User name: {token.tokenReducer.name.charAt(0).toUpperCase()+token.tokenReducer.name.slice(1)}</Text> */}
     </View>
     <ScrollView style = {styles.navigationContainer}>
        <TouchableOpacity style = {styles.button} onPress = {()=>{}}>
            <SimpleLineIcons name = 'home' size={22}/>
            <Text style = {styles.text} >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {()=>{}}>
            <SimpleLineIcons name = 'logout' size={22}/>
            <Text style = {styles.text}>Log out</Text>
        </TouchableOpacity>
     </ScrollView>

  </View>
  
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContainer:{
       
    },
    userInfo:{
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        height:'30%',
        // backgroundColor:'#f4d1d6',
        borderBottomWidth:1,
        borderColor:'#cbcba9',
        width:'100%',
    },
    textUser:{
        color:'#7b436a',
        fontSize:22
    },
    navigationContainer:{
        marginHorizontal:10
    },
    text:{
        marginHorizontal:20,
    },
    button:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:10,
        paddingHorizontal:10,
        height:40,
        // backgroundColor:'#b9deff',
        borderRadius:10,
        borderBottomWidth:1
    }
})