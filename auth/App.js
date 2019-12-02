import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCHHSwLxGg5EHpu5WWCtXXcG6KZBL7V46g',
      authDomain: 'authentication-ff7bb.firebaseapp.com',
      databaseURL: 'https://authentication-ff7bb.firebaseio.com',
      projectId: 'authentication-ff7bb',
      storageBucket: 'authentication-ff7bb.appspot.com',
      messagingSenderId: '851639069630',
      appId: '1:851639069630:web:19bed81837d374329927ef',
      measurementId: 'G-BZB89ML0H3'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

AppRegistry.registerComponent('auth', () => App);

export default App;
