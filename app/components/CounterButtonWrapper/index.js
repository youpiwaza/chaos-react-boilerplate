/**
*
* CounterButtonWrapper
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
const CounterButtonWrapper = styled.div`
  border-top: 2px solid ${primaryColor};
  width: 100%;
`;

export default CounterButtonWrapper;
