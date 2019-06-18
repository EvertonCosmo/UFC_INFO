import React, { Component } from 'react'
import { View ,StyleSheet,Image} from 'react-native'
// import { Container, Header, Content, Card, Thumbnail CardItem, Text, Button, Icon, Left, Body, Right } from "native-base"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Text} from 'react-native'

import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment'

export default class Post extends Component {
  formatDate(date){
    Moment(date()).format("YYYY-MM-DD hh:mm:ss");
  }
  render() {
  const { post } = this.props;
  const {thisMoment} = moment(post.created).format("MM ddd, YYYY hh:mm:ss a")
    return(
      // <Container>
      //   <Header/>
      //   <Content padder>
      //     <Card>
      //       <CardItem>
      //         <Left>
      //           <Thumbnail source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg' }} />
      //           <Body>
      //             <Text>{post.title}</Text>
      //             <Text note>{post.author}</Text>
      //           </Body>
      //         </Left>
      //       </CardItem>
      //       <CardItem cardBody>
      //         <Image source={{ uri: 'http://crateus.ufc.br/wp-content/uploads/2019/05/colegiado-CC.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
      //       </CardItem>
      //       <CardItem>
      //         <Right>
      //           <Text>{post.created}</Text>
      //         </Right>
      //       </CardItem>
      //     </Card>
      //   </Content>
      // </Container>
      
      <Card style={styles.body}>
        <Card.Title title={post.title} subtitle={post.author} left={(props) => <Avatar.Image size={50} source={{ uri: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'}} />} />
       
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ height: 120, width: null, flex: 1 }} />
        <Card.Content>
          <Paragraph style={{fontSize: 12, textAlign:'justify',}}>{post.content}</Paragraph>
          
          {/* <Moment fromNow> */}
           <Text> {thisMoment}</Text>
          {/* </Moment> */}
          {/* <Text>{post.created}</Text> */}
          
        </Card.Content>
       
      </Card>
    )
  }
}

const styles = StyleSheet.create({
    body:{ 
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderRadius: 10,
      padding: 6,
      backgroundColor: 'white',
      borderTopColor: 'lightgray'
      },
    
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