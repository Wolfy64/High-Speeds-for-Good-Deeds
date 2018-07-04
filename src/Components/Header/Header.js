import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Headline, Title } from './style';

export default () => (
  <Container>
    <Link to="/">
      <Title>ROAD TO IRONMANON</Title>
      <Headline>High Speeds For Good Deeds</Headline>
    </Link>
  </Container>
);
