//import liraries
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// create a component
class DrawerButton extends Component {
    toggleMenu = () => {
        this.props.navigation.toggleDrawer();
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.toggleMenu}
                style={{ paddingHorizontal: 10 }}>
                <Icon 
                    name="menu"
                    size= {26}
                />
            </TouchableOpacity>
        );
    }
}

//make this component available to the app
export default DrawerButton;
