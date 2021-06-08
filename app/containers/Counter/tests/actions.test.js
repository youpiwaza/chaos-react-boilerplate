
import {
  decrementAction,
  incrementAction,
  setAction,
} from '../actions';
import {
  DECREMENT,
  INCREMENT,
  SET,
} from '../constants';

describe('Counter actions', () => {
  describe('Decrement Action', () => {
    it('has a type of DECREMENT', () => {
      const expectedResult = {
        type: DECREMENT,
      };
      expect(decrementAction()).toEqual(expectedResult);
    });
  });
  describe('Increment Action', () => {
    it('has a type of INCREMENT', () => {
      const expectedResult = {
        type: INCREMENT,
      };
      expect(incrementAction()).toEqual(expectedResult);
    });
  });
  describe('Set Action', () => {
    it('has a type of SET', () => {
      const fixture = 8;
      const expectedResult = {
        count: fixture,
        type: SET,
      };
      expect(setAction(fixture)).toEqual(expectedResult);
    });
  });
});
