import {StyleSheet} from 'react-native'
import { listenOrientationChange as lor, removeOrientationListener as rol, widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    body: {
        marginTop: 10,
        paddingTop: 1,
        borderTopWidth:1,
        borderRadius: 10,
        padding: 1,
        backgroundColor: 'white',
        borderTopColor: 'lightgray',
        width: wp('95%'),
        marginLeft: 8,
    },

    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: 'lightgray'
    },
    title: {
        fontSize: hp('2%'),
        letterSpacing: 1,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginTop: 20
    },


})