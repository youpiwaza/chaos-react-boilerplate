
import { fromJS } from 'immutable';
import counterReducer from '../reducer';
import {
  decrementAction,
  incrementAction,
  setAction,
} from '../actions';

describe('counterReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      count: 0,
    });
  });

  // Comparaison au state initial
  it('returns the initial state', () => {
    const expectedResult = state;
    expect(counterReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should decrement correctly', () => {
    const initialState = state;
    const expectedResult = state.set('count', -1);

    expect(counterReducer(initialState, decrementAction())).toEqual(expectedResult);
  });

  it('should increment correctly', () => {
    const initialState = state;
    const expectedResult = state.set('count', 1);

    expect(counterReducer(initialState, incrementAction())).toEqual(expectedResult);
  });

  it('should set correctly', () => {
    const initialState = state;
    const expectedResult = state.set('count', 8);

    expect(counterReducer(initialState, setAction(8))).toEqual(expectedResult);
  });

  it('should not set if the value is incorrect', () => {
    const initialState = state;

    expect(counterReducer(initialState, setAction('a string'))).toEqual(initialState);
  });
});
