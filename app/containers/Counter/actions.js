/*
 *
 * Counter actions
 *
 */

import {
  DECREMENT,
  INCREMENT,
  SET,
} from './constants';

// Remove 1 to counter count
export function decrementAction() {
  return {
    type: DECREMENT,
  };
}

// Add 1 to counter count
export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

// Set counter count to parameter value
export function setAction(count) {
  return {
    count,
    type: SET,
  };
}
