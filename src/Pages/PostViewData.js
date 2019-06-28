import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PostViewData extends Component {
    // static navigationOptions = ({navigation})=>{ 
    //     title:navigation.getParam()
    // }
    // constructor(props){
    //   super(props)
    //   let post = props.navigation.getParam("cosmo", "oi");
    // }
  render() {
    const {navigation} = this.props;
   
    // const {params} = this.props.navigation.state;
    const  cosmo  = navigation.getParam('cosmo','dks');
    const  nome  = navigation.getParam('nome');
    // const  content  = navigation.getParam('content');
    // const  category  = navigation.getParam('category');
 
    return (
        
      <View>
        <Text>Autor: {JSON.stringify(cosmo)}</Text>
        <Text>Autor: {this.navigation}</Text>
        {/* console.log(post) */}
        {/* <Text>{i}</Text> */}
        {/* <Text>{params}</Text> */}
        
      </View>
    )
  }
}