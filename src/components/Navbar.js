import React, { Component } from 'react';
import {Text,StyleSheet,View,TouchableHighlight} from 'react-native'
import {Icon} from 'react-native-vector-icons/FontAwesome'


export default class Navbar extends Component {

  render() {
    return (
        <View style={styles.Navbar}>
            <TouchableHighlight >
                <Icon name={this.props.icon} size={25} color="#fff" />
            </TouchableHighlight>
            <Text>UFC INFO</Text>
            <Icon name="search" size={25} color="#fff"/>
            <Icon name="notification" size={25} color="#fff" />
            <Icon name="ellipsis-v" size={25} color="#fff" />
        </View>  
    );
  }

}
const styles = StyleSheet.create({
    Navbar: {
        backgroundColor: '#555566',
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingTop: 25
    },
})