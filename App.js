import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { Header } from './src/components/common';

export default class App extends React.Component 
{
  componentWillMount()
  {
    var config = {
      apiKey: "AIzaSyDnnyrplHL_JMzCGIIfzhlwUzQ3C6lXJpg",
      authDomain: "manager-99c63.firebaseapp.com",
      databaseURL: "https://manager-99c63.firebaseio.com",
      projectId: "manager-99c63",
      storageBucket: "",
      messagingSenderId: "110276529893"
    };
    firebase.initializeApp(config);  
  }

  render() 
  {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={ store }>
        <View style={{flex:1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}