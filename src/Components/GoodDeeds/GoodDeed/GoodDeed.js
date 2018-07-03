import React from 'react';
import { Typography } from './style';
import { Form } from '../../index';

export default props => {
  return (
    <React.Fragment>
      <Typography>
        <p>{props.location.state.goodDeed}</p>
      </Typography>
      <Form message={props.location.state.goodDeed} />
    </React.Fragment>
  );
};
