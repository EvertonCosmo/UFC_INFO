import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import HomeScreen from '../pages/HomeScreen'
import ExtensionProjectsScreen from '../pages/Projects/ExtensionProjectsScreen'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';
import PostViewScreen from '../pages/Details/PostViewData';
import HomeScreen from "../pages/Home/HomeScreen"
import ExternalScreen from '../pages/External/Feed/FeedPosts'

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
        screen:HomeScreen
    }, 

    External:{
        screen:ExternalScreen
    },
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            // barStyle: { backgroundColor: 'red' },
            showIcon: true,
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
