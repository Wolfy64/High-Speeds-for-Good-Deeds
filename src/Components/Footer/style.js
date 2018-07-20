import styled from 'styled-components';

export const Container = styled.div`
  font-size: small;
  background-color: #edeae5;
  /* height: 80px; */
  color: #026670;
  padding: 5px;
  text-align: center;

  img {
    margin: 10px 20px;
    &:hover,
    :active,
    :focus {
      transition: all 0.2s ease-in;
      background: #fce280;
      border-radius: 5px;
    }
  }
`;

export const Name = styled.p`
  font-weight: 900;
  margin: 0px 5px;
`;
export const Terms = styled.p`
  font-weight: smaller;
  margin: 0px;
  a {
    &:hover,
    :active,
    :focus {
      transition: all 0.2s ease-in;
      background: #fce280;
      border-radius: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  /* background-color: olivedrab; */
  /* display: flex; */
  margin: auto;
  max-width: 960px;
  text-align: center;
`;
