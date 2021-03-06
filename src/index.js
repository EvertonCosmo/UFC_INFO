import React, { Component } from 'react';
import Routes from './config/routes'
import { YellowBox} from "react-native"

YellowBox.ignoreWarnings(['Unrecognized WebSocket'])
if( __DEV__){
    require('react-devtools')
}

const App = () => <Routes/>

export default App;
