import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import mainReducer from './reducers';
import Crapper from 'crapper';


const store = applyMiddleware(
  thunkMiddleware,
  createLogger())(createStore)(mainReducer);


$(document).ready(() => {
  ReactDOM.render(React.createElement(Provider, { store }, React.createElement(Crapper)),
                  document.getElementById('react-component'));
});
