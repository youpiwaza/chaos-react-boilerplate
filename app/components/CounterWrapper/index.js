/**
*
* CounterWrapper
*
*/

import React, { Children } from 'react';
import PropTypes from 'prop-types';

function CounterWrapper(props) {
  return (
    <div>
      {Children.toArray(props.children)}
    </div>
  );
}

CounterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterWrapper;
