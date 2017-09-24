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
} from 'react-native';

export default class PlatziMusic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.box, styles.green]}></View>
        <View style={[styles.box, styles.blue]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',//por defecto column | row
    //justifyContent: 'space-around',//center | space-around
    //alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    backgroundColor: '#F5FCFF'
  },
  box: {
    width: 150,
    height: 200,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red',
    //alignSelf: 'flex-end' //Alinea respecto al eje del flexDirection
  },
  green: {
    backgroundColor: 'green',
    flex: 1,
  },
  blue: {
    backgroundColor: 'blue',
    //alignSelf: 'flex-start'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
