import { combineReducers } from 'redux';
import { findIndex }       from 'lodash';

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
  case actionTypes.DELETE_CRAP:
    return deleteCrap(state, action);
  default:
    return state;
  }
}


function deleteCrap(collection, action) {
  const idx = findIndex(collection, { 'id': action.id });
  return [
    ...collection.slice(0, idx),
    ...collection.slice(idx + 1)
  ];
}


export default combineReducers({ input, craps });
