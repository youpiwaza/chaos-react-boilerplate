/**
 *
 * Counter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ErrorBoundary from 'containers/ErrorBoundary';

import injectReducer from 'utils/injectReducer';
import makeSelectCount from './selectors';
import reducer from './reducer';
import messages from './messages';

export class Counter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ErrorBoundary>
        <div>
          <div>
            <FormattedMessage {...messages.header} />
          </div>
          <input
            type="text"
          />
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

Counter.propTypes = {
  // state
  count: PropTypes.number.isRequired,

  // events
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'counter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Counter);
