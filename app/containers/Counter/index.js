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
import { makeSelectCount } from './selectors';
import { decrementAction, incrementAction, setAction } from './actions';
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
            onChange={this.props.onChangeCount}
            type="text"
            value={this.props.count}
          />
          <div>
            <button onClick={this.props.onIncrementCount}>+</button>
            <button onClick={this.props.onDecrementCount}>-</button>
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
  onDecrementCount: PropTypes.func.isRequired,
  onIncrementCount: PropTypes.func.isRequired,
  onChangeCount: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    onDecrementCount: () => dispatch(decrementAction()),
    onIncrementCount: () => dispatch(incrementAction()),
    onChangeCount: (evt) => dispatch(setAction(evt.target.value)),
    // dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'counter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Counter);
