import styled from 'styled-components';

import Post from './Post';
import Counter from './Counter';
import Name from './Name';
import Text from './Text';
import Amount from './Amount';
import Type from './Type';

const Message = styled.div`
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

Message.Post = Post;
Message.Counter = Counter;
Message.Name = Name;
Message.Text = Text;
Message.Amount = Amount;
Message.Type = Type;

export default Message;
