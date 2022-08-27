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
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  max-width: 70%;
  padding: 1.5rem 1rem;
`;

export const Label = styled.label`
  margin-bottom: 2rem;
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: .1rem solid #999;
  border-radius: 10px;
  padding: .5rem 1rem;
  margin-top: .5rem;

  .icon {
    display: block;
    font-size: 2.2rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0;
  font-size: 1.8rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 9.4rem;
  resize: none;
  padding: 0;
  font-size: 1.8rem;
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