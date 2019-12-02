//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>My Navigation App</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingVertical: 40
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        paddingVertical:10
    },
    footerText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 11
    }
});

//make this component available to the app
export default DrawerMenu;
