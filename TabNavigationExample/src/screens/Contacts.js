//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import ContactsList from '../components/ContactsList';

// create a component
class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactsList navigation={this.props.navigation} />
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
  }
});

//make this component available to the app
export default Contacts;
