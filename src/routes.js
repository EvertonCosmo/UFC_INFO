import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Pages/HomeScreen';
import ExtensionProjectsScreen from './Pages/ExtensionProjectsScreen';
import MenuDrawer from './components/MenuDrawer';
import PostViewScreen from './Pages/PostViewData'

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
    } , 
    }
)

const stackHomeScreen = createStackNavigator({
    Home:{screen:HomeScreen,navigationOptions:{header:null}},


})
const stackPostViewScreen = createStackNavigator({
    PostView: { screen: PostViewScreen },
   

})
export const Routes = createAppContainer(
    createDrawerNavigator(
        {

        Home: {
            screen: stackHomeScreen,
        },
        ExtensionProjects: {
            screen: ExtensionProjectsScreen,
           
        },
        PostView:{ 
            screen: stackPostViewScreen,
        }
        },

        DrawerConfig

    ));
//  export const StackNavigator = createAppContainer(
//         createStackNavigator(
//             {
//                 Home:{
//                     screen:HomeScreen
//                 },
//                 PostView: { 
//                     screen: PostViewScreen
//                 }, 
               
//             }
//         ));

export default Routes;
