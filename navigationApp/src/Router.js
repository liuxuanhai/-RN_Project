import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import ContactScreen from './screens/ContactScreen';

//import AboutModal from './screens/AboutModal';

import Icon from 'react-native-vector-icons/Ionicons';

import DrawerButton from './components/DrawerButton';
import DrawerMenu from './components/DrawerMenu';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
  Detail: {
    screen: DetailScreen,
  },
});

const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'ios-home',
        drawerIcon: ({tintColor}) => (
          <Icon name="home" size={22} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: {
        //drawerLockMode: 'locked-closed',
        drawerLabel: 'Contact',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-contact" size={22} color={tintColor} />
        ),
      },
    },
  },
  {
    drawerPosition: 'left',
    drawerWidth: 160,
    contentComponent: DrawerMenu,

    /*contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#d03932',

    activeBackgroundColor: '#d03932',
    inactiveBackgroundColor: '#fff',
  }*/
  },
);

export default createAppContainer(Drawer);
