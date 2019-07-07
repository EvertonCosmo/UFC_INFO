import React, { Component  } from 'react'
import { Text, View } from 'react-native'
import api from "../../service/api"
import socket from "socket.io-client"
import { FlatList } from 'react-native';
import Post from '../Card/PostCard';
export default class FeedPosts extends Component{

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
    const io = socket("http://10.42.0.1:3000")
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