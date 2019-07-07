import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PostViewData extends Component {
   static navigationOptions = {
     title:'UFC INFO',
     
     headerStyle: {
       backgroundColor: '#044072',
       
      //  background: 'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png',
     },
     headerTintColor: '#FFFFFF',

  };
  
  render() {
    const { navigation } = this.props;
    const post = navigation.getParam('post');
   
    return (
        
      <View>
        <Text>Autor: {JSON.stringify(post)}</Text>  
      </View>
    )
  }
}