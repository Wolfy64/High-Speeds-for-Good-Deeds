import React from 'react';
import { Container, Name, Terms, Wrapper } from './style';
import email from '../../assets/email.png';
import instagram from '../../assets/instagram.png';

export default () => (
  <Container>
    <Wrapper>
      <Name>Manon van Thorenburg</Name>
      <a href="mailto:manonvan@gmail.com?Subject=High%20speed%20for%20good%20deeds%20Website">
        <img src={email} alt="email" />
      </a>
      <a
        href="https://www.instagram.com/against.thetide/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <Terms>
        Made by
        <a href="mailto:contact@dewulfdavid.com?Subject=High%20speed%20for%20good%20deeds%20Website">
          {' '}
          David De Wulf{' '}
        </a>
        -{' '}
        <a
          href="https://www.freeprivacypolicy.com/privacy/view/43a9b7024084e36dd20c29faa33d2879"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </Terms>
    </Wrapper>
  </Container>
);
