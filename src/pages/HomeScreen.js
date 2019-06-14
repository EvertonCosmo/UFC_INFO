import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Image, Dimensions,
  ListView,
} from 'react-native'
import { ListItem } from 'react-native-material-ui';

import Bar from '../components/Navbar'
import api from '../service/api'
import FeedPosts from '../components/FeedPosts';


export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',

  };
  render() {
   
    return (
    
     
        <View style={styles.container}>
        <Bar title="UFC INFO" navigation={this.props.navigation}/>

            <View style={styles.container}>
                    <FeedPosts/>
               
              
            </View>

       
        </View>
     
      
    )
  }

}

const styles = StyleSheet.create({
  
   
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    
    },
    input:{
      borderWidth:1,
      borderColor: '#c0c0c0',
      marginTop:20,
      borderRadius:2,
      height:44,
      paddingHorizontal:15,
      alignSelf: 'stretch',

    },  
    content:{
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    center:{
      alignContent: 'center'
    }

})