import React, { Component } from 'react';
import axios from '../../config/axios';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import Container from '../container';
import Images from './Images';
import Messages from './Messages';

const Background = styled.div`
  background-color: #fef9c7;
`;

const MyContainer = styled(Container)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

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

const messages = [
  {
    id: 0,
    type: 'goodDeeds',
    name: 'Jonh Doe',
    content: `Laborum in ullamco ut ullamco tempor.`,
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 1,
    type: 'moneyRaised',
    name: 'Jonh Doe',
    content: `Ullamco quis exercitation officia sunt ad cillum commodo dolor consectetur. Esse voluptate commodo nostrud labore aute adipisicing elit. Dolor proident ipsum proident in in qui enim ut laborum minim consectetur officia amet. Commodo cillum proident deserunt pariatur aliquip mollit magna dolor qui anim id aliquip ea esse.
    Elit ea reprehenderit sunt adipisicing officia pariatur. Cillum ullamco ipsum laboris amet elit irure. Reprehenderit ad non dolore eiusmod consequat. Ut nisi commodo culpa qui in minim proident Lorem. In laborum deserunt commodo cupidatat et cupidatat dolore eiusmod do minim veniam occaecat esse aliquip. Consequat laboris laboris officia ad sit consectetur`,
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 2,
    type: 'moneyRaised',
    name: 'Jonh Doe',
    content: 'Laborum in ullamco ut ullamco tempor.',
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 3,
    type: 'goodDeeds',
    name: 'Jonh Doe',
    content: 'Laborum in ullamco ut ullamco tempor.',
    moneyRaised: 100,
    goodDeeds: 1
  }
];

class MessageBoard extends Component {
  state = {
    messages: [
      {
        firstName: 'john',
        lastName: 'Doe',
        text: 'Hello World',
        typeMessage: 'goodDeeds',
        goodDeeds: 1,
        moneyRaised: 0
      },
      {
        firstName: 'jane',
        lastName: 'Doe',
        text: 'Answer life is 42',
        typeMessage: 'moneyRaised',
        goodDeeds: 0,
        moneyRaised: 100
      }
    ],
    images: []
  };

  componentDidMount() {
    // const messages = axios
    //   .get('/messages.json')
    //   .then(res => [...test])
    //   .catch(error => console.log('[ERROR]', error));
    // console.log('[DATA]', messages);
    // console.log('[TEST]', test);
  }

  render() {
    // console.log(this.state.messages);

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

export default MessageBoard;
