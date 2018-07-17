import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import { Image, Images } from './style';

export default props => {
  const image = props.images.map(image => (
    <Image key={image.id} className="swiper-slide">
      <img src={image.src} alt={image.title} onClick={props.clicked} />
    </Image>
  ));

  const carousel = (
    <React.Fragment>
      <div className="swiper-wrapper">{image}</div>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </React.Fragment>
  );

  new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  return (
    <Images className="swiper-container">
      {props.carousel ? carousel : image}
    </Images>
  );
};
