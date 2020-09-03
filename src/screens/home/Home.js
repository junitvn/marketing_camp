import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Header from '../../components/Header';
import { LoginManager } from 'react-native-fbsdk';
import Axios from 'axios';
import PageItem from '../../components/PageItem';

const Home = ({ route, navigation }) => {
  const { data } = route.params;
  console.log('data', data);
  const [pages, setPages] = useState({});
  useEffect(() => {
    Axios.get(`https://graph.facebook.com/${data.userID}/accounts?
    fields=name,access_token&access_token=${data.accessToken}`).then(res => {
      console.log('res', res.data.data);
      const pages = res.data.data;
      setPages(pages);
    })
      .catch(e => {
        console.log(e);
      })
  }, []);

  const renderItem = ({ item, index }) => {
    return <PageItem navigation={navigation} item={item} />
  }

  return <View style={{ flex: 1, backgroundColor: 'white' }}>
    <Header backgroundColor="#00a0f8" barStyle='default' navigation={navigation} />
    <View style={{ marginTop: 50, flex: 1, paddingHorizontal: 8, paddingTop: 8 }}>
      <FlatList
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  </View>
}

export default Home;