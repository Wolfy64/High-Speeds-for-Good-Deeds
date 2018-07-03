import React from 'react';
import { Link } from 'react-router-dom';
import { goodDeedList } from '../../config';
import { MyButton } from './style';

export default () => {
  const goodDeeds = goodDeedList.map(gd => {
    return (
      <Link
        key={gd.id}
        to={{
          pathname: `/good-deeds/${gd.id}`,
          state: {
            goodDeed: gd.deed
          }
        }}
      >
        <MyButton variant="contained" color="primary">
          {gd.deed}
        </MyButton>
      </Link>
    );
  });

  return <React.Fragment>{goodDeeds}</React.Fragment>;
};
