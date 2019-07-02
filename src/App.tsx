import React from 'react';
import { Provider } from 'react-redux';

import FaleMais from './Pages/FaleMais';

import store from './store';

const App = () => (
  <Provider store={store}>
    <FaleMais />
  </Provider>
);

export default App;
