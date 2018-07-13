import React from 'react';
import { Wrapper } from '../../Components';

const MoneyRaised = () => {
  return (
    <Wrapper>
      <h1>Charity 1</h1>
      <embed
        type="text/html"
        src="https://donate.justgiving.com/?uri=aHR0cHM6Ly9kb25hdGUtYXBpLmp1c3RnaXZpbmcuY29tL2FwaS9kb25hdGlvbnMvYjQxY2UzZjc3MDEwNDZjZWExZjc2NGQ3ZjY1Y2ZkNDQ="
        width="320"
        height="820"
      />
    </Wrapper>
  );
};

export default MoneyRaised;
