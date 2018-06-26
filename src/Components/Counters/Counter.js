import React from 'react';
import styled from 'styled-components';

export default props => {
  const Amount = styled.span`
    font-size: 2rem;
    margin: auto;
    margin-right: 0;

    @media (max-width: 500px) {
      margin: auto;
      margin-bottom: inherit;
    }
  `;

  const Typography = styled.span`
    margin: auto;
    margin-left: 5px;
    white-space: nowrap;

    @media (max-width: 500px) {
      margin: auto;
      margin-top: inherit;
    }
  `;

  const Counter = styled.div`
    flex: 1;
    margin-right: 20px;
    margin-left: 20px;
    width: 100px;
    display: flex;
    height: 100px;
    border-radius: 5px;
    background-color: ${() => (props.moneyRaised ? '#9FEDD7' : '#026670')} ;
    color: ${() => (props.moneyRaised ? '#026670' : '#9FEDD7')};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

    @media (max-width: 500px) {
      flex-direction: column;
  }
}
`;

  let counter = (
    <React.Fragment>
      <Amount>{props.goodDeeds}</Amount>
      <Typography>Good Deeds</Typography>
    </React.Fragment>
  );

  if (props.moneyRaised) {
    counter = (
      <React.Fragment>
        <Amount>{props.moneyRaised} £</Amount>
        <Typography>Money Raised</Typography>
      </React.Fragment>
    );
  }

  return <Counter>{counter}</Counter>;
};
