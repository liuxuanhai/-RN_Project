//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
class ContactScreen extends Component {
  render() {
    const {goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>ContactScreen</Text>
        <Button title="go back" onPress={() => goBack(null)} />
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
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ContactScreen;
