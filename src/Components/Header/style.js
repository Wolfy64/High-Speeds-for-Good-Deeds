import styled from 'styled-components';

export const Container = styled.div`
background-color: #fce181;
color: #9F9793;
padding: 5px;
margin-bottom: 20px;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
}
`;

export const Headline = styled.h2`
  font-weight: 600;
  text-align: center;
  margin: 10px 0 10px 0;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  margin: 10px 0 10px 0;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
