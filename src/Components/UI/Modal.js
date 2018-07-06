import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  transition: opacity 0.15s linear;
  z-index: 100;
`;
