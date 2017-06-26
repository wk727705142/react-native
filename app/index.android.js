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
  View
} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';

// const TabNavigatorItem = TabNavigator.item;

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.me}>Hello I'm Ps,{'\n'}I will going to start learning about react - native !!!</Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={{fontFamily:'iconfont'}}>&#xe948;</Text>
      </View>
    );
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
    backgroundColor:'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  me:{
    textAlign:'center',
    color:'orange',
    fontSize:24,
    borderRadius:50,
    backgroundColor:'black'
  }
});

AppRegistry.registerComponent('app', () => app);
