import React from 'react';
import { View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent('auth', () => App);

export default App;
