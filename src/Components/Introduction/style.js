import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  font-size: initial;
  background-color: rgb(252, 226, 128);
  width: fit-content;
  margin: auto;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Hr = styled.hr`
  width: 50%;
  border: 1px solid #fce280;
`;

export const Typography = styled.p`
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
      color: #77777c;
    `};
  ${props =>
    props.smaller &&
    css`
      font-size: smaller;
      margin: 0;
    `};
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `};

  b {
    color: #77777c;
  }
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
