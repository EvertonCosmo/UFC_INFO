/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
export default function Main(){
    return(
       
            <App/>
       
    );
}
// AppRegistry.registerComponent(appName, Main());

AppRegistry.registerComponent(appName,() => App);
// AppRegistry.registerComponent('main',()=>Main);
