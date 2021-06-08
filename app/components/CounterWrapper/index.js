/**
*
* CounterWrapper
*
*/

import styled from 'styled-components';
import defaultTheme from './defaultTheme';

// Theme props
const primaryColor = (props) =>
  props.theme.colors.primary ?
    props.theme.colors.primary :
    defaultTheme.theme.colors.primary;

// Styling
const CounterWrapper = styled.div`
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  display: inline-block;
  font-weight: bold;
  margin-bottom: 1em;
  padding-top: .25em;
  text-align: center;
  width: 6em;
`;

export default CounterWrapper;
