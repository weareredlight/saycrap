import actionTypes from './action_types';
import $ from 'jquery';


export function setInput(text) {
  return {
    type: actionTypes.SET_INPUT,
    text
  };
}

export function getCraps() {
  return (dispatch) => {
    $.getJSON('/craps', (craps) => {
      dispatch({
        type: actionTypes.RECEIVE_CRAPS,
        craps
      });
    });
  };
}


export function createCrap(crapText) {
  return (dispatch) => {
    $.post('/craps', { crap: { text: crapText } }, (crap) => {
      dispatch({
        type: actionTypes.CREATE_CRAP,
        crap
      });
    });
  };
}
