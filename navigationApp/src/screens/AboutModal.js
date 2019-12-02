//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class AboutModal extends Component {
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>AboutModal</Text>
                <Button 
                    title="Close"
                    onPress={() => { goBack() }} />
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
    title: {
        fontSize: 34
    }
});

//make this component available to the app
export default AboutModal;
