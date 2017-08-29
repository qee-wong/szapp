/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  DeviceEventEmitter,
  TouchableOpacity,
} from 'react-native';

export default class szapp extends Component {

  componentWillMount(){
    DeviceEventEmitter.addListener('AndroidToRNMessage',this.handleAndroidMessage);
  }

  componentWillunMount(){
     DeviceEventEmitter.remove('AndroidToRNMessage',this.handleAndroidMessage);
  }


  handleAndroidMessage=(msg)=>{
     //RN端获得native端传递的数据
     console.log(msg);

  }


  render() {
    // this.componentWillMount();
    return (
      <View style={styles.container}>
        

        <TouchableOpacity  onPress = {this.call_button.bind(this)}>
          <Text style={styles.welcome}>
              alert事件    
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress = {this.callna_button.bind(this)}>
          <Text style={styles.instructions}>
            To get to 原生 started, edit index.android.js
          </Text>
        </TouchableOpacity>


        
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

  call_button(){
      NativeModules.MyNativeModel.rnCallNative('ko ！');
  }
  callna_button(){
      NativeModules.MyNativeModel.startActivityFromJS("com.szapp.RNToNativeActivity","我是从JS传过来的参数信息.");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//console.log(AppRegistry.runApplication);
AppRegistry.registerComponent('szapp', () => szapp);
