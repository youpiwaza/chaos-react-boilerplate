/**
*
* CounterButton
*
*/

import React, { Children } from 'react';
import PropTypes from 'prop-types';


function CounterButton(props) {
  return (
    <button onClick={props.handleClick}>
      {Children.toArray(props.children)}
    </button>
  );
}

CounterButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default CounterButton;
