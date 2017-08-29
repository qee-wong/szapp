/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    RCTImage,
    View
} from 'react-native';

const logo = require('./img/Desert.jpg');

class szapp extends Component {
    //渲染界面
  render() {
    let pic = {
      uri: 'http://192.168.17.97:9080/JSPWiki/attach/Main/Desert.jpg'
    };

    return (

       <ScrollView>
                <View style={styles.container}>

                    {/*LOGO*/}
                    <View style={styles.logo_img}>
                      <Image  source={logo} style={styles.logo}/>
                    </View>
                    
                    {/*用户名*/}
                    <TextInput
                        ref={(username) => this.username = username}
                        //onFocus={() => this.username.focus()}
                        style={styles.input}
                        underlineColorAndroid='transparent' 
                        placeholder='请输入用户名'/>
                    {/*密码*/}
                    <TextInput
                        ref={(password) => this.password = password}
                        //onFocus={() => this.password.focus()}
                        style={styles.input}
                        placeholder='请输入密码'
                        underlineColorAndroid='transparent' 
                        password={true}/>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => console.log('press me')}>
                        {/*登录*/}
                        <Text style={styles.text}>登录</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


       
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingLeft: 10,
        paddingRight: 10,
        /*alignItems: 'center',*/
        backgroundColor: '#F5FCFF'
    },
    logo_img:{
      alignItems: 'center'
    },
    logo: {
        width: 160,
        height: 160,
        marginTop: 100,
        borderRadius:15
    },
    input: {
        marginTop: 10,
        height: 40,

        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightblue'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFF',
        //backgroundColor: '#def'
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#def',
        height: 40,
        borderRadius: 5,
        marginTop: 10
    }
});
 

 
export default szapp;
