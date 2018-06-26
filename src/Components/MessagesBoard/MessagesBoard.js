import React from 'react';
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
    content: 'Blalalalaallalalabkblaba',
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 1,
    type: 'moneyRaised',
    name: 'Jonh Doe',
    content:
      'Blalalalaallalalabkblaba.sd,mn dsmns dkmc kdjsnckjs,dnvkbkjvbjkebvkjebvjkebvjkerbvjkbjekm jmnv bjkernkjiofhrekjnbvjehrbvkjerbnvjekrbhvjerbvjerbkvjerbvjhkrenvjkerb vkjenbvjkhrenbjkvber jhbmvekjrbvkrjenbvjermnvkjrebvkjlrenbvjhrkenvjkrebvjkr,bv hjrevnbjrebvjn',
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 2,
    type: 'moneyRaised',
    name: 'Jonh Doe',
    content: 'Blalalalaallalalabkblaba',
    moneyRaised: 100,
    goodDeeds: 1
  },
  {
    id: 3,
    type: 'goodDeeds',
    name: 'Jonh Doe',
    content: 'Blalalalaallalalabkblaba',
    moneyRaised: 100,
    goodDeeds: 1
  }
];

const MessageBoard = () => {
  return (
    <Background>
      <Wrapper>
        <MyContainer>
          <Images images={images} />
          <Messages messages={messages} />
        </MyContainer>
      </Wrapper>
    </Background>
  );
};

export default MessageBoard;
