// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store/store';
import AppRouter from './src/router/AppRouter';




function App() {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
