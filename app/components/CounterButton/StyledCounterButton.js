
import styled from 'styled-components';
import defaultTheme from './defaultTheme';

// Theme props
const primaryColor = (props) =>
  props.theme.colors.primary ?
    props.theme.colors.primary :
    defaultTheme.theme.colors.primary;

// Styling
const StyledCounterButton = styled.button`
  border-left: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  color: ${primaryColor};
  font-weight: bold;
  height: 3em;
  text-align: center;
  width: 50%;
  
  // 2 buttons, 2px vertical separtor emulated through borders
  // css trick to prevent vertical align wreckage
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    border-right: 0;
  }

  &:hover {
    background-color: ${primaryColor};
    color: white;
  }
`;

export default StyledCounterButton;
