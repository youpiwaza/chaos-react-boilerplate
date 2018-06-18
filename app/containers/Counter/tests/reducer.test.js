
import { fromJS } from 'immutable';
import counterReducer from '../reducer';

describe('counterReducer', () => {
  // Describe initial state
  let state;

  beforeEach(() => {
    state = fromJS({
      count: 0,
    });
  });

  // Initial state initialisation
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(counterReducer(undefined, {})).toEqual(expectedResult);
  });
});
