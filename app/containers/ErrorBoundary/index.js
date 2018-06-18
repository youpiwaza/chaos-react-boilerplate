/**
 *
 * ErrorBoundary
 * Error managing HOC
 * Used both globaly & locally
 *
 * react doc : https://reactjs.org/docs/error-boundaries.html
 * react example : https://codepen.io/gaearon/pen/wqvxGa?editors=0010
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectErrorBoundary from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ErrorBoundary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2><FormattedMessage {...messages.errorTitle} /></h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children:
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  errorboundary: makeSelectErrorBoundary(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'errorBoundary', reducer });
const withSaga = injectSaga({ key: 'errorBoundary', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ErrorBoundary);
