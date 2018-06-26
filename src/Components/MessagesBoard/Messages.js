import React from 'react';
import styled from 'styled-components';

const Messages = styled.div`
  text-align: center;
  flex: 2;
`;

const Message = styled.div`
  background-color: ${props =>
    props.type === 'moneyRaised' ? '#9fedd7' : '#026670'};
  color: ${props => (props.type === 'moneyRaised' ? '#026670' : '#9fedd7')};
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 340px;
  min-height: 100px;
  border: 2px solid
    ${props => (props.type === 'moneyRaised' ? '#9fedd7' : '#026670')};
`;

const Post = styled.div`
  width: 200px;
  color: #026670;
  background-color: white;
  padding: 5px;
  border-radius: 3px 0px 0px 3px;
  word-wrap: break-word;
`;

const Name = styled.p`
  font-size: smaller;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const Content = styled.p`
  text-align: justify;
`;

const Counter = styled.div`
  margin: auto;
  flex: 1;
`;

const Amount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const Typography = styled.p`
  font-size: 1rem;
`;

export default props => {
  console.log(props);

  const messages = props.messages.map(message => (
    <Message key={message.id} type={message.type}>
      <Post>
        <Name>{message.name}</Name>
        <Content>{message.content}</Content>
      </Post>
      <Counter>
        <Amount>1</Amount>
        <Typography>Good Deeds</Typography>
      </Counter>
    </Message>
  ));

  return <Messages>{messages}</Messages>;
};
