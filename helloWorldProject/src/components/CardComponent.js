//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class CardComponent extends Component {
    render() {
        const {text, backgroundColor} = this.props;   
        return (
        <View style={[styles.container, {backgroundColor}]}>
           <Text style={styles.cardText}>{text}</Text>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    cardText: {
        fontSize: 18,
    }
});

//make this component available to the app
export default CardComponent;

