/**
*
* CounterButton
*
*/

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledCounterButton from './StyledCounterButton';

function CounterButton(props) {
  return (
    <StyledCounterButton onClick={props.handleClick}>
      {Children.toArray(props.children)}
    </StyledCounterButton>
  );
}

CounterButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default CounterButton;
