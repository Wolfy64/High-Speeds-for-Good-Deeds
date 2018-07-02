import React from 'react';
import { Typography } from './style';

export default props => {
  return (
    <Typography>
      <p>{props.location.state.goodDeed}</p>
    </Typography>
  );
};
