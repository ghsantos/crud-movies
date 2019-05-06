import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import configureStore from './store/configureStore';
import Main from './containers/Main';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
