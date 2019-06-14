import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Bar from "../components/Navbar"
export default class ExtensionProjects extends Component {

  static navigationOptions = {
    drawerLabel: 'Projetos de extensão',
    
  };
  render() {
    return (
      <View>
        <Bar title="UFC INFO" navigation={this.props.navigation} />
        <Text> Projetos de extensão  </Text>
      </View>
    )
  }
}