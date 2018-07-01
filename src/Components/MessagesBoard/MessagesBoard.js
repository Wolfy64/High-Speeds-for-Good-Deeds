import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import Container from '../container';
import Images from './Images';
import Messages from './Messages';

import { database } from '../../config/firebase';

const images = [
  {
    id: 0,
    src: 'https://source.unsplash.com/random/200x200',
    title: 'Image',
    author: 'author'
  },
  {
    id: 1,
    src: 'https://source.unsplash.com/random/200x200',
    title: 'Image',
    author: 'author'
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/random/200x200',
    title: 'Image',
    author: 'author'
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/random/200x200',
    title: 'Image',
    author: 'author'
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/random/200x200',
    title: 'Image',
    author: 'author'
  }
];

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: []
  };

  componentDidMount() {
    database.on('value', snap => {
      this.setState({ messages: snap.val() });
    });
  }

  render() {
    return (
      <Background>
        <Wrapper>
          <MyContainer>
            <Images images={images} />
            <Messages messages={this.state.messages} />
          </MyContainer>
        </Wrapper>
      </Background>
    );
  }
}

const Background = styled.div`
  background-color: #fef9c7;
`;

const MyContainer = styled(Container)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
