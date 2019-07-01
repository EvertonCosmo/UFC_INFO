import React, { Component } from 'react';
import {Text,StyleSheet,View,TouchableHighlight,Image} from 'react-native'
import { Toolbar } from 'react-native-material-ui';


export default class Navbar extends Component {
   
    constructor(props,context){
        super(props,context);
        this.state = {
            text: '',
            isSearchActive:false
            
        };
        this.arrayholder = [];
    }
    

    onSearchPressed = () => {
        this.setState({ isSearchActive: true });
    }
    onSearchTextChanged = (searchValue) => {
        this.setState({ searchValue });
    }
    onSearchClearPressed = () => {
        this.onSearchTextChanged('');
    }
    onSearchClosed = () => {
        this.setState({ isSearchActive: false, searchValue: '' });
    }
   

    
    navigate() {
        this.props.navigation.toggleDrawer();
    }

    searchFilterFunction(text){
        const newData = this.arrayholder.filter((item)=>{
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1 ;
        });
        this.setState({
            dataSource:newData,
            text : text,
        })
    }

    componentDidMount(){
        this.setState({
            dataSource: this.props.posts
        })
        
            this.arrayholder = this.props.posts;
        }
    
  render() {
      const { isSearchActive, searchValue } = this.state;
    //   const { posts } = this.props;


    return (
    <View>
        <Toolbar
            leftElement="menu"
            centerElement={this.props.title}
                // centerElement={<Image source={{ uri: 'http://4.bp.blogspot.com/-t9WuM4GdaS4/UU9mrctcHSI/AAAAAAAAAiI/VFBWaIzHIgs/s1600/brasao_ufc.png' }} 
                // style={{ height: hp('7%'), width: wp('10%'), marginTop:0, marginLeft:0}}/>}
            searchable={{
                autoFocus: true,
                placeholder: 'Pesquise',
                onChangeText: text => this.searchFilterFunction(text), 
            
                    
            }}
                value={this.state.text}
            
            onLeftElementPress={() => this.navigate()}
            style={{ container: { backgroundColor: '#044072' } }}
        />
       
        </View>
    );
  }

}
const styles = StyleSheet.create({
    Navbar: {
        backgroundColor: '#555566',
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingTop: 25
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "#dedede",
        elevation: 4,
    },
    statusBar: {
        height: 24,
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        height: 56,
        flex: 1,
    },
})