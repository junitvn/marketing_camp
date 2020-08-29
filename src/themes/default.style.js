import { StyleSheet } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    },
    headerContainer: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    iconHeader: {
        color: 'white',
        fontSize: 27,
    },
    inputSearch: {
        width: '80%',
        color: 'white',
        fontSize: 20,
        marginStart: 7
    }
});

export default styles;