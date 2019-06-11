import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'

export default class Animations extends Component {
    
  render() {
    const { title, onSearchTextChange, searchValue, isSearchActive } = this.props;
    const { opacityValue, textInput } = this.state;

    const color = isSearchActive ? COLOR.grey600 : 'white';

    let content = <Text style={[styles.text, { color }]}>{title}</Text>;

    if (textInput) {
      content = (<TextInput  />);
    }
    return (
      <Animated.View style={[styles.container, { opacity: opacityValue }]}>
           {content}
      </Animated.View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 22,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black',
    }
});