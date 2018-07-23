import styled from 'styled-components';

export const Images = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  height: max-content;
  flex: 1;
  align-self: self-start;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.div`
  margin: 5px;
  width: 100px;
  height: 100px;
  border: 2px solid #9fedd7;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  &:hover,
  :focus,
  :active {
    box-shadow: 0 7px 6px 0 #cec8c8;
    -ms-transform: translateY(-3px);
    transform: translateY(-3px);
    transition: all 0.3s ease;
  }
`;
