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


export function deleteCrap(id) {
  return (dispatch) => {
    $.ajax({
      url: `/craps/${id}`,
      type: 'DELETE',
      success: function() {
        dispatch({
          type: actionTypes.DELETE_CRAP,
          id
        })
      }
    })
  }
}
