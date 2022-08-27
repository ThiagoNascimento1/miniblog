import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 2rem 4rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 5rem;
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  border: .1rem solid #999;
  border-radius: 10px;
  padding: .5rem 1rem;
  margin-top: 1rem;

  .icon {
    display: block;
    font-size: 2.2rem;
  }
`;

export const Input = styled.input`
  flex: 1;
`;

export const Button = styled.button`
  display: block;
  margin: 1rem auto;
`;

export const ButtonDisabled = styled.button`
  display: block;
  margin: 1rem auto;
  color: #ccc;
`;

export const Footer = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-size: 1.2rem;

  a {
    color: #4169e1;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;