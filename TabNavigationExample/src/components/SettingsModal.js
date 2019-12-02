//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class SettingsModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Modal</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  text: {
    color: '#f1f1f1',
    fontSize: 32
  }
});

//make this component available to the app
export default SettingsModal;
