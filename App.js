import React from 'react';
import { createStore} from 'redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/* import { Button } from 'react-native/Libraries/Core'; */
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Adjust the path according to your project structure
import reducers from './src/reducers/PeopleReducer'
import { NativeScreenContainer, NavigationContainer } from '@react-navigation/native';
import Navigtion from './src/components/Navigation'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigtion/>

      </NavigationContainer>
    </Provider>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
