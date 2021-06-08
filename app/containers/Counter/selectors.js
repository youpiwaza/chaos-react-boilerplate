import { createSelector } from 'reselect';

/**
 * Direct selector to the counter state domain
 */
const selectCounterDomain = (state) => state.get('counter');

/**
 * Other specific selectors
 */

// return count property only
const makeSelectCount = () => createSelector(
  selectCounterDomain,
  (counterState) => counterState.get('count')
);

export {
  selectCounterDomain,
  makeSelectCount,
};
