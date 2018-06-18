/*
 *
 * Counter reducer
 *
 */

import { fromJS } from 'immutable';
import {
//  DEFAULT_ACTION,
} from './constants';

// Store the count integer
const initialState = fromJS({
  count: 0,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default counterReducer;
