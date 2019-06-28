import React, { Component } from 'react'
import { View ,StyleSheet,Image} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Text} from 'react-native'
import {listenOrientationChange as lor, removeOrientationListener as rol, widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Moment from 'react-moment';
import 'moment-timezone';
import momentBR from 'moment-timezone'
Moment.globalLocale = "pt-br"

import moment from 'moment'


export default class Post extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    lor(this)
  }
  componentWillMount(){
    rol();
  }

  navigate(){
    this.props.navigation.navigate('PostView')
  }

  render() {
  const { post } = this.props;
    return(
      
      <Card style={styles.body} onPress={() => {this.props.navigation.navigate('PostView',{
          cosmo:86,
          nome:'hi',
        
        }
        );
        }}>
        {/* <Card.Title title={post.author} left={(props) => <Avatar.Image style={{ marginLeft:2 }} size={50} source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'}} />} /> */}
       
        <Card.Cover source={{ uri: 'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png' }} style={{ height:hp('40%'), flex: 1 }} />
        <Card.Content>
          <Paragraph style={styles.title}>{post.title}</Paragraph>
          
          <Paragraph>
            {post.category}
          </Paragraph>
           <Paragraph>
             
          <Moment element={Text} fromNow > 
              {post.created}   
           </Moment>
            <Text> –</Text>
            <Text style={{ fontSize: hp('2.5%'), textAlign: "right"}}> {post.author}</Text>
          </Paragraph>
        </Card.Content>
       
      </Card>
    )
  }
}

const styles = StyleSheet.create({
    body:{ 
      marginTop: 10,
      paddingTop: 5,
      borderTopWidth: 1,
      borderRadius: 10,
      padding: 1,
      backgroundColor: 'white',
      borderTopColor: 'lightgray'
      },
    
    container: { 
        flex:1,
        padding:10,
        borderBottomWidth: 1,
        borderColor:'#eee',
        backgroundColor:'lightgray'
    },
    title: { 
        fontSize: hp('2%'),
        letterSpacing:1,
        fontWeight: 'bold',
        color:'black',
        textAlign:'left',
        marginTop: 20
    },

    content: { 
        fontSize: hp('5%'),
        color:'black',
        marginVertical: 10,
    }

})