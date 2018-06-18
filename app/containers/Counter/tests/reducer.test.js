
import { fromJS } from 'immutable';
import counterReducer from '../reducer';

describe('counterReducer', () => {
  it('returns the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
