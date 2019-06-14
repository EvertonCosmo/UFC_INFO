import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './pages/HomeScreen'
import ExtensionProjects from './pages/ExtensionProjectsScreen'
import MenuDrawer from './components/MenuDrawer';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.73,
    contentComponent:({navigation }) => {
        return (<MenuDrawer navigation={navigation} />)
    }
};

const Routes = createAppContainer(
    createDrawerNavigator(
        {

        Home: {
            screen: HomeScreen
        },
        ExtensionProjects: {
            screen: ExtensionProjects
        },

        },
        DrawerConfig

    ));

export default Routes;
