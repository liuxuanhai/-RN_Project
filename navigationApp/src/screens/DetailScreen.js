import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Detail'),
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerRight: (
        <TouchableOpacity onPress={() => alert('button right')}>
          <Text>Right</Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const {navigate, push, goBack, getParam} = this.props.navigation;
    const title = getParam('title', 'Default Title');

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Button title="go to home page" onPress={() => push('Home')} />

        <Button title="go back" onPress={() => goBack()} />
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
});
