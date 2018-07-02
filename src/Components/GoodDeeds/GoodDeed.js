import React from 'react';

export default props => {
  // console.log(props);
  let goodDeed = '';
  if (props.location.state.goodDeed === 'undefined') goodDeed = 'NOPE';
  goodDeed = props.location.state.goodDeed;
  return <h1>{goodDeed}</h1>;
};
