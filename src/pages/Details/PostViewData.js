import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PostViewData extends Component {
   static navigationOptions = {
     title:'UFC INFO',
     
     headerStyle: {
       backgroundColor: '#044072',
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