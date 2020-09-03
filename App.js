import React from 'react';
import {Provider} from 'react-redux';
import Root from './src/navigation/Root';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store = {store}>
        <Root/>
    </Provider>
    
  );
}
