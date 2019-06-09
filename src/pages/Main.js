import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Image, Dimensions,
  ListView,
} from 'react-native'

// import { Searchbar, Appbar, Headline} from 'react-native-paper';
import Bar from '../components/Navbar'
const { width, height } = Dimensions.get('window')
export default class Main extends Component {


  state = {
    firstQuery: '',
  };


  filterSearch(text){
    const newData = api.posts.filter((item)=>{
      const itemSearch = item.content.toUpperCase()
      const data = text.toUpperCase()
      return itemSearch.indexOf(data) > - 1
    })
  }


  render() {
    const { firstQuery } = this.state;
    return (
    
   
        
        <View style={styles.container}>
        
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.content}>
              
              <Image
                 source={{ uri:'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png'}}
                style={{ height: 150, width:110, marginTop:30, marginLeft:120}}
              />
             
            </View>

          </KeyboardAvoidingView>
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