import React, { Component } from 'react'
import { View ,Image} from 'react-native';
import { listenOrientationChange as lor, removeOrientationListener as rol, widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styles from './styles';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Text} from 'react-native'
import Moment from 'react-moment';
import 'moment-timezone';
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
      
      <Card style={styles.body} onPress={() => {this.props.navigation.navigate('PostView',{post:post}
        );
        }}>
        <Card.Cover source={{ uri: 'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png' }} style={{ height:hp('40%'), flex: 1 }} />
        <Card.Content>
          <Paragraph style={styles.title}>{post.title}</Paragraph>
          
          <Paragraph>
            {post.category}
          </Paragraph>
           <Paragraph>
             
          <Moment element={Text} locale="pt-br" fromNow > 
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

