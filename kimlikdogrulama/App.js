import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';
import Button from './src/ortak/Button';
import CardSection from './src/ortak/CardSection';
import Spinner from './src/ortak/Spinner';

class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBKN2mZidPvoXd-jsUNpopiS9X5hdwFQS0',
      authDomain: 'kimlikdogrulama-db3ee.firebaseapp.com',
      databaseURL: 'https://kimlikdogrulama-db3ee.firebaseio.com',
      projectId: 'kimlikdogrulama-db3ee',
      storageBucket: 'kimlikdogrulama-db3ee.appspot.com',
      messagingSenderId: '1058046626206',
      appId: '1:1058046626206:web:54b8d03c34995ae3c32e8f',
      measurementId: 'G-9EY6CL88Y9',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}>ÇIKIŞ</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="GirişEkranı" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
