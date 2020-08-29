import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../themes/default.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ backgroundColor, navigation, ...props }) => {
    const onMenuPress = () => {
        navigation.toggleDrawer();
    }
    return (<View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
        <View style={[styles.headerContainer, { backgroundColor }]}>
            <TouchableOpacity onPress={() => onMenuPress()}>
                <Ionicons name='menu-outline' style={styles.iconHeader} />
            </TouchableOpacity>
            <Text style={styles.inputSearch}>Marketing Camp</Text>
            {/* <Ionicons name='add' style={styles.iconHeader} /> */}
        </View>
    </View>
    )
};
export default Header;