/*
 *
 * Counter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DECREMENT,
  INCREMENT,
  SET,
} from './constants';

const initialState = fromJS({
  count: 0,
});

function counterReducer(state = initialState, action) {
  // Remplacer switch par génération automatique de reducers
  // https://redux.js.org/recipes/reducing-boilerplate#reducers

  switch (action.type) {
    case DECREMENT:
      // return { ...state, count: initialState.count - 1 };
      return decrement(state);

    case INCREMENT:
      return increment(state);

    case SET:
      return set(state, action.count);

    default:
      return state;
  }
}


function decrement(state) {
  const decremented = state.get('count') - 1;
  return state.set('count', decremented);
}

function increment(state) {
  const incremented = state.get('count') + 1;
  return state.set('count', incremented);
}

function set(state, count) {
  const conversion = parseInt(count, 10);

  if (isNaN(conversion)) {
    return state;
  }
  return state.set('count', conversion);
}

export default counterReducer;
