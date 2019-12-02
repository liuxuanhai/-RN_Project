import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CardComponent from './src/components/CardComponent';

export default class App extends Component {
  state = {
    name: 'Mehmet'
  };
  onPressChangeName = () => {
    this.setState({name: 'Ahmet'});
  };
  render() {
    return (
      <View style={styles.container}>
      <View>
  <Text>{this.state.name}</Text>
      </View>
        <CardComponent text='Merhaba' backgroundColor='blue' />
       <Button 
         title='Change the Name'
         color='#000'
         onPress={this.onPressChangeName}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB3B',
    flexDirection: 'row',
  },
  cardContainer: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
