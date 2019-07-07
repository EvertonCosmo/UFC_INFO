import React from 'react';
import { Platform, Dimensions,StyleSheet } from 'react-native'
import { createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ExtensionProjectsScreen from '../pages/Projects/ExtensionProjectsScreen'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';
import PostViewScreen from '../pages/Details/PostViewData';
import HomeScreen from "../pages/Home/HomeScreen"
import ExternalScreen from '../pages/External/Feed/FeedPosts'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.73,
    contentComponent:({navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
};



// Bottom tabs,category 
const tabs = createBottomTabNavigator(
    {
    Home:{
        screen:HomeScreen,
        
    }, 

    External:{
        screen:ExternalScreen
    },
    },
    {
        tabBarOptions: {
            // activeBackgroundColor:'#044072',
            // pressOpacity:10,
            // tabStyle:{backgroundColor:'#fff'},
            activeTintColor: 'black',
            activeBackgroundColor:'#bebebe',
            // barStyle: { backgroundColor: 'red' },
            showIcon: true,
            pressColor:'red'
            // inactiveTintColor: '#fff',
        },
       
    }
   
)

// Stack Navigator, call tab 
const stackScreen = createStackNavigator({
    // Home:{screen:HomeScreen,navigationOptions:{header:null}},
    Home: { screen: tabs, navigationOptions: { header: null }},
    PostView:{screen:PostViewScreen}


})

// Drawer Navigator
export const Routes = createAppContainer(
    createDrawerNavigator(
        {
        Home: {
            screen: stackScreen,
        },

        ExtensionProjects: {
            screen: ExtensionProjectsScreen,
           
        },

        PostView:{ 
            screen: PostViewScreen,
        },
        
        },

        DrawerConfig

    ));


export default Routes;
