/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
//import Root from './app/root';


//console.log(AppRegistry.runApplication);
//AppRegistry.registerComponent('szapp', () => Root);


import Navigator from './app/action/navigator';

AppRegistry.registerComponent('szapp', () => Navigator);