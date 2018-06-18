import styled from 'styled-components';

const StyledCounterButton = styled.button`
  border-left: 1px solid mediumseagreen;
  border-right: 1px solid mediumseagreen;
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
    background-color: mediumseagreen;
    color: white;
  }
`;

export default StyledCounterButton;
