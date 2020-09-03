import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';
import { pageImageUri, pageInfoApi } from '../utils/api';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';

const PICTURE_SIZE = 150;

const PageItem = props => {
    const { access_token, id, name } = props.item;
    const [likes, setLikes] = useState(0);
    const [coverUri, setCoverUri] = useState('')
    console.log(`pageInfoApi(id, access_token)`);
    useEffect(() => {
        Axios.get(pageInfoApi(id, access_token))
            .then(res => {
                const { fan_count, cover } = res.data;
                setLikes(fan_count);
                setCoverUri(cover ? cover.source : pageImageUri(id, access_token))
            }).catch(e => {
                console.log(e);
            })
    }, []);

    console.log(pageImageUri(id, access_token));
    return <CardView
        style={styles.itemContainer}
        cardElevation={4}
        cardMaxElevation={4}
        cornerRadius={5}>
        <View style={styles.headerContainer}>
            <Image source={{ uri: coverUri }}
                style={{ width: '100%', height: PICTURE_SIZE }}
                resizeMode="cover"
            />
            <View style={styles.titleContainer}>
                <Text style={styles.textPageName}>{name}</Text>
                <View style={styles.likeCountContainer}>
                    <Text>{likes}</Text>
                    <AntDesign name="like1" style={styles.likeIcon} />
                </View>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>

            </View>
            <View style={styles.rateContainer}>
                <Text style={{ fontSize: 40, color: 'green' }}>
                    98%
            </Text>
            </View>
        </View>
    </CardView>

}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 8,
        marginHorizontal: 3,
        marginTop: 10,
        marginBottom: 2
    },
    headerContainer: {
    },
    textPageName: {
        fontSize: 20,
        marginLeft: 8,
        marginVertical: 8,
        flex: 7
    },
    contentContainer: {
        flexDirection: 'row'
    },
    infoContainer: {
        backgroundColor: 'tomato',
        flex: 7
    },
    rateContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeCountContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 8
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeIcon:{
        fontSize: 18,
        color:'#3b5998',
        marginLeft: 3
    }
})

export default PageItem;