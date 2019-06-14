import React, { Component } from 'react';
import {Text,StyleSheet,View,TouchableHighlight} from 'react-native'
import {Icon} from 'react-native-vector-icons/FontAwesome'
import {DrawerActions} from "react-navigation"
import { Searchbar, Appbar, Headline } from 'react-native-paper';
import { Toolbar } from 'react-native-material-ui';



export default class Navbar extends Component {
   
    constructor(props,context){
        super(props,context);
        this.state = {
            isSearchActive:false,
            searchValue:''
            
        };
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
    
  render() {
      const { isSearchActive, searchValue } = this.state;
   
    return (

        <Toolbar
            leftElement="menu"
            centerElement={this.props.title}
            searchable={{
                autoFocus: true,
                placeholder: 'Pesquise',
               
            }}
            onLeftElementPress={() => this.navigate()}
            style={{ container: { backgroundColor: '#113355' } }}
        />
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