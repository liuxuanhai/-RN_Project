//import liraries
import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Contacts from './screens/Contacts';
import ContactDetail from './screens/ContactDetail';

import SettingsModal from './components/SettingsModal';
import Settings from './screens/Settings';

const ContactStack = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
  ContactDetail: {
    screen: ContactDetail
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Contacts: {
      screen: ContactStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-contacts" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#f8f8f8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#171f33'
      }
    },
    initialRouteName: 'Contacts'
  }
);

const ModalStack = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator
    },
    SettingsModal: {
      screen: SettingsModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(ModalStack);
