/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {Provider as PaperProvider } from 'react-native-paper'
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
export default function Main(){
    return(
        <PaperProvider>
            <App/>
        </PaperProvider>
    );
}
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent('main',()=>Main);
