import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers';
import Crapper from './Crapper';

const store = createStore(
  mainReducer,
  applyMiddleware(thunk)
);

export default function App() {
  return <Provider store={store}><Crapper/></Provider>;
}
