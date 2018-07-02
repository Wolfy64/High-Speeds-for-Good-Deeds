import React from 'react';
import { Images, Image } from '../style';

export default props => {
  const images = props.images.map(image => (
    <Image key={image.id} src={image.src} />
  ));

  return <Images>{images}</Images>;
};
