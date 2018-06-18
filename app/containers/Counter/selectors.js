import { createSelector } from 'reselect';

/**
 * Direct selector to the counter state domain
 */
const selectCounterDomain = (state) => state.get('counter');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Counter
 */

const makeSelectCounter = () => createSelector(
  selectCounterDomain,
  (substate) => substate.toJS()
);

export default makeSelectCounter;
export {
  selectCounterDomain,
};
