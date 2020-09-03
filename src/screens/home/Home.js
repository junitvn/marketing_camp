import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const token = useSelector(state => state);

  return( 
  <View>
    <Header backgroundColor="#76BDFC" onMenuPress = {()=> navigation.toggleDrawer()}/>
    <Text>{token.tokenReducer.name} </Text>
     
  </View>)
  
}

export default Home;