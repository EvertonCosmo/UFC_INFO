import React ,{ Component }  from 'react'
import { Text, View, Platform, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends Component {

  navLink(nav, text){
      return(
          <TouchableOpacity style={{height:50}} onPress={()=>this.props.navigation.navigate(nav)}>
              <Text style={styles.link}>{text}</Text>
          </TouchableOpacity>
      )
  }
  
  render() {
    return (
      <View style={styles.container}> 
        
            <View style={styles.topLinks}>
                
                    <Image
                        source={{ uri: 'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png' }}
                        style={{ height: 150, width: 110, marginTop: 20, marginLeft: 80 }}
                    /> 
            </View>
            <ScrollView style={{ flex: 1 }}>
            <View styles={styles.bottomLinks}> 
                    {this.navLink('Home','Home')} 
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                    {this.navLink('Home', 'Home')}
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                    {this.navLink('Home', 'Home')}
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                    {this.navLink('Home', 'Home')}
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                    {this.navLink('Home', 'Home')}
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                    {this.navLink('Home', 'Home')}
                    {this.navLink('ExtensionProjects', 'Projetos Extensão')} 
                
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.description}>UFC INFO</Text>
                <Text style={styles.version}> v0.1</Text>
            </View>
           
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    link:{  
        flex:1,
        color:'#113555',
        fontSize:16,
        padding: 6,
        paddingLeft: 14,
        margin:5,
        textAlign:'left',

    },
    topLinks:{
        height:190,
        backgroundColor:'#113355'
    },
    bottomLinks:{
        flex:1,
        paddingTop: 10,
        paddingBottom: 450,
    },  
    footer:{
        height:50,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'white'
    },
    version:{
        flex:1,
        color:'gray',
        textAlign:'right',
        marginRight: 20,
    },
    description:{
        flex:1,
        marginLeft:20,
        fontSize:10,
       

    }

})