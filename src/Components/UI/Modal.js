import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 100;
`;
