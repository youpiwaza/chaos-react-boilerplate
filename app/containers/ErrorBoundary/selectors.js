import { createSelector } from 'reselect';

/**
 * Direct selector to the errorBoundary state domain
 */
const selectErrorBoundaryDomain = (state) => state.get('errorBoundary');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ErrorBoundary
 */

const makeSelectErrorBoundary = () => createSelector(
  selectErrorBoundaryDomain,
  (substate) => substate.toJS()
);

export default makeSelectErrorBoundary;
export {
  selectErrorBoundaryDomain,
};
