import React, { Component  } from 'react'
import { Text, View } from 'react-native'
import api from "../../../service/api"
import socket from "socket.io-client"
import { FlatList } from 'react-native';
import Post from '../../../components/Card/PostCard';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FeedPosts extends Component{
  static navigationOptions = {
    // tabBarIcon: tabBarIcon("home"),
    tabBarLabel: 'Externo',
    tabBarIcon: <Icon name="users" size={24} color="blue" />,

  };


    state = {
      posts: [],

    };
  
  async getPostsFromApi(){
    await api.get().then(Response => {
        this.setState({posts:Response.data})
    }).catch(err => {
        console.log(err);
    })

  }

  async componentDidMount(){
    this.subscribeToEvents();
    this.getPostsFromApi();
  }

  subscribeToEvents() {
    const io = socket("http://192.168.1.13:3000")
    io.on("post",data => {
      this.setState({posts:[data, ...this.state.posts]});
    })
  }

 
  render() {
   
    return (
      
       
          <FlatList
            data={this.state.posts}
            keyExtractor={post => post._id}
            renderItem={({item})=> <Post post={item} navigation={this.props.navigation}/> }
         />

        

    )
  }
}