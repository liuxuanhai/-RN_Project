//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

// create a component
class MyButton extends Component {
    render() {
        const {color, backgroundColor} = this.props;
        return (
            <TouchableOpacity style={[styles.button, {backgroundColor}]}>
                <Text style={[styles.text, {color}]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

MyButton.propTypes= {
    text: propTypes.string.isRequired,
    backgroundColor: propTypes.string,
    color: propTypes.string
};

// define your styles
const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center'
    },
    text: {
        fontSize: 14
    }
});

//make this component available to the app
export default MyButton;
