import React, {Component} from 'react';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcWzMqeY0U8HvA2iTPhYfUaCJr5NKd7B8',
      authDomain: 'ogrencikayit-f0d39.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-f0d39.firebaseio.com',
      projectId: 'ogrencikayit-f0d39',
      storageBucket: 'ogrencikayit-f0d39.appspot.com',
      messagingSenderId: '804338751102',
      appId: '1:804338751102:web:f83d942a32e3232221aa2f',
      measurementId: 'G-M5S2XM9987',
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
