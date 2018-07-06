import React from 'react';
import { Typography } from './style';
import { Authentication, Form } from '../../Components';

export default props => {
  let goodDeed = null;
  if (props.location.state) {
    goodDeed = props.location.state.goodDeed;
  }
  return (
    <React.Fragment>
      <Typography>
        {(goodDeed && <p>{goodDeed}</p>) || (
          <p>Oops! Something went wrong... ¯\_(o_o)_/¯</p>
        )}
      </Typography>
      {/* <Authentication /> */}
      {props.location && (
        <Form text={goodDeed || ''} goodDeeds={1} type="Good Deeds" />
      )}
    </React.Fragment>
  );
};
