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
import CounterButton from 'components/CounterButton';
import CounterButtonWrapper from 'components/CounterButtonWrapper';
import CounterTextInput from 'components/CounterTextInput';
import CounterTextWrapper from 'components/CounterTextWrapper';
import CounterWrapper from 'components/CounterWrapper';

import injectReducer from 'utils/injectReducer';
import { makeSelectCount } from './selectors';
import { decrementAction, incrementAction, setAction } from './actions';
import reducer from './reducer';
import messages from './messages';

export class Counter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ErrorBoundary>
        <CounterWrapper>
          <CounterTextWrapper>
            <FormattedMessage {...messages.header} />
            <CounterTextInput
              count={this.props.count}
              handleChange={this.props.onChangeCount}
            />
          </CounterTextWrapper>
          <CounterButtonWrapper>
            <CounterButton handleClick={this.props.onIncrementCount}>+</CounterButton>
            <CounterButton handleClick={this.props.onDecrementCount}>-</CounterButton>
          </CounterButtonWrapper>
        </CounterWrapper>
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
