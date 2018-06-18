/**
*
* CounterTextInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function CounterTextInput(props) {
  return (
    <input
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
