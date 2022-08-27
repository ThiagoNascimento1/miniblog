import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 4rem;
`;

export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  font-size: 2.2rem;
`;

export const Item = styled.div`
  font-size: 1.8rem;
  margin: 1.2rem 0;
  font-weight: 400;
  font-style: italic;
`;

export const Credits = styled.div`
  font-size: 1.5rem;
  margin-top: 12rem;
  text-align: right;
  font-weight: 400;
  font-style: italic;

  a {
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`;