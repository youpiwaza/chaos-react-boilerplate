/**
 *
 * TestPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTestPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Test Page</title>
          <meta name="description" content="Page created in order to run several tests" />
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}

TestPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testpage: makeSelectTestPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testPage', reducer });
const withSaga = injectSaga({ key: 'testPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestPage);
