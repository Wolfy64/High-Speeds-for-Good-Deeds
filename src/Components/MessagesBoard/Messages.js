import React from 'react';
import styled from 'styled-components';
import Message from './Message/index';

export default props => {
  const messages = props.messages.map((message, id) => {
    if (message.typeMessage === 'goodDeeds') {
      return (
        <Message key={id} type={message.typeMessage}>
          <Message.Post>
            <Message.Name>
              {message.firstName} {message.lastName}
            </Message.Name>
            <Message.Text>{message.text}</Message.Text>
          </Message.Post>
          <Message.Counter>
            <Message.Amount>{message.goodDeeds}</Message.Amount>
            <Message.Type>Good Deeds</Message.Type>
          </Message.Counter>
        </Message>
      );
    }

    if (message.typeMessage === 'moneyRaised') {
      return (
        <Message moneyRaised key={id} type={message.typeMessage}>
          <Message.Post>
            <Message.Name>
              {message.firstName} {message.lastName}
            </Message.Name>
            <Message.Text>{message.text}</Message.Text>
          </Message.Post>
          <Message.Counter>
            <Message.Amount>{message.moneyRaised} £</Message.Amount>
            <Message.Type>Money Raised</Message.Type>
          </Message.Counter>
        </Message>
      );
    }

    return <p key={id}>Error loading</p>;
  });

  return <Messages>{messages}</Messages>;
};

const Messages = styled.div`
  text-align: center;
  flex: 2;
`;
