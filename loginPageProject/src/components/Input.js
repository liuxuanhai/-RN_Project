//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// create a component
class Input extends Component {
    state = {
        text:''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    {...this.props}
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    value={this.state.text}
                    ref={this.props.inputRef}
                    onChangeText={text => this.setState({text})}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f1f1f1',
        color: '#999',
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',


    }
});

//make this component available to the app
export default Input;
