import React from 'react';
import styled from 'styled-components';

const Images = styled.div`
  text-align: center;
  flex: 1;
`;

const Image = styled.img`
  margin: 10px;
  width: 35%;
  border: 2px solid #9fedd7;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 10%;
  }
`;

export default props => {
  const images = props.images.map(image => (
    <Image key={image.id} src={image.src} />
  ));

  return <Images>{images}</Images>;
};
