import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Image, Dimensions,
  ListView,
} from 'react-native'
import { ListItem } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome'
import socket from "socket.io-client"
import Bar from '../../components/NavBar/Navbar'
import api from '../../service/api'

import FeedPosts from '../../components/Feed/FeedPosts';

import tabBarIcon from './tabBarIcons'


export default class HomeScreen extends Component {
  static navigationOptions ={ 
    // tabBarIcon: tabBarIcon("home"),
    tabBarLabel:'Interno',
    tabBarIcon: <Icon name="home" size={24} color="blue"/>,
    
  };

  state = {
    posts: [],
  };
  async getPostsFromApi() {

    await api.get().then(Response => {
      this.setState({ posts: Response.data })
    }).catch(err => {
      console.log(err);
    })

  }

  async componentDidMount() {
    this.subscribeToEvents();
    this.getPostsFromApi();

  }

  subscribeToEvents() {
    const io = socket("http://10.42.0.1:3000")
    io.on("post", data => {
      this.setState({ posts: [data, ...this.state.posts] });
    })
  }

 
  render() {
   
    return (
    
     
        <View style={styles.container}>
        <Bar title="UFC INFO" posts={this.state.posts} navigation={this.props.navigation}/>

            <View style={styles.container}>
                    <FeedPosts navigation={this.props.navigation}/>
               
              
            </View>

       
        </View>
     
      
    )
  }

}

const styles = StyleSheet.create({
  
   
    container: {
      flex: 1,
      backgroundColor: '#eee'
    
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