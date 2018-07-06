import styled from 'styled-components';

export const Amount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Counter = styled.div`
  margin: auto;
  flex: 1;
`;

export const Message = styled.div`
  background-color: ${props => (props.moneyRaised ? '#9fedd7' : '#026670')};
  color: ${props => (props.moneyRaised ? '#026670' : '#9fedd7')};
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 300px;
  min-height: 100px;
  border: 2px solid ${props => (props.moneyRaised ? '#9fedd7' : '#026670')};
`;

export const Name = styled.p`
  font-size: smaller;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

export const Post = styled.div`
  width: 200px;
  color: #026670;
  background-color: white;
  padding: 5px;
  border-radius: 3px 0px 0px 3px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  text-align: justify;
`;

export const Type = styled.p`
  font-size: small;
`;
