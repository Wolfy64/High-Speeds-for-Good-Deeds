import React from 'react';
import { Container, Headline, Title } from './style';
import { Link } from 'react-router-dom';

export default () => (
  <Container>
    <Link to="/">
      <Title>ROAD TO IRONMANON</Title>
      <Headline>High Speeds For Good Deeds</Headline>
    </Link>
  </Container>
);
