import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import  { Card} from "react-native-material-ui"

export default class Post extends Component {
  render() {
      const {post} = this.props;
    return (
       
      // <View style = {styles.container}>
      //       <Text style={styles.title}> {post.title}</Text>
      //       <Text> {post.author}</Text>
      //       <View style = {styles.content}>
      //           <Text> { post.category}</Text>
      //           <Text> {post.content}</Text>
      //       </View>
      // </View>
      <Card>
             <View style = {styles.container}>
             <Text style={styles.title}> {post.title}</Text>
               <Text> {post.author}</Text>
               <View style = {styles.content}>
                   <Text> { post.category}</Text>
                   <Text> {post.content}</Text>
               </View>
         </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        padding:20,
        borderBottomWidth: 1,
        borderColor:'#eee',
        backgroundColor:'lightgray'
    },
    title: { 
        fontSize: 16,
        fontWeight: 'bold',
        color:'black',
    },

    content: { 
        fontSize: 15,
        color:'black',
        marginVertical: 10,
    }

})