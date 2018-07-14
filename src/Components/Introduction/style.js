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
`;

export const Wrapper = styled.article`
  height: 200px;
  text-align: justify;
  background-color: white;
  color: #9f9792;
  overflow: hidden;
  margin: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  max-width: 960px;
  transition: height 600ms ease-out;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  ${props =>
    props.collapse &&
    css`
      overflow: hidden;
      height: 2000px;
      transition: height 600ms ease-out;
    `};
`;
