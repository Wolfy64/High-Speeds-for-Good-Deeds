import React from 'react';
import { MyButton, Wrapper } from './style';

export default () => {
  const makeAwish =
    'http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10362912?amount=10.00&currency=GBP&reference=irm2018&exitUrl=https://www.highspeedsforgooddeeds.com%3FjgDonationId%3DJUSTGIVING-DONATION-ID';
  const ageUK =
    'http://link.justgiving.com/v1/fundraisingpage/donate/pageId/11137173?amount=10.00&currency=GBP&reference=irm&exitUrl=https://www.highspeedsforgooddeeds.com%3FjgDonationId%3DJUSTGIVING-DONATION-ID';

  return (
    <Wrapper>
      <a href={makeAwish}>
        <MyButton variant="contained" color="secondary">
          <p style={{ fontSize: '1.5rem' }}>MAKE-A-WISH UK</p>
          <p
            style={{
              maxWidth: '300px',
              textTransform: 'none'
            }}
          >
            Help grant life-changing wishes to children with critical illnesses
          </p>
        </MyButton>
      </a>
      <a href={ageUK}>
        <MyButton variant="contained" color="secondary">
          <p style={{ fontSize: '1.5rem', color: 'white' }}>AGE UK</p>
          <p
            style={{
              maxWidth: '300px',
              textTransform: 'none',
              color: 'white'
            }}
          >
            Help the elderly live life more happily and independently
          </p>
        </MyButton>
      </a>
    </Wrapper>
  );
};
