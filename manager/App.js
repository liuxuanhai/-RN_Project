import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDGe0JfTLBlvb_AWumbEhOGx9D_XTl8tc4',
      authDomain: 'manager-16e0a.firebaseapp.com',
      databaseURL: 'https://manager-16e0a.firebaseio.com',
      projectId: 'manager-16e0a',
      storageBucket: 'manager-16e0a.appspot.com',
      messagingSenderId: '510180114732',
      appId: '1:510180114732:web:024dc989ab9e7479496c89',
      measurementId: 'G-E43BV7NSVY'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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

AppRegistry.registerComponent('manager', () => App);

export default App;