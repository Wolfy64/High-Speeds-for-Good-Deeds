import styled, { css } from 'styled-components';

export const Typography = styled.p`
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};
  ${props =>
    props.smaller &&
    css`
      font-size: smaller;
    `};
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `};
`;

export const SwitchWrapper = styled.div`
  text-align: right;
  font-weight: bold;
  height: 30px;
  color: #026670;
  ${props =>
    props.isOpen &&
    css` {
    color: #9feed7;
  `};
`;

export const Wrapper = styled.article`
  text-align: justify;
  background-color: white;
  color: #9f9792;
  overflow: hidden;
  margin: 20px 20px 20px 20px;
  padding: 10px;
  border-radius: 5px;
  max-width: 960px;
  transition: height 600ms ease-out;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
