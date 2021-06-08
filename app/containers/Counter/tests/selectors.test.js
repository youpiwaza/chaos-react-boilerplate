import { fromJS } from 'immutable';

import {
  makeSelectCount,
  selectCounterDomain,
}
from '../selectors';

describe('selectCounterDomain', () => {
  it('should select the counter state', () => {
    const count = fromJS({
      count: 0,
    });
    const mockedState = fromJS({
      counter: count,
    });
    expect(selectCounterDomain(mockedState)).toEqual(count);
  });
});

describe('makeSelectCount', () => {
  const countSelector = makeSelectCount();

  it('should select the count property', () => {
    const count = 0;
    const mockedState = fromJS({
      counter: {
        count, // count = 0
      },
    });

    expect(countSelector(mockedState)).toEqual(count);
  });
});
