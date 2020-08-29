import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

const Home = ({ navigation }) => {

  return <View>
    <Header backgroundColor="#00a0f8" barStyle='default' navigation={navigation} />
  </View>
}

export default Home;