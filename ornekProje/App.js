/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Ornek Proje'} />
        <Liste />
      </View>
    );
  }
}

export default App;
