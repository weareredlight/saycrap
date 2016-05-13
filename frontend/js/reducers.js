import { combineReducers } from 'redux';

import actionTypes from './action_types';


function input(state='', action) {
  switch(action.type) {
  case actionTypes.SET_INPUT:
    return action.text;
  case actionTypes.CREATE_CRAP:
    return '';
  default:
    return state;
  }
}


function craps(state=[], action) {
  switch (action.type) {
  case actionTypes.CREATE_CRAP:
    return [...state, action.crap];
  case actionTypes.RECEIVE_CRAPS:
    return action.craps;
  default:
    return state;
  }
}


export default combineReducers({ input, craps });
