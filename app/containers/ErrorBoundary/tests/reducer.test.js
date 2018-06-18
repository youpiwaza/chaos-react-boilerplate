
import { fromJS } from 'immutable';
import errorBoundaryReducer from '../reducer';

describe('errorBoundaryReducer', () => {
  it('returns the initial state', () => {
    expect(errorBoundaryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
