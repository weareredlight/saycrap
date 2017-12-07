import actionTypes from './actionTypes';
import $ from 'jquery';


export function setInput(text) {
  return {
    type: actionTypes.SET_INPUT,
    text
  };
}

export function getCraps() {
  return (dispatch) => {
    $.getJSON('http://localhost:3000/craps', (craps) => {
      dispatch({
        type: actionTypes.RECEIVE_CRAPS,
        craps
      });
    });
  };
}

export function createCrap(crapText) {
  return (dispatch) => {
    $.post('http://localhost:3000/craps', { crap: { text: crapText } }, (crap) => {
      dispatch({
        type: actionTypes.CREATE_CRAP,
        crap
      });
    });
  };
}


export function deleteCrap(id) {
  return (dispatch) => {
    $.ajax({
      url: `http://localhost:3000/craps/${id}`,
      type: 'POST',
      data: {"_method":"delete"},
      success: function() {
        dispatch({
          type: actionTypes.DELETE_CRAP,
          id
        });
      }
    });
  };
}
