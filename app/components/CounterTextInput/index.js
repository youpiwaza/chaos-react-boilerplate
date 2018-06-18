/**
*
* CounterTextInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import StyledCounterTextInput from './StyledCounterTextInput';

function CounterTextInput(props) {
  return (
    <StyledCounterTextInput
      onChange={props.handleChange}
      type="text"
      value={props.count}
    />
  );
}

CounterTextInput.propTypes = {
  count: PropTypes.number,
  handleChange: PropTypes.func,
};

export default CounterTextInput;
